import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div>
      <Alert text="This is a sample alert message. It provides important information to the user." />
      <Alert text="Alternative put your console.log message in here with props" />
    </div>
  );
};
