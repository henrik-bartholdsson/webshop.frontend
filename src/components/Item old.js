import React from "react";

export default class Item extends React.Component {
  state = {
    loading: true,
    object: {},
    testName: "Test",
  };

  async componentDidMount() {
    await fetch("https://localhost:44324/weatherforecast")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ object: data, loading: false });
        console.log(data);
      });
  }

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {this.state.object.map((sample) => (
          <div key={sample.id}>
            {sample.temperatureC} {sample.summary} {sample.id}
          </div>
        ))}
      </div>
    );
  }
}
