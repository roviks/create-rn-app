// import validateCreditCard from './validateCreditCard';
import validateEmail from './validateEmail';
import validatePhoneNumber from './validatePhoneNumber';

export default ({setForm, form, name, value}) => {
  setForm({...form, [name]: {value, error: null, warning: null}});
  if (value === '' && value.trim().length === 0) {
    setForm(prev => {
      return {
        ...prev,
        [name]: {
          value,
          error: 'Это поле обязательно к заполнению',
          warning: '',
        },
      };
    });
    return;
  }

  switch (name) {
    case 'password':
    case 'passwordConfirm':
    case 'newPassword':
    case 'newPasswordConfirm':
      if (value.length < 8) {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: null,
            warning: 'Это поле должно содержать минимум 8 символов',
          },
        }));
      } else {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: null,
            warning: '',
          },
        }));
        switch (name) {
          case 'password':
            if (form.passwordConfirm) {
              if (value !== form.passwordConfirm?.value) {
                setForm(prev => ({
                  ...prev,
                  [name]: {
                    value,
                    error: 'Пароли не совпадают',
                    warning: '',
                  },
                  passwordConfirm: {
                    value: form?.passwordConfirm?.value,
                    error: 'Пароли не совпадают',
                    warning: '',
                  },
                }));
              } else {
                setForm(prev => ({
                  ...prev,
                  [name]: {
                    value,
                    error: null,
                    warning: '',
                  },
                  passwordConfirm: {
                    value,
                    error: null,
                    warning: '',
                  },
                }));
              }
            }
            break;
          case 'passwordConfirm':
            if (value !== form.password?.value) {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
                password: {
                  value: form?.password?.value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
              }));
            } else {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: null,
                  warning: '',
                },
                password: {
                  value,
                  error: null,
                  warning: '',
                },
              }));
            }
            break;

          case 'newPassword':
            if (value !== form.newPasswordConfirm?.value) {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
                newPasswordConfirm: {
                  value: form?.newPassword?.value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
              }));
            } else {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: null,
                  warning: '',
                },
                newPasswordConfirm: {
                  value,
                  error: null,
                  warning: '',
                },
              }));
            }
            break;
          case 'newPasswordConfirm':
            if (value !== form.newPassword?.value) {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
                newPassword: {
                  value: form?.newPassword?.value,
                  error: 'Пароли не совпадают',
                  warning: '',
                },
              }));
            } else {
              setForm(prev => ({
                ...prev,
                [name]: {
                  value,
                  error: null,
                  warning: '',
                },
                newPassword: {
                  value,
                  error: null,
                  warning: '',
                },
              }));
            }
            break;
        }
      }
      break;
    case 'number':
      if (!validatePhoneNumber(value)) {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: 'Некорректный номер',
            warning: '',
          },
        }));
      } else {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: null,
            warning: '',
          },
        }));
      }
      break;
    // case 'creditCardNumber':
    //   if (!validateCreditCard(value)) {
    //     setForm(prev => ({
    //       ...prev,
    //       [name]: {
    //         value,
    //         error: '',
    //         warning: 'Некорректный номер кредитной карточки',
    //       },
    //     }));
    //   } else {
    //     setForm(prev => ({
    //       ...prev,
    //       [name]: {
    //         value,
    //         error: null,
    //         warning: '',
    //       },
    //     }));
    //   }
    //   break;
    case 'email':
      if (!validateEmail(value)) {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: null,
            warning: 'Некорректный email',
          },
        }));
      } else {
        setForm(prev => ({
          ...prev,
          [name]: {
            value,
            error: null,
            warning: '',
          },
        }));
      }
      break;
    default:
      setForm(prev => ({
        ...prev,
        [name]: {
          value,
          error: null,
          warning: '',
        },
      }));
      break;
  }
};
