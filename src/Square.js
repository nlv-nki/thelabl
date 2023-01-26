const Square = (props) => {
  const style = {
    backgroundColor: props.background,
    top: props.top,
    left: props.left,
  };
  //console.log(props.onClickSquare);
  return <div className="square" style={style} onClick={props.onClickSquare}></div>;
};

export default Square;
