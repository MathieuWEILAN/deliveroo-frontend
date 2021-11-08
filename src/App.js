import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  // console.log("1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mathieu-deliveroo-backend.herokuapp.com"
        );
        // console.log(response.data);
        console.log(response.data.restaurant.name);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const buyItem = (event, title, price, id) => {
    event.preventDefault();
    // console.log("achat de ", data.categories);
    const newItem = { title: title, price: price, id: id, quantity: 1 };
    const newBasket = [...basket];
    newBasket.push(newItem);
    setBasket(newBasket);
    console.log("dans mon panier", newItem, newBasket);
  };
  // console.log("2");
  return isLoading ? (
    <span>is loading</span>
  ) : (
    <div>
      <div className="top-bar">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="top-bar-2">
        <div className="container">
          <Restaurant
            restaurant={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
        </div>
      </div>
      <div className="container-2">
        <Menu categories={data.categories} onClick={buyItem} />
        <Basket basket={basket} />
      </div>
    </div>
  );
}

export default App;
