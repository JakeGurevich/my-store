import React from "react";

import "./App.css";
import axios from "axios";
import Card from "./components/Card";
const api = axios.create({
  baseURL: `https://605b25cf27f0050017c06492.mockapi.io`,
});
class App extends React.Component {
  state = { products: [] };

  getProducts = async () => {
    let res = await api.get("/items");
    this.setState({ products: res.data });
    console.log(res.data);
  };

  addProduct = async (p) => {
    let res = await api.post("/items", { id: 9, name: "Phone", price: "200" });
    console.log(res);
    this.getProducts();
  };
  async componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div className="App">
        Products:
        <div className="wrap">
          {this.state.products.map((p) => {
            return <Card key={p.id} n={p} />;
          })}
        </div>
        <button onClick={this.addProduct}>Add product</button>
      </div>
    );
  }
}

export default App;
