import React from "react";
import { useState } from "react";
import { Form, Nav, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { CircularProgressbar } from "react-circular-progressbar";
import * as AiIcons from "react-icons/ai";
import "./style/MobileRetirementStrategy.css";

const MobileRetirementStrategy = () => {
  const percentage = [
    {
      title: "Average",
      value: 78,
    },
    {
      title: "Top",
      value: 95,
    },
    {
      title: "Me",
      value: 59,
    },
  ];
  const [value, setValue] = useState(12);
  const [age, setAge] = useState(65);
  return (
    <div className="mobile_retirement_strategy_container p-2">
      <div className="d-flex justify-content-end">
        <div style={{ fontSize: "24px", color: "#727384" }}>
          <Nav>
            <Nav.Link style={{ color: "#727384" }} href="/">
              <AiIcons.AiOutlineClose />
            </Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="mobile_my_peers">
        <h4>How do I compare to my peers?</h4>
        <p>These numbers represent current goal achievement.</p>
        <div>
          <div>
            <Form>
              <Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Form.Label>Age:</Form.Label>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Form.Control as="select" defaultValue="Under 30">
                      <option>Under 30</option>
                      <option>Under 40</option>
                      <option>Under 50</option>
                      <option>Under 60</option>
                    </Form.Control>
                  </div>
                </div>
              </Form.Group>
              <hr style={{ width: "100%" }} />
              <Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Form.Label>Salary:</Form.Label>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Form.Control as="select" defaultValue="K 20 - K 30">
                      <option>K 20 - K 30</option>
                      <option>K 40 - K 50</option>
                      <option>K 60 - K 70</option>
                      <option>K 80 - K 90</option>
                    </Form.Control>
                  </div>
                </div>
              </Form.Group>
              <hr style={{ width: "100%" }} />
              <Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Form.Label>Gender:</Form.Label>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Form.Control as="select" defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </div>
                </div>
              </Form.Group>
              <hr style={{ width: "100%" }} />
            </Form>
          </div>
          <div className="d-flex justify-content-between">
            {percentage.map((item) => (
              <div className="ml-2" key={item.value}>
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                />
                <p className="circular_title"> {item.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile_strategy">
        <div className="em_contribution">
          <h3>Retirement Strategy</h3>
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
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "-30px" }}>
        <Button style={{ width: "100%" }}>Update</Button>
      </div>
    </div>
  );
};

export default MobileRetirementStrategy;
