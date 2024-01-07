import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style/RetirementDetails.css";
import Chart from "./Chart";

const RetirementDetails = () => {
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
  return (
    <>
      <div className="details_container">
        <div className="details_header">
          <p>Retirement Income</p>
          <h4>Starting Year 2056</h4>
          <br />
          <Row className="details_header_data_container">
            <Col style={{ width: "100%" }} sm={4}>
              <div className="details_header_data">
                <h4>$300,000</h4>
                <span>My Goal</span>
              </div>
            </Col>
            <Col sm={4}>
              <div className="details_header_data">
                <h4>59%</h4>
                <span>Goal Achieved</span>
              </div>
            </Col>

            <Col sm={4}>
              <div className="details_header_data">
                <h4>$300</h4>
                <span>Est. Monthly Income</span>
              </div>
            </Col>
          </Row>
          <Chart />

          <div className="my_peers_section">
            <h4>How do I compare to my peers?</h4>
            <p>These numbers represent current goal achievement.</p>
            <Row>
              <Col sm={5} className="select_section">
                <Form>
                  <Form.Group as={Row}>
                    <Col sm={2}>
                      <Form.Label>Age:</Form.Label>
                    </Col>
                    <Col sm={8}>
                      <Form.Control as="select" defaultValue="Under 30">
                        <option>Under 30</option>
                        <option>Under 40</option>
                        <option>Under 50</option>
                        <option>Under 60</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <hr className="rd_hr" />
                  <Form.Group as={Row}>
                    <Col sm={2}>
                      <Form.Label>Salary:</Form.Label>
                    </Col>
                    <Col sm={8}>
                      <Form.Control as="select" defaultValue="K 20 - K 30">
                        <option>K 20 - K 30</option>
                        <option>K 40 - K 50</option>
                        <option>K 60 - K 70</option>
                        <option>K 80 - K 90</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <hr className="rd_hr" />
                  <Form.Group as={Row}>
                    <Col sm={2}>
                      <Form.Label>Gender:</Form.Label>
                    </Col>
                    <Col sm={8}>
                      <Form.Control as="select" defaultValue="Male">
                        <option>Male</option>
                        <option>Female</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <hr className="rd_hr" />
                </Form>
              </Col>
              <Col sm={7} className="circular_progress_section">
                <Row>
                  {percentage.map((item) => (
                    <Col sm={4} key={item.value}>
                      <CircularProgressbar
                        value={item.value}
                        text={`${item.value}%`}
                      />
                      <p className="circular_title"> {item.title} </p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetirementDetails;
