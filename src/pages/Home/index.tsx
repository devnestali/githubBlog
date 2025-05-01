import { useContext } from "react"
import { Header } from "../../components/Header"
import { Search } from "./components/Search"
import { HomeContainer, RepositoriesContainer, RepositoryContent, RepositoryTitle, Description } from "./styles"
import { RepositoryContext } from "../../context/RepoContext"
import { useNavigate } from "react-router-dom"
import { WithoutRepo } from "./components/WithoutRepo"

export function Home() {
    const { repositories } = useContext(RepositoryContext)
    const navigate = useNavigate();
    
    function handleRepoNavigation(repositoryName?: string) {
        navigate(`/repository/${repositoryName}`)
    }
    
    return (
        <HomeContainer>
            <Header />

            <Search />

            <RepositoriesContainer>
                {
                    repositories && repositories?.length > 0 
                    ? repositories?.map((repository) => {
                        return (
                            <RepositoryContent 
                                key={repository.id}
                                onClick={() => handleRepoNavigation(repository.name)}
                            >
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
                    : <WithoutRepo />
                }
            </RepositoriesContainer>
        </HomeContainer>
    )
}