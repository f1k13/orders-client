export const formatPhoneNumber = (input: string): string => {
  if (input.length > 16) {
    return input.slice(0, 16);
  }

  const cleaned = ("" + input).replace(/\D/g, "");

  const match = cleaned.match(
    /^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/
  );

  if (match) {
    let formattedNumber = "";
    if (match[1]) {
      formattedNumber += `+${match[1]}`;
    }
    if (match[2]) {
      formattedNumber += ` ${match[2]}`;
    }
    if (match[3]) {
      formattedNumber += ` ${match[3]}`;
    }
    if (match[4]) {
      formattedNumber += `-${match[4]}`;
    }
    if (match[5]) {
      formattedNumber += `-${match[5]}`;
    }
    return formattedNumber;
  }

  return cleaned;
};
