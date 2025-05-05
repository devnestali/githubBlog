import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
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

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
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

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;

        > p {
            width: 100%;
        }

        > footer {
            gap: 2rem;
        }
    }
`;

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.8rem;

    > h1 {
        font-size: 2.4rem;
        line-height: 130%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
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