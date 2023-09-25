import { useCallback, useMemo, useState } from "react";

export function useSum() {
  const [numbers, setNumbers] = useState<number[]>([]);

  return {
    sum: useMemo(() => numbers.reduce((a, b) => a + b, 0), [numbers]),
    add: useCallback(
      (value: number) => {
        setNumbers([...numbers, value]);
      },
      [numbers]
    ),
  };
}
