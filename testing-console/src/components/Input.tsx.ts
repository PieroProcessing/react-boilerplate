import React, { useReducer, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import paletteTheme from '../../../../theme/palette.theme';
import { inputReducer } from '../../../reducers/inputReducer';
import { INPUT_CHANGE, INPUT_BLUR } from '../../../actions/inputActions';

export interface InputProps {
  reference?: React.RefObject<TextInput> | null | undefined;
  initialValue?: string;
  initiallyValid?: boolean;
  onInputChange?: (id: string, state: string, isValid: boolean) => void;
  id: string;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorText?: string;
  email?: boolean;
  password?: boolean;
  themeColor?: string;
  inputStyle?: StyleProp<ViewStyle>;
  initiallyTouched?: boolean;
  textInputWrapperStyle?: StyleProp<ViewStyle>;
  textInputWrapperAction?: () => void;
  isError?: boolean;
}

const Input = (props: InputProps & TextInputProps) => {
  const {
    reference,
    initiallyValid,
    initialValue,
    id,
    onInputChange,
    email,
    password,
    min,
    max,
    minLength,
    required,
    errorText,
    label,
    themeColor,
    inputStyle,
    initiallyTouched,
    labelStyle,
    textInputWrapperStyle,
    textInputWrapperAction,
    placeholderTextColor,
    isError,
  } = props;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : '',
    isValid: initiallyValid,
    touched: initiallyTouched || false,
  });

  useEffect(() => {
    if (!onInputChange) return;
    if (inputState.touched) {
      onInputChange(id, inputState.value || '', inputState.isValid || false);
    }
  }, [inputState]);

  useEffect(() => {
    if (props.value) {
      dispatch({
        type: INPUT_CHANGE,
        payload: { value: props.value, isValid: true }
      });
    }
  }, [props.value]);

  const textChangeHandler = (text: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    let isValid = true;
    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (password && !passwordRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (min && +text < min) {
      isValid = false;
    }
    if (max && +text > max) {
      isValid = false;
    }
    if (text && minLength && text.length < minLength) {
      isValid = false;
    }
    dispatch({
      type: INPUT_CHANGE,
      payload: { value: text, isValid },
    });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          themeColor ? { color: themeColor } : undefined,
          labelStyle,
        ]}>
        {label}
      </Text>

      <TouchableWithoutFeedback onPress={textInputWrapperAction}>
        <View style={[styles.textInputWrapperStyle, textInputWrapperStyle]}>
          <TextInput
            ref={reference}
            {...props}
            placeholderTextColor={
              placeholderTextColor || themeColor || paletteTheme.grey
            }
            style={[
              styles.input,
              themeColor ? { borderColor: themeColor } : undefined,
              inputStyle,
            ]}
            value={inputState.value}
            onChangeText={textChangeHandler}
            onBlur={lostFocusHandler}
          />
        </View>
      </TouchableWithoutFeedback>
      {((!inputState.isValid && inputState.touched) || (isError)) && errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: paletteTheme.gutterL,
    width: '100%',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: paletteTheme.red,
    fontSize: 13,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: paletteTheme.white,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: Platform.OS === 'android' ? 1 : 2,
    color: paletteTheme.black,
    fontSize: paletteTheme.fontSizeL,
    margin: 0,
    marginVertical: paletteTheme.gutterXS,
    padding: 0,
  },
  label: {
    color: paletteTheme.white,
    fontWeight: 'bold',
    marginBottom: paletteTheme.gutterXXS,
  },
  textInputWrapperStyle: {
    flex: 0,
  },
});

export default Input;
