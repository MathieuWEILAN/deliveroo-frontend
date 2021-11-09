const Basket = (props) => {
  const { basket, setBasket } = props;
  const costShipping = (2.5).toFixed(2);
  let totalBasket = basket.reduce((total, obj) => obj.total + total, 0);
  totalBasket = Number(totalBasket);
  totalBasket = totalBasket.toFixed(2);

  const totalOfTotal = costShipping + totalBasket;

  const remove = (i) => {
    const newBasket = [...basket];
    if (newBasket[i].quantity === 0) {
      const emptyBasket = newBasket.filter((elem) => elem.quantity >= 1);
      setBasket(emptyBasket);
    } else {
      newBasket[i].quantity--;
      newBasket[i].total = newBasket[i].quantity * newBasket[i].price;
      setBasket(newBasket);
    }
  };

  return (
    <div className="basket">
      <button className={basket.length > 0 ? "valid" : "valid unvalid"}>
        Valider mon panier
      </button>
      {basket.map((item, i) => {
        const total = Number(item.price * item.quantity).toFixed(2);

        return (
          <div>
            {item.quantity > 0 && (
              <div className="basket-item" key={i}>
                <div className="basket-button">
                  <button
                    onClick={() => {
                      const newBasket = [...basket];

                      newBasket[i].quantity--;
                      newBasket[i].total =
                        newBasket[i].quantity * newBasket[i].price;
                      setBasket(newBasket);

                      if (newBasket[i].quantity === 0) {
                        const emptyBasket = newBasket.filter(
                          (elem) => elem.quantity >= 1
                        );
                        setBasket(emptyBasket);
                      }
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
                      newBasket[i].total =
                        newBasket[i].quantity * newBasket[i].price;
                      setBasket(newBasket);
                    }}
                    className="bkt-btn"
                  >
                    +
                  </button>

                  <div>{item.title}</div>
                </div>

                <div>{total}€</div>
              </div>
            )}
          </div>
        );
      })}

      {basket.length > 0 ? (
        <div className="total">
          <div className="sous-total bar">
            <div>Sous total</div>
            <div>{totalBasket}</div>
          </div>
          <div className="sous-total">
            <div>Frais de livraison</div>
            <div> {costShipping}€</div>
          </div>
          <div className="sous-total bar">
            <div>Total</div>
            <div>
              {(Number(costShipping) + Number(totalBasket)).toFixed(2)}€
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="empty">Votre panier est vide</div>
        </div>
      )}
    </div>
  );
};

export default Basket;
