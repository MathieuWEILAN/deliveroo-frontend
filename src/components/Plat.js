const Plat = (props) => {
  const { meals } = props;
  return (
    <div className="plat">
      {meals.map((meal, i) => {
        return (
          <div key={i} className="each">
            <div className="text">
              <h4>{meal.title}</h4>
              <p>{meal.description}</p>
              <div>
                <p>{meal.price}</p>
                {meal.popular && <div>Populaire</div>}
              </div>
            </div>
            <img src={meal.picture} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Plat;
