const Plat = (props) => {
  const { meals, onClick } = props;
  return (
    <div className="plat">
      {meals.map((meal, i) => {
        return (
          <div
            key={i}
            className="each"
            onClick={(event) => {
              onClick(event, meal.title, meal.price, meal.id);
            }}
          >
            <div className="text">
              <h4>{meal.title}</h4>
              {meal.description && <p>{meal.description}</p>}
              <div className="price-popular">
                <div className="price">{meal.price}€</div>{" "}
                {meal.popular && <span>Populaire</span>}
              </div>
            </div>
            {meal.picture && <img src={meal.picture} alt="" />}
          </div>
        );
      })}
    </div>
  );
};

export default Plat;
