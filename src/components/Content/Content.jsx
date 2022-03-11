import React from "react";
import "./Content.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, isLess0: "" };
  }

  sub = () => {
    let result = `${Number(this.state.num1) - Number(this.state.num2)}`;
    if (result < 0) {
      this.setState({ isLess0: true });
    } else {
      this.setState({ isLess0: false });
    }
  };
  render() {
    return (
      <>
        <h1>Positive OR Negative ?</h1>
        Number 1: &nbsp;
        <input
          min={0}
          type="number"
          name="num1"
          id="num1"
          placeholder="Add Number 1"
          onChange={(num1) => {
            this.setState({ num1: num1.target.value });
          }}
        />
        <br />
        <br />
        Number 2: &nbsp;
        <input
          min={0}
          type="number"
          name="num2"
          id="num2"
          placeholder="Add Number 2"
          onChange={(num2) => {
            this.setState({ num2: num2.target.value });
          }}
        />
        <br />
        <br />
        <button
          onClick={(sub) => {
            {
              this.sub();
            }
          }}
        >
          Calculate
        </button>
        <br />
        <br />
        <h3>Welcome to Israel !</h3>
        <div>
          <img
            width={700}
            src={
              this.state.isLess0
                ? "https://images4.alphacoders.com/108/1082304.jpg"
                : "https://www.tiuli.com/image/89065e32eeaa32c8e6ea1bc5894bc4e7.jpg?&width=1200&height=630"
            }
          />
        </div>
      </>
    );
  }
}
