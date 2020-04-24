const Label = (props) => {
  return (
    <div className="Label">
      {props.text} <em>{props.last}</em>
    </div>
  );
};

export default Label;
