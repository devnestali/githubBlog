import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.main`
    min-width: 86.4rem;
    
    display: flex;
    flex-direction: column;
    gap: 7.2rem;

    padding: 0 32.5rem;
    margin-top: -10rem;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${props => props.theme.dark_gray_800};

    padding: 3.2rem;
    border-radius: 10px;
    box-shadow: 0px 2px 26px rgba(0, 0, 0, 0.2);

    h1 {
        font-size: 2.4rem;
        line-height: 130%;

        margin-bottom: 0.8rem;
    }

    footer {
        display: flex;
        align-items: center;
        gap: 3.2rem;
    }
`;

export const PostInfoTitle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;
`;

export const PostInfoBackLink = styled(NavLink)`
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

export const PostInfoFooterContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
        width: 1.8rem;
        height: 1.8rem;
        color: ${props => props.theme.dark_gray_300};
    }

    p {
        color: ${props => props.theme.dark_gray_100};
    }
`;