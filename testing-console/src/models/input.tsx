// import { ChangeEvent, CSSProperties, ReactChildren } from 'react';
import { RequestData } from './request';

export interface ResponseModel {
  [key: string]: unknown;
  data: RequestData[];
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
  // onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // placeholder?: string;
  // style?: CSSProperties;
  // type: string;
  value: string | number | readonly string[] | undefined;
}
