import styled from 'styled-components'
import {ReactComponent as LogoSun} from '../../static/images/icon-sun.svg'
import {ReactComponent as LogoMoon} from '../../static/images/icon-moon.svg'

export const Wrapper = styled.div`
    margin-top: 5rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`

export const Title = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 15px;
    font-size: 3rem;

    @media Screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Sun = styled(LogoSun)`
    cursor: pointer;
`

export const Moon = styled(LogoMoon)`
    cursor: pointer;
`