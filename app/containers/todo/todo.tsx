'use client';

import { memo, useEffect } from 'react';

import TodoInput from '@/app/components/todo-input';
import TodoList from '@/app/components/todo-list';
import TodoItem from '@/app/components/todo-item';
import TodoSelect from '@/app/components/todo-select';

import useTodo from '@/app/hooks/use-todo';

function Todo() {
    const { handleChange, handleClickAdd, inputValue, state, handleClickDelete, setValue,value } = useTodo();

    useEffect(() => {
        setValue([
            { value: 'option1', name: 'Option 1' },
            { value: 'option2', name: 'Option 2' },
        ]);
    }, [setValue]);

    return (
        <div>
            <TodoInput onChange={handleChange} onClick={handleClickAdd} value={inputValue}   />
            <TodoList>
                {state.map((todo) => (
                    <TodoItem key={todo.id} item={todo.text} onClick={() => handleClickDelete(todo.id)}   />
                ))}
            </TodoList>
            <TodoSelect name='ทดสอบ' option={value} onChange={() => console.log('Select clicked')} />
        </div>
    );
}

export default memo(Todo);