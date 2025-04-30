import { PostContainer } from './styles';
import { MarkdownRenderer } from "../../lib/MarkdownRenderer";
import { PostInfo } from './components/PostInfo';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { Base64 } from 'js-base64';

export function Post() {    
    const [repoReadme, setRepoReadme] = useState<string | undefined>();
    const { repositoryName } = useParams<string>();
    
    const markdownContent = `${repoReadme}`
    useEffect(() => {
        async function fetchRepoReadmeData() {
            const response = await api.get(`/repos/devnestali/${repositoryName}/readme`);

            const { content } = response.data;
            const readmeDecoded = Base64.decode(content);

            setRepoReadme(readmeDecoded);
        }

        fetchRepoReadmeData();
    }, [repositoryName])
    return (
        <PostContainer>
            <PostInfo />

            <MarkdownRenderer content={markdownContent} />
        </PostContainer>
    )
}