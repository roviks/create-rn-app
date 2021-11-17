const initForm = (...names) => {
  let res = {};
  if (names.length > 0) {
    names.map(name => {
      res = {
        ...res,
        [name]: {
          value: '',
          error: '',
          warning: '',
        },
      };
      return name;
    });
  }
  return res;
};

export default initForm;
