/* eslint-disable no-control-regex */
export default phone => {
  const expression =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return expression.test(String(phone).toLowerCase());
};
