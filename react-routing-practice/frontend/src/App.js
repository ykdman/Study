// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// : DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage V
//    - /events => EventsPage V
//    - /events/<some-id> => EventDetailPage V
//    - /events/new => NewEventPage V
//    - /events/<some-id>/edit => EditEventPage
// : DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// :Done
// 4. Add properly working links to the MainNavigation
// : DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// : DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// : DONE
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.js";
import EditEventPage from "./pages/EditEvent.js";
import EventDetailPage from "./pages/EventDetail.js";
import EventsPage from "./pages/Events.js";
import NewEventPage from "./pages/NewEvent.js";
import RootLayout from "./pages/RootLayout.js";
import EventsRootLayout from "./pages/EventsRoot.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
