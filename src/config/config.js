export const checkValueHightLow = (string) => {
  if (string.includes("Lower")) {
    return "▼";
  } else if (string.includes("Higher")) {
    return "▲";
  }
  return "";
};
export const convertDateOfBirth = (dobString) => {
  const [month, day, year] = dobString.split("/");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = months[parseInt(month, 10) - 1];

  return `${monthName} ${parseInt(day, 10)}, ${year}`;
};
