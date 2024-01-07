import React from "react";
import { Button, Card } from "react-bootstrap";

import "./style/MobileProfile.css";
import MobileNavBar from "./MobileNavBar";

const MobileProfile = () => {
  return (
    <div>
      <Card className="mobile_profile_card">
        <div className="mobile_profile_header d-flex justify-content-start">
          <img className="ml-3 mr-3" src="./images/rishi.png" alt="not found" />
          <span>
            <h2>Hi Mike,</h2>
            <p>Welcome back.</p>
          </span>
        </div>
        <Card className="balance_details">
          <div className="amount_balance">
            <h3>Today</h3>
            <h2>$19,892</h2>
            <span>Amount Balance</span>
          </div>
          <div className="mt-3 d-flex justify-content-around">
            <div className="contributions">
              <h3>$4,000</h3>
              <span>Year-to-Date</span>
            </div>
            <div className="interest">
              <h3>$1892</h3>
              <span>Total Interest</span>
            </div>
          </div>
          <div className="mobile_home text-center">
            <Button className="mobile_home_btn">I want to... </Button>
          </div>
        </Card>
        <Card className="balance_details mb-4">
          <div className="mobile_transaction_data">
            <h3>Recent Transactions</h3>
            <span>2020-08-07</span>
            <p>Withdrawal Transfer to Bank - XXX11</p>
            <hr />
          </div>
        </Card>
        <MobileNavBar />
      </Card>
    </div>
  );
};

export default MobileProfile;
