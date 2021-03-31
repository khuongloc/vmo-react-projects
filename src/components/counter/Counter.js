import React from "react";
import { connect } from "react-redux";

import {
  createCounterReset,
  createCounterIncrease,
  createCounterDecrease,
} from "../../actions/counter";

import Button from "../buttons/Button";

const Counter = (props) => {
  return (
    <div className="container mx-auto mt-5">
      <div className="w-full md:w-6/12 lg:w-4/12 mx-auto p-2">
        <div>
          <div className="bg-gray-200 w-3/4 h-72 md:h-h-80 shadow-lg rounded flex justify-center items-center text-8xl mx-auto">
            {props.count.value}
          </div>
          <div className="mt-7 text-center">
            <Button
              moreClass="mr-3 px-3 py-2"
              onClick={props.createCounterIncrease}
              title="Increase"
            />
            <Button
              moreClass="mr-3 px-3 py-2"
              onClick={props.createCounterReset}
              title="Reset"
            />
            <Button
              moreClass="mr-3 px-3 py-2"
              onClick={props.createCounterDecrease}
              title="Decrease"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps, {
  createCounterReset,
  createCounterIncrease,
  createCounterDecrease,
})(Counter);
