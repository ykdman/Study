// import { json, useRouteLoaderData } from "react-router-dom";
// import EventItem from "../components/EventItem.js";

// function EventDetailPage() {
//   const eventDetailData = useRouteLoaderData("event-detail");
//   console.log(eventDetailData);

//   return <EventItem event={eventDetailData.event} />;
// }

// export default EventDetailPage;

// export async function loader({ request, params }) {
//   const id = params.eventId;
//   console.log(id);
//   const response = await fetch("http://localhost:8080/events/" + id);

//   if (!response.ok) {
//     throw json(
//       { message: "선택된 이벤트에 대한 세부정보를 가져올 수 없음" },
//       { status: 500 }
//     );
//   } else {
//     console.log("통과 테스트");
//     console.log(response);
//     return response;
//   }
// }
import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    console.log(response);
    return response;
  }
}
