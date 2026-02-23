import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <img
        src={event.image || "/images/dog-placeholder.png"} // fallback placeholder
        alt={event.name}
        className="event-image"
      />
      <div className="event-info">
        <h3 className="event-title">{event.name}</h3>
        <p className="event-date">{new Date(event.date).toLocaleString()}</p>
        <p className="event-venue">{event.venue}</p>
        <button className="details-btn">View Details</button>
      </div>
    </div>
  );
}