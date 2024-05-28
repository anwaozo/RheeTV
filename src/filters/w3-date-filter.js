module.exports = (value) => {
  const dateObject = new Date(value);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
  return formatter.format(dateObject);
};
