import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import backgroundCover from "../../assets/Cover.png";

export function DefaultLayout() {
    return (
        <DefaultLayoutContainer>
            <img src={backgroundCover} />

            <Outlet />
        </DefaultLayoutContainer>
    )
}