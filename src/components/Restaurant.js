const Restaurant = (props) => {
  const { restaurant, description, picture } = props;
  return (
    <div className="section">
      <div className="first-section">
        <h1>{restaurant}</h1>
        <p>{description}</p>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Restaurant;
