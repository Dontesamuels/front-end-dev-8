import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventProvider } from "./contexts/EventContext"; // We'll create this
import Header from "./components/Header";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";

export default function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
};