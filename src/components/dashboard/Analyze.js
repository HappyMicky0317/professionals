import "../../assets/css/dashboard/dashboard.css";
import CardTransfer from "../../assets/img/Card_Transfer.png";
import DollarMinimalistic from "../../assets/img/Dollar_Minimalistic.png";
import DashboardUser from "../../assets/img/Dashboard_User.png";


function Analyze() {
  return (
    <div className="analyze-container">
      <div className="inner-analyze">
        <div className="analyzing-category">
            <div className="dashboard-analyze-image-container">
                <img src={DashboardUser} alt="" />
            </div>
            <p className="main-header-letter" style={{color:"#1DC742",marginTop:"40px"}}>1.2M+</p>
            <p className="main-description" style={{color:"#FFFFFF",marginTop:"40px"}}>Users</p>
        </div>
        <div className="analyzing-category analyze-margin">
            <div className="dashboard-analyze-image-container">
                <img src={DollarMinimalistic} alt="" />
            </div>
            <p className="main-header-letter" style={{color:"#1DC742",marginTop:"40px"}}>4.9M+</p>
            <p className="main-description" style={{color:"#FFFFFF",marginTop:"40px"}}>Sales</p>
        </div>
        <div className="analyzing-category analyze-margin">
            <div className="dashboard-analyze-image-container">
                <img src={CardTransfer} alt="" />
            </div>
            <p className="main-header-letter" style={{color:"#1DC742",marginTop:"40px"}}>2.6M+</p>
            <p className="main-description" style={{color:"#FFFFFF",marginTop:"40px"}}>Transactions</p>
        </div>
      </div>
    </div>
  );
}
export default Analyze;