import React from "react";
import ServicesMiddleCard from "./ServicesMiddle-Card";
import "./ServicesMiddle.css";

function ServicesMiddle() {
  return (
    <div className="ServicesMiddle-Container">
      <ServicesMiddleCard
        imgURL="https://img.icons8.com/ios-filled/30/ffffff/money-bag.png"
        title="Personal Finances"
        desc="Consolidate finacial data from multiple sources and categorize
          transaction up to 2 years of history. Analyze reports to reconcile
          activities in your account."
      />
      <ServicesMiddleCard
        imgURL="https://img.icons8.com/ios-filled/30/ffffff/combo-chart.png"
        title="Banking & Coverage"
        desc="With our platform,you can speed up account onboarding and support
        ongoing payments for checking,savings,credit card,and brokerage
        accounts."
      />
      <ServicesMiddleCard
        imgURL="https://img.icons8.com/external-those-icons-fill-those-icons/30/ffffff/external-credit-card-business-those-icons-fill-those-icons-2.png"
        title="Consumer Payments"
        desc="It's easier to set up secure bank payments with us through a flow
        designed with the user experience in mind.Customers could instantly
        authenticate their accounts."
      />
    </div>
  );
}

export default ServicesMiddle;
