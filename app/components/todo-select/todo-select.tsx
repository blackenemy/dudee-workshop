import type { todoSelectProps } from "./types";
export default function TodoSelect({ option, name, onChange }: todoSelectProps) {
    return (
        <select name={name} onChange={onChange}>
            {option.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}
        </select>
    );
}