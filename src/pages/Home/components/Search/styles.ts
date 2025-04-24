import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const SearchHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: 1.8rem;
        color: ${props => props.theme.gray_300};
    }

    span {
        font-size: 1.4rem;
        color: ${props => props.theme.dark_gray_100}
    }
`;

export const SearchForm = styled.form`
    width: 100%;
    display: flex;
    
    input {
        flex: 1;

        padding: 1.2rem 1.6rem;
        border: 1px solid ${props => props.theme.dark_gray_600};
        border-radius: 6px;

        background: ${props => props.theme.black_100};
        color: ${props => props.theme.gray_400};
    }

    input::placeholder {
        color: ${props => props.theme.dark_gray_300};
    }

`;