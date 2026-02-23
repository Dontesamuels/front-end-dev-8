import { useParams, Link } from "react-router-dom";
import { useEvents } from "../contexts/EventContext";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const { getEventById } = useEvents();

  const event = getEventById(id);

  if (!event) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>Event not found.</p>
        <Link to="/">Back to Events</Link>
      </div>
    );
  }

  const {
    name,
    dates,
    images,
    _embedded,
    url,
    info,
    pleaseNote,
  } = event;

  return (
    <div className="event-details-container">
      <h1>{name}</h1>
      {images && (
        <img
          src={images[0]?.url}
          alt={name}
          className="event-details-image"
        />
      )}
      <p><strong>Date:</strong> {dates?.start?.localDate} {dates?.start?.localTime}</p>
      <p><strong>Venue:</strong> {_embedded?.venues[0]?.name}</p>
      {info && <p><strong>Info:</strong> {info}</p>}
      {pleaseNote && <p><strong>Note:</strong> {pleaseNote}</p>}
      <a href={url} target="_blank" rel="noopener noreferrer">
        Buy Tickets
      </a>
      <br />
      <Link to="/">← Back to Events</Link>
    </div>
  );
};