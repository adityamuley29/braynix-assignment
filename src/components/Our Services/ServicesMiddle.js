import React from "react";
import "./ServicesMiddle.css";

function ServicesMiddle() {
  return (
    <div className="ServicesMiddle-Container">
      <div className="ServicesMiddle-Context">
        <div className="Context-imageDiv">
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/money-bag.png"
            alt="money logo"
          />
        </div>
        <h2>Personal Finances</h2>
        <p>
          Consolidate finacial data from multiple sources and categorize
          transaction up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>
      <div className="ServicesMiddle-Context">
        <div className="Context-imageDiv">
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/combo-chart.png"
            alt="chart logo"
          />
        </div>
        <h2>Banking & Coverage</h2>
        <p>
          With our platform,you can speed up account onboarding and support
          ongoing payments for checking,savings,credit card,and brokerage
          accounts.
        </p>
      </div>
      <div className="ServicesMiddle-Context">
        <div className="Context-imageDiv">
          <img src="https://img.icons8.com/external-those-icons-fill-those-icons/30/ffffff/external-credit-card-business-those-icons-fill-those-icons-2.png" alt="credit card logo" />
        </div>
        <h2>Consumer Payments</h2>
        <p>
          It's easier to set up secure bank payments with us through a flow
          designed with the user experience in mind.Customers could instantly
          authenticate their accounts.
        </p>
      </div>
    </div>
  );
}

export default ServicesMiddle;
