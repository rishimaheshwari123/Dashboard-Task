import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DesktopSidebar from '../components/DesktopSidebar';
import MobileProfile from '../components/MobileProfile';
import Profile from '../components/Profile';
import RetirementDetails from '../components/RetirementDetails';
import RetirementStrategy from '../components/RetirementStrategy';
import * as BiIcons from 'react-icons/bi';
import "../stylings/Home.modules.css"

const Home = () => {
    return (
        <>
            <Row className="home_main_container">
                <Col className="sidebar_home_main_container" sm={1}>
                    <DesktopSidebar />
                </Col>
                <Col className="home_profile" sm={3}>
                    <Profile />
                </Col>
                <Col className="retirement_home_detail_main_container" sm={5}>
                    <div className="retirement_home_detail_container">
                        <RetirementDetails />
                    </div>
                </Col>
                <Col className="retirement_home-main_container" sm={3}>
                    <div className="retirement_home_container">
                        <RetirementStrategy />
                    </div>
                </Col>
            </Row>
            <Row className="mobile_home_main_container">
                <div className="d-flex justify-content-end p-3">
                    <div style={{fontSize:"24px", marginRight: "20px"}}>
                        <BiIcons.BiBell />
                    </div>
                </div>
                <Col className="mobile_profile_home_container" md={9}>
                    <MobileProfile />
                </Col>
            </Row>
        </>
    );
};

export default Home;