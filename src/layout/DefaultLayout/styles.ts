import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    
    > img {
        width: 100%;
        height: calc(100vh - 50rem);
        object-fit: cover;
    }
`;

export const AppContent = styled.div`
    max-width: 90rem;
    margin: 0 auto;
`;