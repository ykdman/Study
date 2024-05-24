import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "EVENT E1",
  },
  {
    id: "e2",
    title: "EVENT E2",
  },
  {
    id: "e3",
    title: "EVENT E3",
  },
  {
    id: "e4",
    title: "EVENT E4",
  },
  {
    id: "e5",
    title: "EVENT E5",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Event Pages</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
