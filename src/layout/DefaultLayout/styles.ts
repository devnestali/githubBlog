import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    > img {
        width: 100%;
        height: 29.6rem;
    }

    .HeaderContainer {
        min-width: 86.4rem;

        display: flex;
        justify-content: center;
        
        margin-top: -10rem;

        .HeaderContent {
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

            .UserInformation {
                display: flex;
                flex-direction: column;

                .Title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin-bottom: 0.8rem;
                }
            }
        }
    }
`;