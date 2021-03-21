import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MobileRetirementDetails from '../components/MobileRetirementDetails';
import * as BiIcons from 'react-icons/bi';
import "../stylings/RetirementIncome.modules.css"

const RetirementIncome = () => {
    return (
        <div className="retirement_income_container">
            <div className="d-flex justify-content-end p-3">
                <div style={{fontSize:"24px"}}>
                    <BiIcons.BiBell />
                </div>
            </div>
            <Row className="mobile_retirement_main_container">
                <Col className="mobile_retirement_details_container" md={9}>
                    <MobileRetirementDetails />
                </Col>
            </Row>
        </div>
    );
};

export default RetirementIncome;