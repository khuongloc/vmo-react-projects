import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { createFetchQuotes } from "../../actions/quote";
import Button from "../buttons/Button";

const makeColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const Quote = (props) => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(null);
  const [isQuoteActive, setIsQuoteActive] = useState(false);
  const { createFetchQuotes } = props;

  useEffect(() => {
    setColor(makeColor());
  }, []);

  useEffect(() => {
    createFetchQuotes();
  }, [createFetchQuotes]);

  useEffect(() => {
    setIsQuoteActive(true);
    return () => {
      setIsQuoteActive(false);
    };
  }, [index]);

  useEffect(() => {
    if (props.quotes) {
      setIndex(Math.floor(Math.random() * props.quotes.length));
    }
  }, [props.quotes]);

  const handleMakeQuote = () => {
    let randomIndex = Math.floor(Math.random() * props.quotes.length);
    if (randomIndex === index) {
      randomIndex -= 1;
      if (randomIndex < 0) {
        randomIndex = props.quotes.length - 1;
      }
    }
    setIsQuoteActive(false);
    setTimeout(() => {
      setIndex(randomIndex);
      setColor(makeColor());
    }, 700);
  };

  const colorStyle = {
    color: color,
  };

  const bgStyle = {
    backgroundColor: color,
  };

  if (props.quotes.length === 0) {
    return (
      <div className="w-screen h-screen flex justify-center items-center absolute top-0">
        <i className="fas fa-spinner animate-spin text-3xl"></i>
      </div>
    );
  }

  return (
    <div
      style={bgStyle}
      className="p-2 md:p-0 md:flex md:justify-center md:items-center w-screen h-screen md:absolute md:top-0 md:z-1 transition ease-in-out duration-700"
    >
      <div className="w-full md:w-6/12 lg:w-4/12 mx-auto p-2 mt-3 md:p-3 border bg-white rounded trasition duration-700">
        <div
          style={colorStyle}
          className={`transition opacity-0 duration-1000 text-center text-2xl md:text-3xl font-bold ${
            isQuoteActive ? "quoteActive" : "quoteUnmount"
          }`}
        >
          <i className="fas fa-quote-left"></i> {props.quotes[index].quote}
        </div>

        <div
          style={colorStyle}
          className="text-right mt-5 transition ease-in-out"
        >
          - {props.quotes[index].author}
        </div>
        <div className="flex mt-5">
          <Button
            bgCustom={color}
            moreClass="px-3 py-2 transition duration-700 ease-in-out"
            title={<i className="fab fa-twitter"></i>}
          />
          <Button
            bgCustom={color}
            onClick={handleMakeQuote}
            moreClass="ml-auto px-3 py-2 transition duration-700 ease-in-out"
            title="New quote"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

export default connect(mapStateToProps, { createFetchQuotes })(Quote);
