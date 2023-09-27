import React from "react";

interface MyDialogProps {
  children: React.ReactNode;
}

export function MyDialog({ children }: MyDialogProps) {
  return <div role="textbox">{children}</div>;
}
