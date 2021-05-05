import { ChangeEvent, Reducer, SetStateAction, useEffect, useReducer, useState } from 'react';
// import { PathReporter } from 'io-ts/lib/PathReporter';
import { pipe } from 'fp-ts/lib/function';
import * as t from 'io-ts';
import * as D from 'io-ts/Decoder';
// import { pipe } from 'fp-ts/lib/pipeable';
import { fold, right, fromPredicate, foldMap } from 'fp-ts/lib/Either';
import { isLeft } from 'fp-ts/lib/These';
import { chain, mapLeft } from 'fp-ts/lib/EitherT';
import { fromEither } from 'fp-ts/lib/TaskEither';
import * as E from 'fp-ts/Either';

interface StringType {
  readonly StringSimbol: unique symbol;
}

const StringSimbol = t.brand(
  t.string,
  (s: string): s is t.Branded<string, StringType> =>
    pipe(
      s,
      () => typeof s === 'string',
      (valid) => valid && s.length > 3,
      (length) => length && s.includes('@'),
    ),
  'StringSimbol',
);

type Stringer = t.TypeOf<typeof StringSimbol>;

export const interfacePerson = t.type({
  name: t.string,
  // email: String,
  age: t.number,
});

export type Person = typeof interfacePerson;
// // const minLength = (n: number): string =>
//   pipe(
//     Decoder.string,
//     Decoder.fromRefinement(),
//     // Decoder.refine((input): input is string => input.length > n),
//     // Decoder.refine((input): input is string => input.length > n, `minimum     length should be ${n}`),
//   );
// const initialState = {
//   name: '',
//   email: EmailSimbol,
//   age: 0,
// };
interface Payload {
  payload: {
    name: 'name' | 'email' | 'age';
    value: string | number;
  };
}

const reducer: Reducer<Person, Payload> = (state, action): Person => {
  console.log('🚀 ~ file: index.tsx ~ line 44 ~ state, action', state, action);
  return state;
  // const test = {...state, t.encode({[action.payload.name]: action.payload.value})}
  // return interfacePerson.decode({ ...state.props, [action.payload.name]: action.payload.value });
  // t.UnknownRecord.decode(record)).toEqual(E.right(record)
  // return pipe(
  // interfacePerson.props[action.payload.name].decode({ [action.payload.name]: action.payload.value }),
  // foldL(
  //   xxx =>
  // )
  // xxx =>
  // fold(
  //   (xxx) => state,
  //   (res) => ({ ...state, res }),
  // ),
  // ),
  // xxx =>
  // interfacePerson.props[action.payload.name].decode({ [action.payload.name]: action.payload.value }),
  // fold(
  //   (err) => {
  //     console.log('err', err);
  //     return state;
  //   },
  //   (res) => {
  //     console.log('res', res);
  //     return state;
  //   },
  // ),
  // );
};
const TestModel = t.partial({
  test1: StringSimbol,
  test2: t.string,
});
type Test = t.TypeOf<typeof TestModel>;

const Form = (): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<Person, Payload>>(reducer, interfacePerson);
  // const [input, setInput] = useState<Stringer>({ test1: StringSimbol.decode(''), test2: t.string.encode('') });
  // const [input, setInput] = useState<Stringer>();
  const [input, setInput] = useState<Test>();
  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 55 ~ state >>>>>', input);
  }, [input]);
  // const getValue = (err: string | number, key: 'name' | 'age' | 'email'): string | number =>
  //   pipe(
  //     interfacePerson.decode(state),
  //     fold(
  //       (error) => err,
  //       (res) => res[key],
  //     ),
  //   );
  const handleNumber = ({ name, value }: { name: 'name' | 'age' | 'email'; value: string | number }): void => {
    // console.log('🚀 ~ file: index.tsx ~ line 40 ~ state', name, value);
    dispatch({ payload: { name, value } });
  };
  return (
    <div>
      <input
        type="text"
        // value={pipe(
        //   TestModel.decode(input),
        //   fold(
        //     (err) => '',
        //     (res) => res.name,
        //   ),
        // )}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
          // console.log('🚀 ~ file: index.tsx ~ line 124 ~ value', value);
          // setInput(t.string.encode(value));
          pipe(
            TestModel.props.test1.decode(value),
            fold(
              (err) => {
                console.log('🚀 ~ file: index.tsx ~ line 119 ~ err', err);
                // setInput();
              },
              (res) => {
                console.log('🚀 ~ file: index.tsx ~ line 135 ~ res', res);
                const response: Test = { ...input, test1: res };
                setInput(response);
              },
            ),
          );
        }}
      />
      {/* <input
    
        type="text"
        value={getValue('', 'name')}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => handleNumber({ name: 'name', value })}
      />
      <input
        type="text"
        value={getValue('', 'email')}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => dispatch({ payload: { name: 'email', value } })}
      />
      <input
        type="text"
        value={getValue(0, 'age')}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => handleNumber({ name: 'age', value })}
      /> */}
    </div>
  );
};

export default Form;
