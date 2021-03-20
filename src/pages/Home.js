import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DesktopSidebar from '../components/DesktopSidebar';
import Profile from '../components/Profile';
import RetirementDetails from '../components/RetirementDetails';
import RetirementStrategy from '../components/RetirementStrategy';
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
        </>
    );
};

export default Home;