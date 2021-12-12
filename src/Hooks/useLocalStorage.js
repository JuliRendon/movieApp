import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initVal) {
  const initialValue = localStorage.getItem(key) ?? initVal;
  const [LocalStorage, setLocalStorage] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, LocalStorage);
  }, [LocalStorage, key]);
  return [LocalStorage, setLocalStorage];
}
