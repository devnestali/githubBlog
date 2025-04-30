import { useContext } from "react";
import { SearchContainer, SearchForm, SearchHeader } from "./styles";
import { RepositoryContext } from "../../../../context/RepoContext";

export function Search() {
    const { repositories } = useContext(RepositoryContext);
    
    return (
        <SearchContainer>
            <SearchHeader>
                <h4>Publicaciones</h4>
                <span>{repositories.length} publicaciones</span>
            </SearchHeader>

            <SearchForm>
                <input type="text" placeholder="Buscar contenido" />
            </SearchForm>
        </SearchContainer>
    )
}