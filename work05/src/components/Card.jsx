import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/300?grayscale" className="img"></img>
      <h2 className="name">손유나</h2>
      <p className="studentId">20230580</p>
    </div>
  );
};

export default Card;
