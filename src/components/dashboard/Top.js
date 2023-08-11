import "../../assets/css/dashboard/dashboard.css";
import Discord from "../../assets/img/discord.png";
import Linkedin from "../../assets/img/linkedin.png";
import Facebook from "../../assets/img/facebook.png";
import Twitter from "../../assets/img/twitter.png";
import Instagram from "../../assets/img/instagram.png";
import ServeX from "../../assets/img/ServeX.png";
import MinimalisticMagnifer from "../../assets/img/Minimalistic_Magnifer.png"

function Top() {
  return (
    <div className="top-container">
      <div className="top-main-part">
        <div className="social-part">
            <img src={Discord} className="social-icon-img" alt="" />
            <img src={Linkedin} className="social-icon-img" alt="" />
            <img src={Facebook} className="social-icon-img" alt="" />
            <img src={Twitter} className="social-icon-img" alt="" />
            <img src={Instagram} className="social-icon-img" alt="" />
        </div>
        <div className="dashboard-top-main-part">
            <p className="main-header-letter" style={{color:"#A4AFB6"}} >Welcome To</p>
            <img src={ServeX} className="servex-img" alt="" />
            <p className="main-description grey-color">Find the widest range of freelancers and professionals for your small and large projects. <span style={{color:"#53FC18"}}>Servex</span> not only hosts individuals but also the collaborating teams of “professionals”</p>
            <div className="top-search-part">
                <img src={MinimalisticMagnifer} alt="" />
                <p>Search My Professional</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Top