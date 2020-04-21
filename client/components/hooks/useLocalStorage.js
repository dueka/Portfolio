import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (process.browser) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue, setStoredValue];
};

export default useLocalStorage;
