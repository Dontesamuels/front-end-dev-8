import { useEffect } from "react";
import { useEvents } from "../contexts/EventContext";
import EventCard from "../components/EventCard";
import "./EventsList.css";

export default function EventsList() {
  const { events, fetchEvents, loading } = useEvents();

  useEffect(() => {
    fetchEvents(); // Fetch all events on page load
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading events...</p>;
  if (!events.length) return <p style={{ textAlign: "center" }}>No events found.</p>;

  return (
    <div className="events-container">
      <aside className="sidebar">
        <h3>Filters / Categories</h3>
        {/* You can add filter buttons or checkboxes here */}
      </aside>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}