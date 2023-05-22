export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
