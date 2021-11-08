const Basket = (props) => {
  const { basket } = props;
  return (
    <div>
      <button>VALIDER PANIER</button>
      {basket.map((item, i) => {
        return (
          <div>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
