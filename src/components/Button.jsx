const Button = (props) => {
  //   console.log(`onbutton ${props.switchOn} - offbutton ${props.switchOff}`);
  return (
    <div>
      <button
        className={props.switchOn ? "selected" : "notSelected"}
        onClick={() => {
          props.setSwitch(!props.switchOff);
          props.setSwitch(!props.switchOn);
        }}
      >
        ON
      </button>
      <button
        className={props.switchOff ? "selected" : "notSelected"}
        onClick={() => {
          props.setSwitch(!props.switchOff);
          props.setSwitch(!props.switchOn);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Button;
