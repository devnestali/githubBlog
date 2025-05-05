import { FooterContent, HeaderContainer, HeaderContent, HeaderTitle, UserInformation } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { GitHubLink } from '../GitHubLink';
import { useContext } from 'react';
import { RepositoryContext } from '../../context/RepoContext';

export function Header() {
    const { user } = useContext(RepositoryContext);
    
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={user?.avatar_url} />
                <UserInformation>
                    <HeaderTitle>
                        <h1>{user?.name}</h1>
                        <GitHubLink title='GITHUB' url='https://github.com/devnestali'/>                               
                    </HeaderTitle>
                    <p>
                        {user?.bio}
                    </p>
                    <footer>
                        <FooterContent>
                            <FontAwesomeIcon icon={faGithub} />
                            <p>{user?.login}</p>
                        </FooterContent>
                        <FooterContent>
                            <FontAwesomeIcon icon={faBuilding}/>
                            <p>{user?.company}</p>
                        </FooterContent>
                        <FooterContent>
                            <FontAwesomeIcon icon={faUserGroup}/>
                            <p>{user?.followers} seguidores</p>
                        </FooterContent>
                    </footer>
                </UserInformation>
            </HeaderContent>
        </HeaderContainer>
    )
}