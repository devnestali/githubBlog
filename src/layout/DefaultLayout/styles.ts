import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    height: 100vh;
    
    > img {
        width: 100%;
        height: 40%;
        object-fit: cover;
    }
`;

export const AppContent = styled.div`
    max-width: 90rem;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0 1.2rem;
    }
`;