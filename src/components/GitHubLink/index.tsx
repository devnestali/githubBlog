import { LinkContainer } from "./styles";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GitHubLinkProps {
    title: string;
    url: string;
}

export function GitHubLink({ title, url }: GitHubLinkProps) {
    return (
        <LinkContainer href={url} target="_blank">
            {title}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </LinkContainer>       
    )
}