import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}
