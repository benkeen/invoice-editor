/**
 * Generic button component. Probably overkill for a small demo like this, but would be useful in a larger app.
 */
const Button = ({ label, onClick }) => (
  <button className="btn btn-info btn-sm" onClick={onClick}>{label}</button>
);

export default Button;

