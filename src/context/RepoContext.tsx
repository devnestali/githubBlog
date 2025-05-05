import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

import { Base64 } from'js-base64';

interface UserProps {
    name: string;
    avatar_url: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
}

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
    user: UserProps;
    repositories: RepositoryProps[];
    currentRepository: CurrentRepoProps;
    searchRepositories: (query?: string) => void;
    fetchRepoReadmeData: (repositoryName?: string) => Promise<string>;
    fetchCurrentlyRepoData: (repositoryName?: string) => void;
}

interface RepositoriesProviderProps {
    children: React.ReactNode
}

export const RepositoryContext = createContext({} as RepositoryContextType);

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
    const [currentRepository, setCurrentRepository] = useState<CurrentRepoProps>({} as CurrentRepoProps)
    
    const searchRepositories = useCallback(
        async (query?: string) => { 
            const { data } = await api.get('/search/repositories', {
                params: {
                    q: `${query} user:devnestali`,
                    per_page: 50
                }
            })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const filteredRepos: RepositoryProps[] = data.items.map((repo: any) => {
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
    }, [])
    
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
        async function fetchGithubProfileData() {
            const response = await api.get('users/devnestali');
            const { name, avatar_url, bio, login, followers, company } = response.data;

            const userData: UserProps = {
                name,
                avatar_url,
                bio,
                login,
                followers,
                company
            }

            setUser(userData);
        }

        async function fetchGithubRepositories() {
            const response = await api.get('/users/devnestali/repos', {
                params: {
                    per_page: 50
                }
            })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const repositoriesData: RepositoryProps[] = response.data.map((repo: any) => {
                const updatedAtToDate = parseISO(repo.updated_at);
                const formattedUpdatedAt = formatDistanceToNow(updatedAtToDate, { locale: es })
        
                return {
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    updated_at: formattedUpdatedAt
                }
            });

            setRepositories(repositoriesData);
        }

        fetchGithubProfileData();
        fetchGithubRepositories();
    }, [])

    
    useEffect(() => {        
        searchRepositories();
    }, [searchRepositories])

    return (
        <RepositoryContext.Provider value={{
            user,
            repositories,
            currentRepository,
            searchRepositories,
            fetchRepoReadmeData,
            fetchCurrentlyRepoData
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}