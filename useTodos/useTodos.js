import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add TODO',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove TODO',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle TODO',
            payload: id
        })
            
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCounter: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}