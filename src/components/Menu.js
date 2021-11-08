import Plat from "./Plat";
const Menu = (props) => {
  const { categories, onClick } = props;
  return (
    <div>
      <div className="menu">
        {categories.map((categorie, i) => {
          return (
            <div key={i}>
              <h2>{categorie.name}</h2>
              <Plat meals={categorie.meals} onClick={onClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
