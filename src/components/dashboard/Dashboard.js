import "../../assets/css/dashboard/dashboard.css";
import Header from "../include/header";
import Top from "./Top";
// import Footer from "../include/footer";

function Dashboard() {
  return (
    <div>
      <div style={{position:"fixed",width:"100%"}}>
          <Header />
      </div>
        <Top />
    </div>
  );
}
export default Dashboard