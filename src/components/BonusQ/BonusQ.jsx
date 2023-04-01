import React from "react";

const BonusQ = () => {
  return (
    <div className="border-4 mx-2 my-3 rounded-lg">
      <p>
        <span className="font-bold">
          Props vs state <br />
        </span>
        <span>
          <b>Props</b>: Props are passed to a component from it's parent
          component. They are read only property thus can not be modified. A
          component ca use props to customize its behavior.
        </span>
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
      <p>
        <b>How does useState work?</b> <br />
        <span>
          <b>useState</b> s a built-in hook in React that allows functional
          components to have stateful logic. It takes an initial value as an
          argument and returns an array with two elements: the current state
          value, and a function that can be used to update that value.
        </span>
      </p>
      <hr className="my-3" />
      <p>
        <b>Purpose of useEffect other than fetching data.</b> <br />
        <span>
          <b>useEffect</b> is a built-in hook in React that allows us to run
          side effects in a functional component. We can change any text
          depending on teh use of a condition, We can add or remove event
          listeners for a specific element using condition, Clearing timer for a
          schedule.
        </span>
      </p>
      <hr className="my-3" />
      <p>
        <b>How Does React work?</b> <br />
        <span>
          <b>React</b> is javascript library and it is a component based product
          made for building UI. It works by providing a declarative approach to
          building UI components, and by efficiently updating the DOM in
          response to changes in the component state. It uses a virtual DOM, It
          has its own syntax named JSX which is similar to HTML
        </span>
      </p>
    </div>
  );
};

export default BonusQ;
