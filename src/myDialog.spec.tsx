import React from "react";
import { render, screen } from "@testing-library/react";
import { MyDialog } from "./myDialog";

describe("MyDialog", () => {
  test("should wrap child text", () => {
    render(<MyDialog>Hello</MyDialog>);
    expect(screen.getByRole("textbox")).toHaveTextContent("Hello");
  });
});
