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
    
    const markdownContent = `${repoReadme}`
    
    useEffect(() => {
        async function loadReadme() {
            try {
                const readmeContent = await fetchRepoReadmeData(repositoryName);
                setRepoReadme(readmeContent);
            } catch (error) {
                console.log('Error al cargar el README:', error);
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