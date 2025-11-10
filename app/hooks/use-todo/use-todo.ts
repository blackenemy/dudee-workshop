import { useCallback, useState } from 'react'
import type { ChangeEvent } from 'react';
import type { Todo, TodoSelect } from '@/app/types/todo';

export default function useTodo() {
    const [state, setState] = useState<Todo[]>([]);
    const [value, setValue] = useState<TodoSelect[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }, []);

    const handleClickAdd  = useCallback(() => {
        setState((prevState) => {
            return [...prevState, { id: prevState.length + 1, text: inputValue }];
        });
        setInputValue('');
    }, [inputValue])

    const handleClickDelete = useCallback((id: number) => {
        setState((prevState) => {
            return prevState.filter((todo) => todo.id !== id);
        });
    }, []);

    return {
        state,
        setState,
        
        value,
        setValue,

        inputValue,
        setInputValue,
        handleChange,
        handleClickAdd,
        handleClickDelete,
    };
}
