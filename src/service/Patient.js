const API_URL = import.meta.env.VITE_BASE_API_URL;

// Function to generate the Basic Auth header using environment variables
const getAuthHeader = () => {
  const username = import.meta.env.VITE_USERNAME_AUTH;
  const password = import.meta.env.VITE_PASSWORD_AUTH;
  const auth = btoa(`${username}:${password}`); // Encode username and password

  return auth;
};

// Fetch all patients from the API
export const getAllPatients = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${getAuthHeader()}`, // Attach authorization header
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
};

// Fetch the details of a patient named Jessica Taylor
export const getJessicaTaylor = async () => {
  try {
    const patients = await getAllPatients();

    const jessica = patients.find(
      (patient) => patient.name === "Jessica Taylor"
    );

    if (!jessica) {
      throw new Error("Jessica Taylor's data not found");
    }

    return jessica;
  } catch (error) {
    console.error("Error fetching Jessica Taylor's information:", error);
    throw error;
  }
};

// Calculate the average blood pressure over the last 6 months
export const getAverageBloodPressure = async () => {
  try {
    const recentRecords = await getRecentDiagnosisHistory();

    if (!recentRecords || recentRecords.length === 0) {
      throw new Error("No blood pressure data available in the last 6 months");
    }

    // Filter records that contain blood pressure data
    const bloodPressureRecords = recentRecords.filter(
      (record) => record.blood_pressure
    );

    if (bloodPressureRecords.length === 0) {
      throw new Error("No valid blood pressure data in the last 6 months");
    }

    // Calculate average systolic and diastolic blood pressure
    const totalSystolic = bloodPressureRecords.reduce(
      (sum, record) => sum + record.blood_pressure.systolic.value,
      0
    );
    const totalDiastolic = bloodPressureRecords.reduce(
      (sum, record) => sum + record.blood_pressure.diastolic.value,
      0
    );

    const averageSystolic = totalSystolic / bloodPressureRecords.length;
    const averageDiastolic = totalDiastolic / bloodPressureRecords.length;

    return {
      blood_pressure: {
        systolic: {
          value: Math.round(averageSystolic),
          levels: bloodPressureRecords[0].blood_pressure.systolic.levels,
        },
        diastolic: {
          value: Math.round(averageDiastolic),
          levels: bloodPressureRecords[0].blood_pressure.diastolic.levels,
        },
      },
    };
  } catch (error) {
    console.error("Error calculating average blood pressure:", error);
    throw error;
  }
};

// Calculate the average heart rate for Jessica Taylor
export const getAverageHeartRate = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Jessica Taylor's diagnosis history not found");
    }

    const heartRateRecords = jessica.diagnosis_history.filter(
      (record) => record.heart_rate
    );

    if (heartRateRecords.length === 0) {
      throw new Error("No valid heart rate data available");
    }

    const totalHeartRate = heartRateRecords.reduce(
      (sum, record) => sum + record.heart_rate.value,
      0
    );
    const averageHeartRate = totalHeartRate / heartRateRecords.length;

    return {
      heart_rate: {
        value: Math.round(averageHeartRate),
        levels: heartRateRecords[0].heart_rate.levels,
      },
    };
  } catch (error) {
    console.error("Error calculating average heart rate:", error);
    throw error;
  }
};

// Calculate the average respiratory rate for Jessica Taylor
export const getAverageRespiratoryRate = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Jessica Taylor's diagnosis history not found");
    }

    const respiratoryRateRecords = jessica.diagnosis_history.filter(
      (record) => record.respiratory_rate
    );

    if (respiratoryRateRecords.length === 0) {
      throw new Error("No valid respiratory rate data available");
    }

    const totalRespiratoryRate = respiratoryRateRecords.reduce(
      (sum, record) => sum + record.respiratory_rate.value,
      0
    );
    const averageRespiratoryRate =
      totalRespiratoryRate / respiratoryRateRecords.length;

    return {
      respiratory_rate: {
        value: Math.round(averageRespiratoryRate),
        levels: respiratoryRateRecords[0].respiratory_rate.levels,
      },
    };
  } catch (error) {
    console.error("Error calculating average respiratory rate:", error);
    throw error;
  }
};

// Calculate the average body temperature for Jessica Taylor
export const getAverageTemperature = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Jessica Taylor's diagnosis history not found");
    }

    const temperatureRecords = jessica.diagnosis_history.filter(
      (record) => record.temperature
    );

    if (temperatureRecords.length === 0) {
      throw new Error("No valid temperature data available");
    }

    const totalTemperature = temperatureRecords.reduce(
      (sum, record) => sum + record.temperature.value,
      0
    );
    const averageTemperature = totalTemperature / temperatureRecords.length;

    return {
      temperature: {
        value: parseFloat(averageTemperature.toFixed(1)), // Keep one decimal place
        levels: temperatureRecords[0].temperature.levels,
      },
    };
  } catch (error) {
    console.error("Error calculating average temperature:", error);
    throw error;
  }
};

// Fetch the most recent 6-month diagnosis history for Jessica Taylor
export const getRecentDiagnosisHistory = async () => {
  try {
    const jessica = await getJessicaTaylor();

    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Jessica Taylor's diagnosis history not found");
    }

    const monthAbbreviations = {
      January: "Jan",
      February: "Feb",
      March: "Mar",
      April: "Apr",
      May: "May",
      June: "Jun",
      July: "Jul",
      August: "Aug",
      September: "Sep",
      October: "Oct",
      November: "Nov",
      December: "Dec",
    };

    // Sort history by most recent dates
    const sortedHistory = [...jessica.diagnosis_history].sort(
      (a, b) =>
        new Date(`${b.month} 1, ${b.year}`) -
        new Date(`${a.month} 1, ${a.year}`)
    );

    // Get the latest 6 records
    const recentHistory = sortedHistory.slice(0, 6);

    // Convert months to abbreviations
    const formattedHistory = recentHistory.map((record) => ({
      ...record,
      month: monthAbbreviations[record.month] || record.month,
    }));

    return formattedHistory;
  } catch (error) {
    console.error("Error fetching recent 6-month diagnosis history:", error);
    throw error;
  }
};
