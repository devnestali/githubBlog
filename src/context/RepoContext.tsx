import { createContext, useCallback, useEffect, useState } from "react";
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

interface CurrentRepoProps {
    name: string;
    login: string;
    updated_at: string;
    stargazers_count: number;
}

interface RepositoryContextType {
    repositories: RepositoryProps[];
    currentRepository: CurrentRepoProps;
    fetchRepoReadmeData: (repositoryName?: string) => Promise<string>;
    fetchCurrentlyRepoData: (repositoryName?: string) => void;
}

interface RepositoriesProviderProps {
    children: React.ReactNode
}

export const RepositoryContext = createContext({} as RepositoryContextType);

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
    const [currentRepository, setCurrentRepository] = useState<CurrentRepoProps>({
        name: '',
        login: '',
        updated_at: '',
        stargazers_count: 0
    })

    const fetchCurrentlyRepoData = useCallback(
        async (repositoryName?: string) => {
            const response = await api.get(`repos/devnestali/${repositoryName}`);

            const { name, owner: { login }, updated_at, stargazers_count } = response.data;

            const currentRepoData: CurrentRepoProps = {
                name,
                login,
                updated_at,
                stargazers_count
            }

            setCurrentRepository(currentRepoData);
    }, []);
        
    const fetchRepoReadmeData = useCallback(
        async (repositoryName?: string) => {
            const response = await api.get(`/repos/devnestali/${repositoryName}/readme`);

            const { content } = response.data;
            const readmeDecoded = Base64.decode(content);

            return readmeDecoded
        }, []);
    
    useEffect(() => {
        async function fetchRepoProfileData() {
            const response = await api.get('users/devnestali/repos?per_page=50');
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            currentRepository,
            fetchRepoReadmeData,
            fetchCurrentlyRepoData
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}