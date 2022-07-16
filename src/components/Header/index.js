import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as S from './style'

const Header = ({title}) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <S.Wrapper>
        <S.Topo>
            <S.Title>{title}</S.Title>
            <div onClick={toggleTheme}>
              {theme.title === 'light' ? <S.Moon /> : <S.Sun />}
            </div>
        </S.Topo>
    </S.Wrapper>
  )
};

export default Header;
