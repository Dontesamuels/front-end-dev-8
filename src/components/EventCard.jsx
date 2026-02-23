import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <button>View Details</button>
    </div>
  );
};