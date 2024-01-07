import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

import "./style/DesktopSidebar.css";

const DesktopSidebar = () => {
  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActivePaper, setIsActivePaper] = useState(false);
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const [isActivePerson, setIsActivePerson] = useState(false);
  const [isActiveBell, setIsActiveBell] = useState(false);
  const [isActiveExport, setIsActiveExport] = useState(false);

  const handleIsActiveHome = () => {
    setIsActiveHome(true);
    setIsActivePaper(false);
    setIsActiveProfile(false);
    setIsActivePerson(false);
    setIsActiveBell(false);
    setIsActiveExport(false);
  };
  const handleIsActivePaper = () => {
    setIsActiveHome(false);
    setIsActivePaper(true);
    setIsActiveProfile(false);
    setIsActivePerson(false);
    setIsActiveBell(false);
    setIsActiveExport(false);
  };
  const handleIsActiveProfile = () => {
    setIsActiveHome(false);
    setIsActivePaper(false);
    setIsActiveProfile(true);
    setIsActivePerson(false);
    setIsActiveBell(false);
    setIsActiveExport(false);
  };
  const handleIsActivePerson = () => {
    setIsActiveHome(false);
    setIsActivePaper(false);
    setIsActiveProfile(false);
    setIsActivePerson(true);
    setIsActiveBell(false);
    setIsActiveExport(false);
  };
  const handleIsActiveBell = () => {
    setIsActiveHome(false);
    setIsActivePaper(false);
    setIsActiveProfile(false);
    setIsActivePerson(false);
    setIsActiveBell(true);
    setIsActiveExport(false);
  };
  const handleIsActiveExport = () => {
    setIsActiveHome(false);
    setIsActivePaper(false);
    setIsActiveProfile(false);
    setIsActivePerson(false);
    setIsActiveBell(false);
    setIsActiveExport(true);
  };

  const home =
    isActiveHome &&
    isActivePaper === false &&
    isActiveProfile === false &&
    isActivePerson === false &&
    isActiveBell === false &&
    isActiveExport === false;
  const paper =
    isActiveHome === false &&
    isActivePaper &&
    isActiveProfile === false &&
    isActivePerson === false &&
    isActiveBell === false &&
    isActiveExport === false;
  const profile =
    isActiveHome === false &&
    isActivePaper === false &&
    isActiveProfile &&
    isActivePerson === false &&
    isActiveBell === false &&
    isActiveExport === false;
  const person =
    isActiveHome === false &&
    isActivePaper === false &&
    isActiveProfile === false &&
    isActivePerson &&
    isActiveBell === false &&
    isActiveExport === false;
  const bell =
    isActiveHome === false &&
    isActivePaper === false &&
    isActiveProfile === false &&
    isActivePerson === false &&
    isActiveBell &&
    isActiveExport === false;
  const isExport =
    isActiveHome === false &&
    isActivePaper === false &&
    isActiveProfile === false &&
    isActivePerson === false &&
    isActiveBell === false &&
    isActiveExport;
  return (
    <div className="main_container">
      <div className="sidebar_container">
        <div className="logo_container">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="search">
            <FaIcons.FaSearch />
          </div>
        </div>
        <div className="main_menu_container">
          <div
            onClick={handleIsActiveHome}
            className={home ? "menu_active" : "main_menu"}
          >
            <CgIcons.CgHome />
          </div>
          <div
            onClick={handleIsActivePaper}
            className={paper ? "menu_active" : "main_menu"}
          >
            <FaIcons.FaRegNewspaper />
          </div>
          <div
            onClick={handleIsActiveProfile}
            className={profile ? "menu_active" : "main_menu"}
          >
            <AiIcons.AiOutlineProfile />
          </div>
          <div
            onClick={handleIsActivePerson}
            className={person ? "menu_active" : "main_menu"}
          >
            <BsIcons.BsPerson />
          </div>
        </div>
        <div className="footer_menu_container last-icons">
          <div
            onClick={handleIsActiveBell}
            className={bell ? "menu_active" : "main_menu"}
          >
            <BiIcons.BiBell />
          </div>
          <div
            onClick={handleIsActiveExport}
            className={isExport ? "menu_active" : "main_menu"}
          >
            <IoLogOutOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
