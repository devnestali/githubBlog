import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Post } from "../pages/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/repository/:repositoryName" element={<Post />} />
            </Route>
        </Routes>
    )
}