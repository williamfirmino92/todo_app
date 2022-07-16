import React, { useState, createContext } from 'react'

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Estudar react', done: false},
        { id: 2, text: 'Estudar inglês', done: true},
        { id: 3, text: "Ir para a academia",done: false}
    ])

    const saveNewTodo = todo => {
        const newTodo = {
          id: todos.length + 1,
          text: todo,
          done: false
        }
        if (newTodo.text.length > 0) {
            setTodos([...todos, newTodo])
        }
    }

    const removeTodo = todo => {
        setTodos(todos.filter(item => item !== todo))
    }

    const checkTodo = todo => {
        const mapped = todos.map(item => 
            item.id === todo.id ? { ...item, done: !todo.done} : {...item}    
        )

        setTodos(mapped)
    }

    const actived = todos.filter(item => item.done !== true)

    const completed = todos.filter(item => item.done !== false)

    const clearCompleted = () => setTodos(actived)

    return (
        <TodoContext.Provider value={{ 
                                    todos, 
                                    saveNewTodo, 
                                    removeTodo, 
                                    actived, 
                                    completed,
                                    clearCompleted,
                                    checkTodo
                                    }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider