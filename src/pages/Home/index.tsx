import { Header } from "../../components/Header"
import { HomeContainer } from "./styles"

export function Home() {
    return (
        <HomeContainer>
            <Header />

            <div className="SearchContainer">
                <header className="SearchHeader">
                    <h4>Publicaciones</h4>
                    <span>6 publicaciones</span>
                </header>

                <form>
                    <input type="text" placeholder="Buscar contenido" />
                </form>
            </div>
        </HomeContainer>
    )
}