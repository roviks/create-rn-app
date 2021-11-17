export default number => {
  return number
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ')
    .replace('.0', '');
};
