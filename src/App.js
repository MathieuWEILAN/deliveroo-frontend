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
    const newItem = {
      title: title,
      price: Number(price),
      id: id,
      quantity: 1,
    };
    const newBasket = [...basket];
    //methode .some(callback) renvoie un booleen pour voir si la callback est true or false. la fonction teste si  au moins 1 élément du tableau passe le test (la callback). On peut aussi utiliser la methode .find(callback).
    if (newBasket.some((el) => el.id === newItem.id)) {
      const index = newBasket.findIndex((el) => el.id === newItem.id);
      newBasket[index].quantity++;
      newBasket[index].total =
        newBasket[index].price * newBasket[index].quantity;
    } else {
      newItem["total"] = newItem.price;
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
