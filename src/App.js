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

  const buyItem = (title, price, id) => {
    const newItem = { title: title, price: price, id: id, quantity: 1 };
    const newBasket = [...basket];
    // console.log(newBasket, newItem);

    if (newBasket.length > 0) {
      for (let i = 0; i < newBasket.length; i++) {
        if (newBasket[i].id === newItem.id) {
          newBasket[i].quantity++;
          console.log("nouvelle quantité", newBasket[i].quantity);
        } else {
          newBasket.push(newItem);
          console.log("nouvelle item");
        }
      }
    } else {
      newBasket.push(newItem);
    }
    setBasket(newBasket);
    console.log("nouveau panier", newBasket);
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

        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </div>
  );
}

export default App;
