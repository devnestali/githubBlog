import { Outlet } from "react-router-dom";
import { AppContent, DefaultLayoutContainer } from "./styles";
import backgroundCover from "../../assets/Cover.png";

export function DefaultLayout() {
    return (
        <DefaultLayoutContainer>
            <img src={backgroundCover} />

            <AppContent>
                <Outlet />
            </AppContent>
        </DefaultLayoutContainer>
    )
}