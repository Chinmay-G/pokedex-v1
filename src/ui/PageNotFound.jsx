import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Wrong route. Or maybe your lost?</h2>
      <button onClick={() => navigate(-1)}>&larr; Go Back</button>
    </div>
  );
}

export default PageNotFound;
