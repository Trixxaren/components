import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div>
      <Modal
        btn="Öppna"
        title="Modal"
        text="It is used to display information, collect input, or guide the user through a specific task. This type of modal window is designed to command the user's full attention, as it obscures the underlying content and entire screen until the modal is closed or the user completes the modal dialog."
      />
    </div>
  );
};
