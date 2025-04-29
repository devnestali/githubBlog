import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Search } from "./components/Search"
import { HomeContainer, RepositoriesContainer, RepositoryContent, RepositoryTitle, Description } from "./styles"

import { api } from "../../lib/axios"

interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    updated_at: string;
}

export function Home() {
    const [repositories, setRepositories] = useState<RepositoryProps[]>();
    
    useEffect(() => {
        async function fetchRepoProfileData() {
            const response = await api.get('/users/devnestali/repos?per_page=100');
            
            const filteredRepos: RepositoryProps[] = response.data.map((repo: any) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                updated_at: repo.updated_at

            }))


            setRepositories(filteredRepos);
            
        }

        fetchRepoProfileData();
    }, [repositories])
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
                                    <time dateTime="2025-04-24">{repository.updated_at}</time>
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