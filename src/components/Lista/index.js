import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import * as S from './style'

const Item = ({todo, removeTodo, checkTodo}) => {
    const [isDragging, setIsDragging] = useState(false)

    const log = message => {
        console.log(message)
    }

    const onDragStart = e => {
        console.log('> CArd: start dragging')
        setIsDragging(true)
    }

    const onDragEnd = e => {
        log('card: stop dragging')
        setIsDragging(false)
    }

    // DropZone Card
    const onDragEnter = e => {
        log('dropzone: Enter in zone!')
    }

    const onDragOver = e => {
        log('dropzone: Over')
    }

    const onDragLeave = e => {
        log('dropzone: leave')
    }

    const onDragDrop = e => {
        log('dropzone: dropped')
    }
    return(
        <S.WrapperItem 
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDragDrop}
            isDragging={isDragging}
            draggable={true}>
            <S.ButtonAndText>
                <S.ButtonCheck checked={todo.done} type='checkbox' onChange={() => checkTodo(todo)}/>
                <S.ListItem completed={todo.done}>{todo.text}</S.ListItem>   
            </S.ButtonAndText>
            <S.Button onClick={() => removeTodo(todo)} type="button">
                <S.Close />
            </S.Button>
        </S.WrapperItem>
    )
}

const Lista = () => {
    const [ option, setOption ] = useState(0)
    const { todos, actived, removeTodo, completed, checkTodo, clearCompleted } = useContext(TodoContext)

    const Data = ({list}) => list.map(item => (
        <Item key={item.id} todo={item} checkTodo={checkTodo} removeTodo={removeTodo} />
    ))   
    
  return (
    <>
        <S.ListOrdered>
            {option === 0 && <Data list={todos}/>}
            {option === 1 && <Data list={actived}/>}
            {option === 2 && <Data list={completed}/>}
            <S.Footer>
                <span>{actived.length} items ativos</span>
                <S.Center>
                    <S.Button selected={option === 0} type='button' onClick={() => setOption(0)}>Todos</S.Button>
                    <S.Button selected={option === 1} type='button' onClick={() => setOption(1)}>Ativo</S.Button>
                    <S.Button selected={option === 2} type='button' onClick={() => setOption(2)}>Completo</S.Button>
                </S.Center>
                <span style={{ cursor: 'pointer'}} onClick={() => clearCompleted()}>
                    Apagar completos
                </span>
            </S.Footer>
        </S.ListOrdered>
        <S.FooterMobile>
            <S.Button selected={option === 0} type='button' onClick={() => setOption(0)}>Todos</S.Button>
            <S.Button selected={option === 1} type='button' onClick={() => setOption(1)}>Ativo</S.Button>
            <S.Button selected={option === 2} type='button' onClick={() => setOption(2)}>Completo</S.Button>
        </S.FooterMobile>
    </>
);
};

export default Lista;
