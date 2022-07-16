import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Lista from '../../components/Lista';
import { TodoContext } from '../../contexts/TodoContext';
import Layout from '../../Layout/Layout';
import * as S from './styled'

const Home = () => {
  const [todo, setTodo] = useState("")
  const { saveNewTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    
    saveNewTodo(todo)
    setTodo("")
  }

  const handleInputChange = e => setTodo(e.target.value)

  return (
    <Layout>
      <Header title="Todo"/>
      <S.Form onSubmit={handleSubmit}>
        <S.Input 
          name="todo"
          maxLength="255"
          value={todo}
          placeholder="Criar um novo todo..."
          onChange={handleInputChange}
        />  
        <Lista />
      </S.Form>
    </Layout>
  );
};

export default Home;
