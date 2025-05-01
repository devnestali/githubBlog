import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

import { Base64 } from'js-base64';

interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    updated_at: number;
}

interface RepositoryContextType {
    repositories: RepositoryProps[];
    fetchRepoReadmeData: (repositoryName: string | undefined) => Promise<string>;
}

interface RepositoriesProviderProps {
    children: React.ReactNode
}

export const RepositoryContext = createContext({} as RepositoryContextType);

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
        
    async function fetchRepoReadmeData(repositoryName: string | undefined) {
        const response = await api.get(`/repos/devnestali/${repositoryName}/readme`);

        const { content } = response.data;
        const readmeDecoded = Base64.decode(content);

        return readmeDecoded;
    }
    
    useEffect(() => {
        async function fetchRepoProfileData() {
            const response = await api.get('users/devnestali/repos?per_page=100');

            
            const filteredRepos: RepositoryProps[] = response.data.map((repo: any) => {
                const updatedAtToDate = parseISO(repo.updated_at);
                const formattedUpdatedAt = formatDistanceToNow(updatedAtToDate, { locale: es })

                return {
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    updated_at: formattedUpdatedAt
                }
            });

            setRepositories(filteredRepos);
        }

        fetchRepoProfileData();
    }, [])


    return (
        <RepositoryContext.Provider value={{
            repositories,
            fetchRepoReadmeData
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}