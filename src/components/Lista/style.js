import styled from "styled-components";
import { ReactComponent as CloseLogo} from '../../static/images/icon-cross.svg';
import checkedLogo from '../../static/images/icon-check.svg'

export const ListOrdered = styled.ul`
    box-shadow: 0px 9px 14px 2px #0000001c;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonAndText = styled.div`
    display: flex;
    align-items: center;
`

export const ListItem = styled.li`
    display: flex;
    padding-top: 3px;
    flex: 1;
    word-break: break-all;
    ${props => props.completed && `
        text-decoration: line-through;
        opacity: .4;
    `}

    @media Screen and (max-width: 768px) {
        font-size: .9rem;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem;
    font-size: .8rem;

    span {
        color: #a2a0a9;
    }

    @media Screen and (max-width: 768px) {
        padding: 1rem;
        font-size: .8rem;
    }
`

export const Close = styled(CloseLogo)`
    visibility: hidden;

    @media (max-width: 768px) {
        visibility: visible;
    }
`

export const WrapperItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 1.5rem;
    border: 1px solid #d2d3db;
    border-width: 0 0 1px 0;
    cursor: grab;
    
    ${props => props.isDragging && `
        cursor: grabbing;
        opacity: 0.3; 
    ` }
    
    &:hover {
        ${Close} {
            visibility: visible;
        }
    }

    @media Screen and (max-width: 768px) {
        padding: .8rem .9rem;
    }
`

export const Button = styled.button`
    color: ${props => props.selected ? '#4c7acf' : '#a2a0a9'};
`

export const ButtonCheck = styled.input`
    appearance: none;
    cursor: pointer;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 1rem;
    color: #fff;
    border: 1px solid #dbdbdb;

    :hover {
        border: double 1px transparent;
        ${props => props.checked !== true && `
            background-image: linear-gradient(${props.theme.colors.primary}, ${props.theme.colors.primary}), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        `}
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
    
    ${props => props.checked && `
        background-image: url(${checkedLogo}), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        background-repeat: no-repeat;
        background-position: center;
        border: none;
    `}
`

export const Center = styled.div`
    button {
        padding: 0 .7rem;
        font-weight: bold;

        :hover {
            color: ${props => props.theme.title === 'dark' ? '#fff' : '#000'};
        }
    }

    @media (max-width: 768px) {
        display: none;
    }`

export const FooterMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem;
    margin-top: 1.3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0px 9px 14px 2px #0000001c;
    button {
        font-size: .9rem;
    }

    @media (min-width: 768px) {
        display: none;
    }
`