import { useState } from 'react';
import { Link } from 'react-scroll';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <button onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            {isOpen && (
                <ul>
                    <li><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Experience</Link></li>
                    <li><Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>Formation</Link></li>
                    <li><Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>Competence web</Link></li>
                    <li><Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>Projet en cour</Link></li>
                    <li><Link activeClass="active" to="section5" spy={true} smooth={true} offset={-70} duration={500}>Projet finit</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Menu;