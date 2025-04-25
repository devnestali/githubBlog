import { PostContainer, PostInfo, PostInfoBackLink, PostInfoFooterContent, PostInfoTitle } from "./styles";
import { GitHubLink } from "../../components/GitHubLink";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { MarkdownRenderer } from "../../lib/MarkdownRenderer";

export function Post() {
    const markdownContent = `
**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## Dynamic typing

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

~~~js
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
~~~
`
    
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

            <MarkdownRenderer content={markdownContent} />
        </PostContainer>
    )
}