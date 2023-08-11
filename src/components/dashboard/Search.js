import "../../assets/css/dashboard/dashboard.css";
import CardTransfer from "../../assets/img/Card_Transfer.png";
import DollarMinimalistic from "../../assets/img/Dollar_Minimalistic.png";
import DashboardUser from "../../assets/img/Dashboard_User.png";


function Search() {
  return (
    <div className="dashboard-search-container">
      <p className="main-header-letter">Search Perfect <span style={{color:"#53FC18"}}>Pro</span>fessional</p>
      <input className="dashboard-search" placeholder="Search here..."/>
      <div className="dashboard-search-category-container">
        <div className="dashboard-search-category main-description">
            Designers
        </div>
        <div className="dashboard-search-category main-description">
            Developers
        </div>
        <div className="dashboard-search-category main-description">
            3D Artists
        </div>
        <div className="dashboard-search-category main-description">
            Content Writer
        </div>
      </div>
      <a>Advance Search</a>
    </div>
  );
}
export default Search;