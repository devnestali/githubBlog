import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    updated_at: number;
}

interface RepositoryContextType {
    repositories: RepositoryProps[];
}

interface RepositoriesProviderProps {
    children: React.ReactNode
}

export const RepositoryContext = createContext({} as RepositoryContextType);

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
        
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
            repositories
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}