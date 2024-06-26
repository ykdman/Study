import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  // loader가 전달해준 값을 사용하기 위한 useLoaderData
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "무언가 잘못됨" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events; //페이지 안에서 사용할 수 있는 데이터로 반환한다.
  }
}
