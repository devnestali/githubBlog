import { FooterContent, HeaderContainer, HeaderContent, HeaderTitle, UserInformation } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { GitHubLink } from '../GitHubLink';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="https://randomuser.me/api/portraits/men/47.jpg" />
                <UserInformation>
                    <HeaderTitle>
                        <h1>John Doe</h1>
                        <GitHubLink title='GITHUB'/>                               
                    </HeaderTitle>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti in eius quibusdam. Quia, ut non asperiores obcaecati inventore autem quas eos omnis, quam maxime deserunt impedit maiores eaque.
                    </p>
                    <footer>
                        <FooterContent>
                            <FontAwesomeIcon icon={faGithub} />
                            <p>devnestali</p>
                        </FooterContent>
                        <FooterContent>
                            <FontAwesomeIcon icon={faBuilding}/>
                            <p>Rocketseat</p>
                        </FooterContent>
                        <FooterContent>
                            <FontAwesomeIcon icon={faUserGroup}/>
                            <p>32 seguidores</p>
                        </FooterContent>
                    </footer>
                </UserInformation>
            </HeaderContent>
        </HeaderContainer>
    )
}