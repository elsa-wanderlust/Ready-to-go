import Button from "./button";

const ButtonsSet = (props) => {
  return (
    <div>
      <Button
        switchOn={props.switch}
        switchOff={!props.switch}
        setSwitch={props.setSwitch}
      />
    </div>
  );
};
export default ButtonsSet;
