import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeam,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeam}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((emp) => (
              <div
                key={emp.id}
                id={emp.id}
                className={
                  emp.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {emp.gender === "male" ? (
                  <img src={maleProfile} className="card-img-top" />
                ) : (
                  <img src={femaleProfile} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">FullName: {emp.fullName}</h5>
                  <p className="card-text">Designation: {emp.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;