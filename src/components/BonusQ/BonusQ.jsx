import React from "react";

const BonusQ = () => {
  return (
    <div className="border-4 my-3 rounded-lg">
      <p>
        <span className="font-bold">
          Props vs state <br />
        </span>
        <span>
          <b>Props</b>: Props are passed to a component from it's parent
          component. They are read only property thus can not be modified. A
          component ca use props to customize its behavior.
        </span>{" "}
        <br />
        <span>
          <b>State</b>: State is used to manage data within a component. It is a
          mutable object and can be customized. It is used to store and update
          data. A component can update its state using the setState method,
          which will trigger a re-render of the component. State is private to a
          component and cannot be accessed or modified by other components.
        </span>
        <hr className="my-3" />
      </p>
      <p>How does useState work?</p>
      <hr className="my-3" />
      <p>Purpose of useEffect other than fetching data.</p>
      <hr className="my-3" />
      <p>How Does React work?</p>
    </div>
  );
};

export default BonusQ;
