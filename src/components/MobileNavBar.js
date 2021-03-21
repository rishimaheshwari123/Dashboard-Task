import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import "../stylings/MobileNavBar.modules.css"

const MobileNavBar = () => {
    const [isActiveHome, setIsActiveHome] = useState(true);
    const [isActivePaper, setIsActivePaper] = useState(false);
    const [isActiveProfile, setIsActiveProfile] = useState(false);
    const [isActivePerson, setIsActivePerson] = useState(false);
    const [isActiveSearch, setIsActiveSearch] = useState(false);

    const handleIsActiveHome = () => {
        setIsActiveHome(true);
        setIsActivePaper(false);
        setIsActiveProfile(false);
        setIsActivePerson(false);
        setIsActiveSearch(false);
    }
    const handleIsActivePaper = () => {
        setIsActiveHome(false);
        setIsActivePaper(true);
        setIsActiveProfile(false);
        setIsActivePerson(false);
        setIsActiveSearch(false);
    }
    const handleIsActiveProfile = () => {
        setIsActiveHome(false);
        setIsActivePaper(false);
        setIsActiveProfile(true);
        setIsActivePerson(false);
        setIsActiveSearch(false);
    }
    const handleIsActivePerson = () => {
        setIsActiveHome(false);
        setIsActivePaper(false);
        setIsActiveProfile(false);
        setIsActivePerson(true);
        setIsActiveSearch(false);
    }
    const handleIsActiveSearch = () => {
        setIsActiveHome(false);
        setIsActivePaper(false);
        setIsActiveProfile(false);
        setIsActivePerson(false);
        setIsActiveSearch(true);
    }
    const home = isActiveHome && isActivePaper === false && isActiveProfile === false && isActivePerson === false && isActiveSearch === false;
    const paper = isActiveHome === false && isActivePaper && isActiveProfile === false && isActivePerson === false && isActiveSearch === false;
    const profile = isActiveHome === false && isActivePaper === false && isActiveProfile && isActivePerson === false && isActiveSearch === false;
    const person = isActiveHome === false && isActivePaper === false && isActiveProfile === false && isActivePerson && isActiveSearch === false;
    const search = isActiveHome === false && isActivePaper === false && isActiveProfile === false && isActivePerson === false && isActiveSearch;
    return (
        <Nav className="nav_container">
            <Nav.Item className="nav_item" >
                <Nav.Link href="/">
                    <span onClick={handleIsActiveHome} className={home ? "menu_active" : "main_menu"}>
                        <CgIcons.CgHome />
                    </span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item" >
                <Nav.Link href="/retirementIncome">
                    <span onClick={handleIsActivePaper} className={paper ? "menu_active" : "main_menu"}>
                        <FaIcons.FaRegNewspaper />
                    </span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item" >
                <Nav.Link href="/retirementStrategy">
                    <span onClick={handleIsActiveProfile} className={profile ? "menu_active" : "main_menu"}>
                        <AiIcons.AiOutlineProfile />
                    </span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item" >
                <Nav.Link href="/">
                    <span onClick={handleIsActivePerson} className={person ? "menu_active" : "main_menu"}>
                        <BsIcons.BsPerson />
                    </span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item" >
                <Nav.Link href="/">
                    <span onClick={handleIsActiveSearch} className={search ? "menu_active" : "main_menu"}>
                        <FaIcons.FaSearch />
                    </span>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default MobileNavBar;