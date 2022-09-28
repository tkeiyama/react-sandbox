import { MouseEventHandler, ReactElement, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, onClick }: ButtonProps): ReactElement {
  return <button onClick={onClick}>{children}</button>;
}
