import { useEvents } from "../contexts/EventContext";
import EventCard from "../components/EventCard";
import "./EventsList.css";

export default function EventsList() {
  const { events } = useEvents();

  return (
    <div className="events-container">
      <div className="sidebar">Filters / Categories</div>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};