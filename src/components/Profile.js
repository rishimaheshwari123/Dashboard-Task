import React from 'react';
import { Button, Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import person from "../images/person.jpeg";
import "../stylings/Profile.modules.css"

const Profile = () => {
    return (
        <>
            <Card className="profile_card">
                <div className="profile_header d-flex justify-content-around">
                    <img src={person} alt="person"/>
                    <span>
                        <h2>Hi Mike,</h2>
                        <p>Welcome back.</p>
                    </span>
                </div>
                <div className="profile_main_content">
                    <div className="profile_main_top">
                        <h3>Today</h3>
                        <div className="amount_balance">
                            <h2>$19,892</h2>
                            <span>Amount Balance</span>
                        </div>
                        <div className="contributions">
                            <h3>$4,000</h3>
                            <span>Year-to-Date Contributions</span>
                        </div>
                        <div className="interest">
                            <h3>$1892</h3>
                            <span>Total Interest</span>
                        </div>
                        <Button>I want to <FaIcons.FaCaretDown /> </Button>
                    </div>
                    <div className="profile_main_bottom">
                        <h3>Recent Transactions</h3>
                        <div className="transaction_data">
                            <span>2020-08-07</span>
                            <p>Withdrawal Transfer to Bank - XXX11</p>
                            <hr/>
                        </div>
                        <div className="transaction_data">
                            <span>2020-07-21</span>
                            <p>Withdrawal Transfer to Bank - XXX11</p>
                            <hr/>
                        </div>
                        <div className="transaction_data">
                            <span>2020-07-16</span>
                            <p>Withdrawal Transfer to Bank - XXX11</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Profile;