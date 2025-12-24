import '../styles/card.css';

export default function Card({ img, name, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // prevent scrolling for space
          onClick();
        }
      }}
    >
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
