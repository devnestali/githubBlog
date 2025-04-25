import { LinkContainer } from "./styles";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function GitHubLink({ title }: { title: string}) {
    return (
        <LinkContainer href="https://github.com" target="_blank">
            {title}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        </LinkContainer>       
    )
}