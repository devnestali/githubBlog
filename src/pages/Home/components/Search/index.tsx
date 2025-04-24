import { SearchContainer, SearchForm, SearchHeader } from "./styles";

export function Search() {
    return (
        <SearchContainer>
            <SearchHeader>
                <h4>Publicaciones</h4>
                <span>6 publicaciones</span>
            </SearchHeader>

            <SearchForm>
                <input type="text" placeholder="Buscar contenido" />
            </SearchForm>
        </SearchContainer>
    )
}