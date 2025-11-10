import type { MouseEventHandler } from "react";  

export interface TodoItemProps {
  item: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}