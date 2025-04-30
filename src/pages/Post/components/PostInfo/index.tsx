import { PostInfoContainer, PostInfoBackLink, PostInfoFooterContent, PostInfoTitle } from "./styles";
import { GitHubLink } from "../../../../components/GitHubLink";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCalendarDay, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../../../../utils/dateformatter";

interface currentRepositoryProps {
    name: string;
    login: string;
    updated_at: string;
    stargazers_count: number;
}

export function PostInfo() {
    const [currentRepository, setCurrentRepository] = useState<currentRepositoryProps>();
    const { repositoryName } = useParams();

    const githubUrl = `https://github.com/devnestali/${repositoryName}`


    useEffect(() => {
        async function fetchCurrentlyRepoData() {
            const response = await api.get(`repos/devnestali/${repositoryName}`);

            const { name, owner: { login }, updated_at, stargazers_count } = response.data;

            const repoData = {
                name,
                login,
                updated_at,
                stargazers_count
            }

           setCurrentRepository(repoData);
        }

        fetchCurrentlyRepoData();
    }, [repositoryName])
    
    return (
        <PostInfoContainer>
            <PostInfoTitle>
                <PostInfoBackLink to="/">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    VOLTAR
                </PostInfoBackLink>

                <GitHubLink title="VER NO GITHUB" url={githubUrl}/>
            </PostInfoTitle>
            <h1>{currentRepository?.name}</h1>
            <footer>
                <PostInfoFooterContent>
                    <FontAwesomeIcon icon={faGithub}/>
                    <p>{currentRepository?.login}</p>
                </PostInfoFooterContent>
                <PostInfoFooterContent className="PostInfoFooter">
                    <FontAwesomeIcon icon={faCalendarDay}/>
                    <p>
                        {
                            currentRepository?.updated_at && 
                            dateFormatter.format(new Date(currentRepository?.updated_at))
                        }
                    </p>
                </PostInfoFooterContent>
                <PostInfoFooterContent className="PostInfoFooter">
                    <FontAwesomeIcon icon={faStar}/>
                    <p>{currentRepository?.stargazers_count} estrellas</p>
                </PostInfoFooterContent>
            </footer>
        </PostInfoContainer>
    )
}