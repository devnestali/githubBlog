import styled from "styled-components";

export const HomeContainer = styled.main`
    min-width: 86.4rem;
    
    display: flex;
    flex-direction: column;
    gap: 7.2rem;

    padding: 0 32.5rem;
`;

export const RepositoriesContainer = styled.div`
    max-height: 80rem;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;

    overflow-y: auto;
    padding: 0.3rem;

    margin-bottom: 3rem;
    
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.dark_gray_700};
        border-radius: 12px;
    }
`;

export const RepositoryContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    padding: 3.2rem;
    border-radius: 10px;
    overflow: hidden;

    background: ${props => props.theme.dark_gray_700};
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 0 2px ${props => props.theme.dark_gray_300};
        transition: box-shadow 0.2s;
    }
`;

export const RepositoryTitle = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
        max-width: 25rem;
        font-size: 2rem;
    }

    time {
        max-width: 7rem;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        font-size: 1.4rem;
        color: ${props => props.theme.dark_gray_100};
    }
`;

export const Description = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    overflow: hidden;
    text-overflow: ellipsis;

    color: ${props => props.theme.gray_400};
`;