import React, {useContext, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {ArrowLongRight} from '~/assets/svg';
import {Button, Container, Input, Text} from '~/components/common';
import mainStyles from '~/components/mainStyles';
import {LOGIN_WITH_SOCIAL, REGISTER_VERIFY} from '~/constants/routeNames';
import initForm from '~/helpers/initForm';
import validateInputs from '~/helpers/validateInputs';
import styles from './styles';

const Register = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [form, setForm] = useState(initForm('userName', 'number', 'password'));

  const [textInput1, setTextInput1] = useState(null);
  const [textInput2, setTextInput2] = useState(null);
  const [textInput3, setTextInput3] = useState(null);

  const onChange = ({name, value}) => {
    validateInputs({setForm, form, name, value});
  };

  return (
    <Container
      scroll
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 10,
        justifyContent: 'space-around',
      }}>
      <Text style={[mainStyles.h1]}>{`welcome to our\ngrocery shop`}</Text>

      <View style={styles.formContainer}>
        <View>
          <View style={mainStyles.mb20}>
            <Input
              label="Name"
              placeholder="John Dorman"
              value={form?.userName?.value || null}
              error={form?.userName?.error || null}
              warning={form?.userName?.warning || null}
              onSubmitEditing={() => {
                textInput2?.focus();
              }}
              inputRef={el => setTextInput1(el)}
              onChangeText={value => {
                onChange({name: 'userName', value});
              }}
            />
          </View>
          <View style={mainStyles.mb20}>
            <Input
              label="Phone Number"
              placeholder="+998903213530"
              value={form?.number?.value || null}
              error={form?.number?.error || null}
              warning={form?.number?.warning || null}
              onSubmitEditing={() => {
                textInput3?.focus();
              }}
              inputRef={el => setTextInput2(el)}
              onChangeText={value => {
                onChange({name: 'number', value});
              }}
            />
          </View>
          <View style={{marginBottom: 50}}>
            <Input
              label="Password"
              placeholder="********"
              secureTextEntry={true}
              isSecureEntry={isSecureEntry}
              setIsSecureEntry={setIsSecureEntry}
              onSubmitEditing={() => navigation.navigate(REGISTER_VERIFY)}
              inputRef={el => setTextInput3(el)}
              value={form?.password?.value || null}
              error={form?.password?.error || null}
              warning={form?.password?.warning || null}
              onChangeText={value => {
                onChange({name: 'password', value});
              }}
            />
          </View>
        </View>
        <View
          style={[
            mainStyles.row,
            mainStyles.alignCenter,
            mainStyles.justifySpaceBetween,
            mainStyles.mb20,
          ]}>
          <Text style={mainStyles.h2}>Sign Up</Text>
          <Button
            icon={() => <ArrowLongRight width="29" height="14" />}
            onPress={() => navigation.navigate(REGISTER_VERIFY)}
            style={{width: 70, borderRadius: 10}}
          />
        </View>
        <View
          style={[
            mainStyles.row,
            mainStyles.justifyCenter,
            mainStyles.alignCenter,
          ]}>
          <Text>Already Have Account? </Text>
          <TouchableOpacity
            style={{marginLeft: 5}}
            onPress={() => navigation.navigate(LOGIN_WITH_SOCIAL)}>
            <Text main bold>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Register;
