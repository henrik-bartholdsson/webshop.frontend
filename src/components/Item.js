import React from "react";
import "./Items.css";

export default class Item extends React.Component {
  state = {
    loading: true,
    loadingError: false,
    object: {},
  };

  async componentDidMount() {
    await fetch("https://localhost:44324/api/items")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ object: data, loading: false });
        console.log(data);
      });

    this.setState({ loadingError: false });
  }

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : !this.state.loadingError ? (
      <div className="">
        {this.state.object.map((sample) => (
          <div className="item" key={sample.id}>
            <div className="heading">{sample.name}</div>
            <div className="description">{sample.description}</div>
            <br />
            {sample.extraPriceActive ? (
              <div>
                <div style={{ textDecorationLine: "line-through" }}>
                  {sample.price}:-
                </div>
                <div style={{ color: "red" }}>{sample.extraPrice}:-</div>
              </div>
            ) : (
              <div>{sample.price}:-</div>
            )}
            <hr />
          </div>
        ))}
      </div>
    ) : (
      <div>Error while loading</div>
    );
  }
}
