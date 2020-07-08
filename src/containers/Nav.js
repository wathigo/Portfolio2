import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav>
            <div className='profile'>
                <figure>
                    <img src='#' />
                </figure>
                <span>Simon Wathigo</span>
            </div>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faUserAlt} />
                    <span>About Me</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} />
                    <span>Resume</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTasks} />
                    <span>Projects</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Contact Me</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;