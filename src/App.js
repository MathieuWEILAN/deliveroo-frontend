import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log("1");

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

  console.log("2");
  return isLoading ? (
    <span>is loading</span>
  ) : (
    <div>
      <div className="top-bar">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <Restaurant
          restaurant={data.restaurant.name}
          description={data.restaurant.description}
          picture={data.restaurant.picture}
        />
        <Menu categories={data.categories} />
      </div>
    </div>
  );
}

export default App;
