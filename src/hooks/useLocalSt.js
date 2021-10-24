import { useState, useEffect } from "react";

export default function useLocalSt(key, defaultVal) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, defaultVal, state]);

  return [state, setState];
}
