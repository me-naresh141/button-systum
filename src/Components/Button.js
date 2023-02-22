const Button = (props) => {
  const getSize = () => {
    let { label, size, type, disabled, onClickHandler, Id } = props;
    return `${size || "medium"} ${type || "primary"}`;
  };
  return (
    <div>
      <button className={getSize()}>{props.label}</button>
    </div>
  );
};

export default Button;
