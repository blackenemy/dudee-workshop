import type {TodoItemProps} from "./types";
export default function TodoItem({ item, onClick }: TodoItemProps) {
  return (
   <div>
     <div>
      <label  style={{ textDecoration: item ? 'line-through' : 'none' }}>
        {item}
      </label>
    </div>
    <button type="button" onClick={onClick}>Delete</button>
   </div>
  );
}