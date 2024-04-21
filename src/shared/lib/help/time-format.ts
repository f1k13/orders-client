export const timeFormat = (input: string): string => {
  if (!input || typeof input !== "string") return "";

  const cleaned = input.replace(/\D/g, "");

  if (cleaned.length > 4) {
    return cleaned.slice(0, 4);
  }

  const hours = cleaned.slice(0, 2);
  const minutes = cleaned.slice(2);

  const hoursInt = parseInt(hours, 10);
  const minutesInt = parseInt(minutes, 10);
  if (hoursInt > 24 || minutesInt > 59) {
    return "Введите корректные часы и минуты";
  }

  let formattedTime = "";
  if (hours) {
    formattedTime += hours;
  }
  if (minutes) {
    formattedTime += `:${minutes}`;
  }
  return formattedTime;
};
