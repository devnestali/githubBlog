import { PostInfoContainer, PostInfoBackLink, PostInfoFooterContent, PostInfoTitle } from "./styles";
import { GitHubLink } from "../../../../components/GitHubLink";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCalendarDay, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../../../../utils/dateFormatter";
import { RepositoryContext } from "../../../../context/RepoContext";

export function PostInfo() {
    const { fetchCurrentlyRepoData, currentRepository } = useContext(RepositoryContext)
    const { repositoryName } = useParams();

    const githubUrl = `https://github.com/devnestali/${repositoryName}`

    useEffect(() => {
        fetchCurrentlyRepoData(repositoryName);
    }, [repositoryName, fetchCurrentlyRepoData])
    
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