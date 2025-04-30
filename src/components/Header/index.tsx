import { FooterContent, HeaderContainer, HeaderContent, HeaderTitle, UserInformation } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { GitHubLink } from '../GitHubLink';

import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

interface UserProps {
    name: string;
    avatar_url: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
}

export function Header() {
    const [user, setUser] = useState<UserProps>()
    
    useEffect(() => {
        async function fetchGithubProfileData() {
            const response = await api.get('users/devnestali');
            const { name, avatar_url, bio, login, followers, company } = response.data;

            const userData = {
                name,
                avatar_url,
                bio,
                login,
                followers,
                company
            }

            setUser(userData);
        }

        fetchGithubProfileData();
    }, [])
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