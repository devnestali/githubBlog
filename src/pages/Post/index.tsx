import { PostContainer, PostInfo, PostInfoBackLink, PostInfoFooterContent, PostInfoTitle } from "./styles";
import { GitHubLink } from "../../components/GitHubLink";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Post() {
    return (
        <PostContainer>
            <PostInfo>
                <PostInfoTitle>
                    <PostInfoBackLink to="/">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        VOLTAR
                    </PostInfoBackLink>

                    <GitHubLink title="VER NO GITHUB"/>
                </PostInfoTitle>
                <h1>JavaScript data types and data structures</h1>
                <footer>
                    <PostInfoFooterContent>
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>devnestali</p>
                    </PostInfoFooterContent>
                    <PostInfoFooterContent className="PostInfoFooter">
                        <FontAwesomeIcon icon={faCalendarDay}/>
                        <p>1 dia</p>
                    </PostInfoFooterContent>
                    <PostInfoFooterContent className="PostInfoFooter">
                        <FontAwesomeIcon icon={faComment}/>
                        <p>5 comentarios</p>
                    </PostInfoFooterContent>
                </footer>
            </PostInfo>
        </PostContainer>
    )
}