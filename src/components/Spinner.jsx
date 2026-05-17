import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" role="status" aria-label="Loading" />
    </div>
  );
}

export default Spinner;
