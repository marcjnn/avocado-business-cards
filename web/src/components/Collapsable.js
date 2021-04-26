import React, { useState } from "react";

function Collapsable(props) {
  const { title, icon, fieldset, isClose } = props;

  let [isCollapsableClose, setIsCollapsableClose] = useState(isClose);
  // let [classClose, setClassClose] = useState(
  //   isCollapsableClose ? "collapsable--close" : ""
  const handleLegendClick = () => {
    setIsCollapsableClose(!isCollapsableClose);
    // setClassClose(isCollapsableClose ? "" : "collapsable--close");
  };

  const classClose = isCollapsableClose ? "collapsable--close" : "";

  return (
    <fieldset className={`collapsable__${fieldset} collapsable ${classClose}`}>
      <legend className="collapsable__header" onClick={handleLegendClick}>
        <h2 className="tittle__collapsable">
          <i className={"fa fa-collapsable " + icon} aria-hidden="true"></i>
          {title}
        </h2>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </legend>
      <div className={`collapsable__content collapsable__content--${fieldset}`}>
        {props.children}
      </div>
    </fieldset>
  );
}

export default Collapsable;
