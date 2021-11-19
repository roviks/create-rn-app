import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  Keyboard,
  Linking,
} from 'react-native';
import {Button, Container, Input} from '~/components/common';
import mainStyles from '~/components/mainStyles';
import styles from './styles';
import {FORGET_PASSWORD, REGISTER} from '~/constants/routeNames';
import validateInputs from '~/helpers/validateInputs';
import loginUser from '~/context/actions/auth/loginUser';
import {GlobalContext} from '~/context/Provider';
import initForm from '~/helpers/initForm';
import Row from '~/components/common/Row';
import {COLORS, SCREEN} from '~/constants/theme';
import {EyeCloseIcon, EyeOpenIcon} from '~/assets/svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInputt from '~/components/common/TextInputt';

const Login = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [form, setForm] = useState(initForm('number', 'password'));

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [scrollPageY, setScrollPageY] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const inputRef = React.useRef();

  const [textInput1, setTextInput1] = useState(null);
  const [textInput2, setTextInput2] = useState(null);
  const {top} = useSafeAreaInsets();
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
      }}
      onScroll={e => {
        setScrollPageY(e.nativeEvent.contentOffset.y);
      }}>
      {/* <View
        style={{
          position: 'absolute',
          backgroundColor: '#f00',
          width: '100%',
          height: SCREEN.height - 225.81817626953125 - top,
        }}
      /> */}
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
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  keyboardType="default"
                  autoCapitalize="none"
                  value={phoneNumber}
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
                  <TextInputt
                    inpRef={inputRef}
                    scrollPageY={scrollPageY}
                    value={password}
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
          <Button
            title="Login"
            onPress={async () => {
              await Linking.openURL(
                `https://t.me/aemuzbot?start=${'generatedId'}`,
              );
              console.log('SDFSDF');
            }}
          />
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
