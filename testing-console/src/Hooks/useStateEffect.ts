import { EffectCallback, useEffect, useState } from 'react';

const useStateEffect = <T>(initialValue: T, fn: Function):[T, React.Dispatch<React.SetStateAction<T>>] =>{
  const [state, setState] = useState(initialValue);
  useEffect(()=>{
    fn(state);
  }, [state]);
  return [state, setState];
};

export default useStateEffect;
