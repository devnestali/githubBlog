import styled from "styled-components";

export const LinkContainer = styled.a`
    position: relative;
        
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.2rem;
    font-weight: bold;

    text-decoration: none;
    color: ${props => props.theme.blue};

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.1rem;
        background: ${props => props.theme.blue};
    }

    &:hover::after {
        width: 100%;
    }
`;