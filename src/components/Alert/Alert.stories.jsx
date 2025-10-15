import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div>
      <Alert color="rgb(161, 10, 10)" text="This is a sample alert message. It provides important information to the user." />
      <Alert color="rgb(161, 10, 10)" text="Alternative put your console.log message in here with props" />
      <Alert text="Positive message" color="green" />
    </div>
  );
};
