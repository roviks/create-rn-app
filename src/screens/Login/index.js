import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {Button, Container, Input} from '~/components/common';
import mainStyles from '~/components/mainStyles';
import styles from './styles';
import {FORGET_PASSWORD, REGISTER} from '~/constants/routeNames';
import validateInputs from '~/helpers/validateInputs';
import loginUser from '~/context/actions/auth/loginUser';
import {GlobalContext} from '~/context/Provider';
import initForm from '~/helpers/initForm';
import Row from '~/components/common/Row';
import {COLORS} from '~/constants/theme';
import {EyeCloseIcon, EyeOpenIcon} from '~/assets/svg';

const Login = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [form, setForm] = useState(initForm('number', 'password'));

  const [textInput1, setTextInput1] = useState(null);
  const [textInput2, setTextInput2] = useState(null);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    validateInputs({setForm, form, name, value});
  };

  const onSumbit = () => {
    loginUser({userName: 'Ravshan Ibragimov', password: '12345678'})(
      authDispatch,
    );
  };

  return (
    <Container
      scroll
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}>
      <View>
        <View>
          <Text style={[styles.title]}>
            Enjoy the features for you to a transaction
          </Text>
        </View>
        <View>
          <View style={styles.inputWrapper}>
            <Row justify="space-between" style={{marginTop: 50}}>
              <View
                style={[
                  styles.iconWrapper,
                  {backgroundColor: COLORS.accentBlue},
                ]}>
                <EyeOpenIcon fill="#FFF" />
              </View>
              <View style={{flex: 1, marginLeft: 20}}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </View>
            </Row>
          </View>
          <View style={styles.inputWrapper}>
            <Row justify="space-between" style={{marginTop: 50}}>
              <View
                style={[styles.iconWrapper, {backgroundColor: COLORS.warning}]}>
                <EyeOpenIcon fill="#FFF" />
              </View>
              <View style={{flex: 1, marginLeft: 20}}>
                <Text style={styles.label}>Password</Text>
                <Row>
                  <TextInput
                    secureTextEntry={isSecureEntry}
                    autoCapitalize="none"
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={() => setIsSecureEntry(prev => !prev)}>
                    {isSecureEntry ? <EyeOpenIcon /> : <EyeCloseIcon />}
                  </TouchableOpacity>
                </Row>
              </View>
            </Row>
          </View>
        </View>
        <View style={{marginVertical: 24}}>
          <Text style={{color: COLORS.white05, textAlign: 'right'}}>
            Forgot Your Password?
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 0}}>
        <View>
          <Button title="Login" />
        </View>
        <View style={{marginTop: 32, paddingBottom: 30}}>
          <Text style={[styles.footerText]}>
            Don’t have an account?{' '}
            <Text style={[styles.footerTextAccent]}>Register Now</Text>
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Login;
