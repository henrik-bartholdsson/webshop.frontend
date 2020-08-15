import React from "react";
import "./hardDrives.css";

export default class HardDrives extends React.Component {
  state = {
    loading: true,
    loadingError: false,
    object: {},
  };

  async componentDidMount() {
    await fetch("https://localhost:44324/api/v1/items")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ object: data, loading: false });
      });

    this.setState({ loadingError: false });
  }

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : !this.state.loadingError ? (
      <div className="">
        {this.state.object.map((product) => (
          <div className="item" key={product.id}>
            <div className="heading">{product.name}</div>
            <div className="description">{product.description}</div>
            <br />
            {product.extraPriceActive ? (
              <div>
                <div style={{ textDecorationLine: "line-through" }}>
                  {product.price}:-
                </div>
                <div style={{ color: "red" }}>{product.extraPrice}:-</div>
              </div>
            ) : (
              <div>{product.price}:-</div>
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
