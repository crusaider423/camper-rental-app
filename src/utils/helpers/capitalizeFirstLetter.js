export const capitalizeFirstLetter = (string) => {
  if (typeof string !== "string") {
    return string;
  }

  let firstLetter = string.charAt(0);
  let remainingString = string.slice(1);

  if (!isNaN(firstLetter) || firstLetter === ".") {
    firstLetter = firstLetter.toLowerCase();
  }

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + remainingString;
};
