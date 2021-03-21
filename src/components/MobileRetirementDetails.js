import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import MobileChart from './MobileChart';
import "../stylings/MobileRerirementDetails.modules.css"
import MobileNavBar from './MobileNavBar';

const MobileRetirementDetails = () => {
    return (
        <Card className="mobile_retirement_detail_container">
            <p>Retirement Income</p>
            <h4>Starting Year 2056</h4>
            <Row style={{padding:"5px"}}>
                <Col>
                    <div className="details_header_data">
                        <h4>$300,000</h4>
                        <span>My Goal</span>
                    </div>
                </Col>
            </Row>
            <Row style={{padding:"5px"}}>
                <Col>
                    <div className="details_header_data">
                        <h4>59%</h4>
                        <span>Goal Achieved</span>
                    </div>
                </Col>
                <Col>
                    <div className="details_header_data">
                        <h4>$300</h4>
                        <span>Est. Monthly Income</span>
                    </div>
                </Col>
            </Row>
            <MobileChart />
            <MobileNavBar />
        </Card>
    );
};

export default MobileRetirementDetails;