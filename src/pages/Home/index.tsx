import { useContext } from "react"
import { Header } from "../../components/Header"
import { Search } from "./components/Search"
import { HomeContainer, RepositoriesContainer, RepositoryContent, RepositoryTitle, Description } from "./styles"
import { RepositoryContext } from "../../context/RepoContext"


export function Home() {
    const { repositories } = useContext(RepositoryContext)


    return (
        <HomeContainer>
            <Header />

            <Search />

            <RepositoriesContainer>
                
                {
                    repositories && repositories?.length > 0 
                    ? repositories?.map((repository) => {
                        return (
                            <RepositoryContent key={repository.id}>
                                <RepositoryTitle>
                                    <h1>{repository.name}</h1>
                                    <time>{repository.updated_at}</time>
                                </RepositoryTitle>

                                <Description>
                                    {repository.description}
                                </Description>
                            </RepositoryContent>
                        )
                    })
                    : 'Nao ha repositorios'
                }
            </RepositoriesContainer>
        </HomeContainer>
    )
}