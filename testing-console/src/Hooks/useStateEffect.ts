import { useEffect, useState } from 'react';

const useStateEffect = <T>(initialValue: T, fn?: (t:T)=>unknown):[T, React.Dispatch<React.SetStateAction<T>>] =>{
  const [state, setState] = useState<T>(initialValue);
  useEffect((): void =>{
    fn instanceof Function && fn(state);
  }, [state, fn]);
  return [state, setState];
};

export default useStateEffect;
