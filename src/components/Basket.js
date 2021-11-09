const Basket = (props) => {
  const { basket, setBasket } = props;
  return (
    <div className="basket">
      <button className="valid">Valider mon panier</button>
      {basket.map((item, i) => {
        return (
          <div className="basket-item" key={i}>
            <div className="basket-button">
              <button
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket[i].quantity--;
                  setBasket(newBasket);
                }}
                className="bkt-btn"
              >
                -
              </button>
              <div>{item.quantity}</div>
              <button
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket[i].quantity++;
                  setBasket(newBasket);
                }}
                className="bkt-btn"
              >
                +
              </button>
              <div>{item.title}</div>
            </div>

            <div>{item.price}€</div>
          </div>
        );
      })}
      <div>sous total</div>
      <span></span>
      <div>frais de livraison</div>
    </div>
  );
};

export default Basket;
