import { Link } from "react-router-dom";

function Homepage() {
  return (
    <header>
      <h1>Homepage</h1>
      <p>This is an awesome channel</p>
      <div>
        <Link to="/login">
          <button>log in</button>
        </Link>
      </div>
    </header>
  );
}

export default Homepage;
