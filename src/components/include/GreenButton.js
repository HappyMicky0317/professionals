function GreenButton(props) {
  const btn = {
    borderRadius:"7px",
    backgroundColor:"#53FC18",
    padding:"5px 20px",
    fontFamily:"Inter",
    fontSize:"12px",
    color:"#000",
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

export default GreenButton;
