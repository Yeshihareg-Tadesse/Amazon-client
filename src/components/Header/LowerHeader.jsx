import React from "react";
import classes from "./Header.module.css";
import { TfiMenu } from "react-icons/tfi";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <TfiMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
