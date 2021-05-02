// import { ChangeEvent, CSSProperties, ReactChildren } from 'react';
import { key } from 'io-ts/lib/DecodeError';
import { RequestData } from './request';
import { IObjectKeys } from './utils';

export interface ResponseModel {
  [key: string]: unknown;
  data: RequestData[];
}

export interface FormModel extends IObjectKeys {
  [key: string]: InputModel;
}
export interface FieldModel extends IObjectKeys {
  [key: string]: InputModel;
}
export interface InputModel extends IObjectKeys {
  [key: string]: unknown;
}

// type InputType = 'text';
//  'button' | 'checkbox' | 'color' | | 'time' | 'url' | 'week' | 'email'
// | 'date'
// | 'datetime-local'
// | 'email'
// | 'file'
// | 'hidden'
// | 'image'
// | 'month'
// | 'number'
// | 'password'
// | 'radio'
// | 'range'
// | 'reset'
// | 'search'
// | 'submit'
// | 'tel'

export interface InputBaseProps {
  key?: string;
  // className?: string;
  // id?: string;
  // label?: string;
  name: string;
  form: string;
  // onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // placeholder?: string;
  // style?: CSSProperties;
  // type: string;
  value: string | number | readonly string[] | undefined;
}
