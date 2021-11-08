const Restaurant = (props) => {
  const { restaurant, description, picture } = props;
  return (
    <div className="section">
      <div className="first-section">
        <h1>{restaurant}</h1>
        <div className="baseline">{description}</div>
      </div>
      <img src={picture} alt="" className="photo-first-section" />
    </div>
  );
};

export default Restaurant;
