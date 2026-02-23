// src/contexts/EventContext.jsx
import { createContext, useContext, useState } from "react";

// Create the context
const EventContext = createContext();

// Custom hook to use events
export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventProvider");
  }
  return context;
}

// Provider component
export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;

  // Fetch events from Ticketmaster
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();
      // Ticketmaster wraps events in _embedded.events
      const eventsList = data._embedded?.events || [];
      setEvents(eventsList);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    events,
    fetchEvents,
    loading,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}