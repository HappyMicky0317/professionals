function WhiteButton(props) {
    const btn = {
      borderRadius:"7px",
      backgroundColor:"rgba(255,255,255,0.3)",
      padding:"5px 20px",
      fontFamily:"Inter",
      fontSize:"12px",
      color:"#53FC18",
      fontWeight:"700",
      border:"hidden",
      rotation:"-180",
      inlineSize: "max-content"
    }
  
    return (
      <div>
        <button style={btn}>{props.name}</button>
      </div>
    );
  }
  
  export default WhiteButton;
  