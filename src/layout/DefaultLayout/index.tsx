import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import backgroundCover from "../../assets/Cover.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function DefaultLayout() {
    return (
        <DefaultLayoutContainer>
            <img src={backgroundCover} />
            
            <header className="HeaderContainer">
                <div className="HeaderContent">
                    <img src="https://randomuser.me/api/portraits/men/47.jpg" />
                    <div className="UserInformation">
                        <div className="Title">
                            <h1>John Doe</h1>
                            <a href="https://github.com">
                                GITHUB
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                            </a>                                
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis nemo accusantium </p>
                        <footer>
                            <div className="footerContent">
                                <FontAwesomeIcon icon={faGithub} />
                                Github
                            </div>
                            <div className="footerContent">
                                <FontAwesomeIcon icon={faBuilding}/>
                                Rocketseat
                            </div>
                            <div className="footerContent">
                                <FontAwesomeIcon icon={faUserGroup}/>
                                32 seguidores
                            </div>
                        </footer>
                    </div>
                </div>
            </header>

            <Outlet />
        </DefaultLayoutContainer>
    )
}