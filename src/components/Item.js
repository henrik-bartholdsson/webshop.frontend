import React from "react";

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
      <div>
        {this.state.object.map((sample) => (
          <div key={sample.id}>
            <div style={{ color: "Blue", fontWeight: "bold" }}>
              {sample.name}
            </div>
            {sample.description}
            <br />
            {sample.extraPriceActive ? (
              <div>
                <div
                  style={{ color: "red", textDecorationLine: "line-through" }}
                >
                  {sample.price}:-
                </div>
                {sample.extraPrice}:-
              </div>
            ) : (
              <div>{sample.price}:-</div>
            )}
            <br />
            <br />
          </div>
        ))}
      </div>
    ) : (
      <div>Error while loading</div>
    );
  }
}
