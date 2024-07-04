import { Link } from "react-router-dom";
export default function UserCard({ person, index }) {
  return (
    <>
      <div className="row justify-content-around">
        <div
          className="card"
          style={{ width: "18rem", margin: "5px" }}
          key={index}
        >
          <div className="card-body">
            <h5 className="card-title">name: {person.name}</h5>
            <h5 className="card-subtitle mb-2 text-muted">
              profession: {person.profession}
            </h5>
            <h5 className="card-subtitle mb-2 text-muted">
              age: {person.age}
            </h5>
            <h5 className="card-subtitle mb-2 text-muted">
              country: {person.country}
            </h5>
            <a href="#" className="card-link">
              academic
            </a>
            <Link to="/userProfile" state={person} className="card-link">
              view more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}