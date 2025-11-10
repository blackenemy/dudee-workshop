// สร้าง componet 
// 1. มอง ui แสดงข้อมูลอะไรบ้าง
// 2. ui นี้ user เข้ามากระทำใดได้บ้าง // สิ่งที่ user กระทำได้ของ component
import type { TodoInputProps } from "./types";
export default function TodoInput({ value, onChange, onClick }: TodoInputProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
      id='todo' 
      name='todo'
      type="text" 
      placeholder="Add a new todo"  
      onChange={onChange}
      value={value} 
      />
      <button onClick={onClick}>+</button>
    </form>
  );
}