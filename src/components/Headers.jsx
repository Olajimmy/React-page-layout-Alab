import SearchBar from "./SearchBar";
import EmployeeList from "./employeeList";
function Headers() {
  return (
    <div className="innerCont">
      <SearchBar />
      <SearchBar />
      <EmployeeList />
      {/* <SearchBar /> */}
    </div>
  );
}
export default Headers;
