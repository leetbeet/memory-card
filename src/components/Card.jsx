import '../styles/card.css';

export default function Card({ img, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
}
