import { PostContainer } from './styles';
import { MarkdownRenderer } from "../../lib/MarkdownRenderer";
import { PostInfo } from './components/PostInfo';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RepositoryContext } from '../../context/RepoContext';

export function Post() {    
    const [repoReadme, setRepoReadme] = useState<string>();
    const { fetchRepoReadmeData } = useContext(RepositoryContext);
    const { repositoryName } = useParams();
    
    const markdownDefault = `
# 📭 Este repositorio no tiene un README

Parece que este proyecto aún no cuenta con una descripción.
Si quieres saber más sobre el proyecto, puedes revisar el historial de commits.  
`;

    const markdownContent = `${repoReadme ?? markdownDefault}`
    
    useEffect(() => {
        async function loadReadme() {
            try {
                const readmeContent = await fetchRepoReadmeData(repositoryName);
                setRepoReadme(readmeContent);
            } catch (error) {
                console.error('Error al cargar el README:', error);
            }
        }

        loadReadme();
    }, [repositoryName, fetchRepoReadmeData])
    return (
        <PostContainer>
            <PostInfo />

            <MarkdownRenderer content={markdownContent} />
        </PostContainer>
    )
}