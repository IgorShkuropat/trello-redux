import { useState, useEffect,} from "react";
import { TState } from "../Types/Types";
import { ILocalStorage } from "../Types/Types";

export const useLocalStorage: ILocalStorage = (initialValue, key) => {
  const getValue = (): TState => {
    const storage: string | null = localStorage.getItem(key); 

    if (storage) {
      return JSON.parse(storage); // '{}',
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
