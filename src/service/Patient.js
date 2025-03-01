const API_URL = import.meta.env.VITE_BASE_API_URL;

const getAuthHeader = () => {
  const username = import.meta.env.VITE_USERNAME_AUTH;
  const password = import.meta.env.VITE_PASSWORD_AUTH;
  const auth = btoa(`${username}:${password}`);

  return auth;
};

export const getAllPatients = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${getAuthHeader()}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Lỗi HTTP! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bệnh nhân:", error);
    throw error;
  }
};

export const getJessicaTaylor = async () => {
  try {
    const patients = await getAllPatients();

    const jessica = patients.find(
      (patient) => patient.name === "Jessica Taylor"
    );

    if (!jessica) {
      throw new Error("Không tìm thấy dữ liệu của Jessica Taylor");
    }

    return jessica;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin Jessica Taylor:", error);
    throw error;
  }
};

export const getAverageBloodPressure = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Không tìm thấy lịch sử chẩn đoán của Jessica Taylor");
    }

    const bloodPressureRecords = jessica.diagnosis_history.filter(
      (record) => record.blood_pressure
    );

    if (bloodPressureRecords.length === 0) {
      throw new Error("Không có dữ liệu huyết áp hợp lệ");
    }

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
    console.error("Lỗi khi tính trung bình huyết áp:", error);
    throw error;
  }
};

export const getAverageHeartRate = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Không tìm thấy lịch sử chẩn đoán của Jessica Taylor");
    }

    const heartRateRecords = jessica.diagnosis_history.filter(
      (record) => record.heart_rate
    );

    if (heartRateRecords.length === 0) {
      throw new Error("Không có dữ liệu nhịp tim hợp lệ");
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
    console.error("Lỗi khi tính trung bình nhịp tim:", error);
    throw error;
  }
};
export const getAverageRespiratoryRate = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Không tìm thấy lịch sử chẩn đoán của Jessica Taylor");
    }

    const respiratoryRateRecords = jessica.diagnosis_history.filter(
      (record) => record.respiratory_rate
    );

    if (respiratoryRateRecords.length === 0) {
      throw new Error("Không có dữ liệu nhịp thở hợp lệ");
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
    console.error("Lỗi khi tính trung bình nhịp thở:", error);
    throw error;
  }
};

export const getAverageTemperature = async () => {
  try {
    const jessica = await getJessicaTaylor();
    if (!jessica || !jessica.diagnosis_history) {
      throw new Error("Không tìm thấy lịch sử chẩn đoán của Jessica Taylor");
    }

    const temperatureRecords = jessica.diagnosis_history.filter(
      (record) => record.temperature
    );

    if (temperatureRecords.length === 0) {
      throw new Error("Không có dữ liệu nhiệt độ hợp lệ");
    }

    const totalTemperature = temperatureRecords.reduce(
      (sum, record) => sum + record.temperature.value,
      0
    );
    const averageTemperature = totalTemperature / temperatureRecords.length;

    return {
      temperature: {
        value: parseFloat(averageTemperature.toFixed(1)), // Giữ 1 chữ số sau dấu thập phân
        levels: temperatureRecords[0].temperature.levels,
      },
    };
  } catch (error) {
    console.error("Lỗi khi tính trung bình nhiệt độ:", error);
    throw error;
  }
};
