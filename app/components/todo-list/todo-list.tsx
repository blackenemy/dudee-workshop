import type { TodoListProps} from "./types"

export default function TodoList({ children }: TodoListProps) {
  return <div>{children}</div>;
}