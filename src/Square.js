const Square = (props) => {
  const style = {
    backgroundColor: props.background,
    top: props.top,
    left: props.left,
  };
  return <div className="Square" style={style}></div>;
};

export default Square;
