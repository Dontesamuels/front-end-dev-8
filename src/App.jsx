import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventProvider } from "./contexts/EventContext";
import Header from "./components/Header";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";

export default function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <HeaderWrapper />
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}

// Wrapper to connect Header to EventContext
import { useEvents } from "./contexts/EventContext";

function HeaderWrapper() {
  const { searchEvents } = useEvents();

  return <Header onSearch={searchEvents} />;
}