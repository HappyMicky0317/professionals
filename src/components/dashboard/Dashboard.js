import "../../assets/css/dashboard/dashboard.css";
import Header from "../include/header";
import Top from "./Top";
import Analyze from "./Analyze";
import Search from "./Search";
// import Footer from "../include/footer";

function Dashboard() {
  return (
    <div>
      <div style={{position:"fixed",width:"100%"}}>
          <Header />
      </div>
        <Top />
        <Analyze />
        <Search />
    </div>
  );
}
export default Dashboard