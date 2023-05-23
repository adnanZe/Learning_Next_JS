import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}
