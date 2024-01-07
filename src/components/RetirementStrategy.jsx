import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./style/RetirementStrategy.css";

const RetirementStrategy = () => {
  const [value, setValue] = useState(12);
  const [age, setAge] = useState(65);
  return (
    <>
      <Card className="retirement_card">
        <div className="retirement_container">
          <h3>Retirement Strategy</h3>
          <div className="em_contribution">
            <p>Employee Contribution</p>
            <div className="d-flex justify-content-between em_con_bar">
              <RangeSlider
                variant="primary"
                tooltip="off"
                min="1"
                max="20"
                value={value}
                onChange={(changeEvent) => setValue(changeEvent.target.value)}
              />
              <span>{`${value}%`}</span>
            </div>
            <div className="retirement_age">
              <p>Retirement Age</p>
              <div className="d-flex justify-content-between re_ag_ber">
                <RangeSlider
                  variant="primary"
                  tooltip="off"
                  min="20"
                  max="80"
                  value={age}
                  onChange={(changeEvent) => setAge(changeEvent.target.value)}
                />
                <span>{`${age}`}</span>
              </div>
            </div>
            <hr />
            <div className="rate_section">
              <div className="d-flex justify-content-between em_rate">
                <p>Employee Contribution</p>
                <p>8.4%</p>
              </div>
              <div className="d-flex justify-content-between in_rate">
                <p>Interest Rate</p>
                <p>5%</p>
              </div>
            </div>
            <div className="update_section text-center">
              <Button className="update_btn">Update</Button>
              <Nav.Link to="/">
                View Help Docs <FaIcons.FaChevronRight />{" "}
              </Nav.Link>
            </div>
          </div>
        </div>
        <div className="question_main_section">
          <div className="question_section">
            <p className="q1">Are you considering a</p>
            <p className="q2">Housing Advance?</p>
            <p className="q3">Limited time reduced interest</p>
            <Nav.Link className="learn_more" to="/">
              Learn More <FaIcons.FaChevronRight />{" "}
            </Nav.Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default RetirementStrategy;
