import { createContext, useContext, useState, useEffect } from "react";

const EventContext = createContext();

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) throw new Error("useEvents must be inside EventProvider");
  return context;
}

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${API_KEY}`
      );
      const data = await res.json();
      if (data._embedded) {
        setEvents(data._embedded.events);
      }
    }
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
}