import { Header } from "../../components/Header"
import { Search } from "./components/Search"
import { HomeContainer } from "./styles"

export function Home() {
    return (
        <HomeContainer>
            <Header />

            <Search />
        </HomeContainer>
    )
}