function Todo({ text }) {
  function handleDelete() {
    console.log("Clicked!");
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
