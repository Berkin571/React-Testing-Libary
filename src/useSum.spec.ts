import { renderHook, act } from "@testing-library/react";
import { useSum } from "./useSum";

describe("useSum", () => {
  test("should start with zero", () => {
    const { result } = renderHook(() => useSum());
    expect(result.current.sum).toBe(0);
  });

  test("should sum a number", () => {
    const { result } = renderHook(() => useSum());
    act(() => {
      result.current.add(10);
    });
    expect(result.current.sum).toBe(10);
  });

  test("should sum two numbers", () => {
    const { result } = renderHook(() => useSum());
    act(() => {
      result.current.add(10);
    });
    act(() => {
      result.current.add(20);
    });
    expect(result.current.sum).toBe(30);
  });

  test("should sum multiple numbers", () => {
    const { result } = renderHook(() => useSum());
    act(() => {
      result.current.add(10);
    });
    act(() => {
      result.current.add(20);
    });
    act(() => {
      result.current.add(50);
    });
    expect(result.current.sum).toBe(80);
  });
});
