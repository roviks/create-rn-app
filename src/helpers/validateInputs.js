import validateEmail from './validateEmail';

export default ({setForm, setErrors, setWarnings, form, name, value}) => {
  setForm({...form, [name]: value});
  if (value !== '' && value.trim().length > 0) {
    if (name === 'password' || name === 'passwordConfirm') {
      if (value.length < 8) {
        setWarnings(prev => {
          return {...prev, [name]: 'Это поле должно содержать минимум 8 символов'};
        });
      } else {
        setWarnings(prev => {
          return {...prev, [name]: null};
        });
        setErrors(prev => {
          return {...prev, [name]: null};
        });
        if (name === 'passwordConfirm') {
          if (value !== form.password) {
            setErrors(prev => {
              return {
                ...prev,
                [name]: 'Пароли не совпадают',
              };
            });
          } else {
            setErrors(prev => {
              return {...prev, [name]: null, password: null};
            });
          }
        } else if (name === 'password') {
          if (form.passwordConfirm) {
            if (value !== form.passwordConfirm) {
              setErrors(prev => {
                return {
                  ...prev,
                  [name]: 'Пароли не совпадают',
                };
              });
            } else {
              setErrors(prev => {
                return {...prev, [name]: null, passwordConfirm: null};
              });
              setWarnings(prev => {
                return {
                  ...prev,
                  [name]: null,
                };
              });
            }
          }
        }
      }
    } else if (name === 'email') {
      if (!validateEmail(value)) {
        setWarnings(prev => {
          return {
            ...prev,
            [name]: 'Некорректный email',
          };
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
        setWarnings(prev => {
          return {...prev, [name]: null};
        });
        setWarnings(prev => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
      setWarnings(prev => {
        return {
          ...prev,
          [name]: null,
        };
      });
    }
  } else {
    setWarnings(prev => {
      return {
        ...prev,
        [name]: null,
      };
    });
    setErrors(prev => {
      return {...prev, [name]: 'Это поле обязательно к заполнению'};
    });
  }
};
