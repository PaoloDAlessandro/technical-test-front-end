export function formatBirthDay(value: string) {
  let formattedValue = value.replace(/\D/g, "");
  if (formattedValue.length > 2 && formattedValue.length <= 4) {
    formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
  } else if (formattedValue.length > 4) {
    formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2, 4) + "/" + formattedValue.slice(4);
  }
  return formattedValue;
}

export function parseDateString(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);

  return new Date(year, month - 1, day);
}
