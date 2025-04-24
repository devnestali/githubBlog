import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    
    display: flex;
    justify-content: center;

    margin-top: -10rem;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    padding: 3.2rem 4rem;
    border-radius: 10px;

    background-color: ${props => props.theme.dark_gray_800};
    box-shadow: 0px 2px 26px rgba(0, 0, 0, 0.2);

    > img {
        width: 14.8rem;
        height: 14.8rem;
        border-radius: 8px;
    }
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: column;

    > p {
        width: 61.2rem;
        
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        overflow: hidden;
        text-overflow: ellipsis;

        color: ${props => props.theme.gray_400};
    }

    > footer {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        
        margin-top: 2.4rem;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.8rem;

    > h1 {
        font-size: 2.4rem;
        line-height: 130%;
    }

    > a {
        position: relative;
        
        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-size: 1.2rem;
        font-weight: bold;

        text-decoration: none;
        color: ${props => props.theme.blue};
    }

    > a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.1rem;
        background: ${props => props.theme.blue};
    }

    > a:hover::after {
        width: 100%;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    > svg {
        width: 1.8rem;
        height: 1.8rem;
        color: ${props => props.theme.dark_gray_300};
    }

    > p {
        color: ${props => props.theme.gray_400};
    }
`;