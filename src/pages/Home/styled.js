import styled from "styled-components";

export const Form = styled.form``

export const Input = styled.input`
    background-image: radial-gradient(circle at center,transparent 8px, #dbdbdb 9px, transparent 10px) !important;
    background-repeat: no-repeat;
    background-size: 50px 100%; /* equal to the height */

    margin: 2rem 0;
    font-size: 1rem;
    border-radius: 4px;
    padding: 1rem 2.8rem;
    position: relative;

    @media (max-width: 768px) {
        margin: 1rem 0;
        padding: .8rem 2.8rem;
    }
`