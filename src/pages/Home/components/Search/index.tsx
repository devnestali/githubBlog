import { useContext, useEffect } from "react";
import { SearchContainer, SearchForm, SearchHeader } from "./styles";
import { RepositoryContext } from "../../../../context/RepoContext";
import { useForm } from "react-hook-form";
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
});

type SearchFormInput = z.infer<typeof searchFormSchema>


export function Search() {
    const { repositories, searchRepositories } = useContext(RepositoryContext);
    
    const { 
        watch, 
        register,
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    });
    
    const watchRepository = watch("query");

    useEffect(() => {
        searchRepositories(watchRepository);
    }, [searchRepositories, watchRepository])

    return (
        <SearchContainer>
            <SearchHeader>
                <h4>Publicaciones</h4>
                <span>{repositories.length} publicaciones</span>
            </SearchHeader>

            <SearchForm>
                <input 
                    type="text" 
                    placeholder="Buscar contenido"
                    {...register("query")}
                />
            </SearchForm>
        </SearchContainer>
    )
}