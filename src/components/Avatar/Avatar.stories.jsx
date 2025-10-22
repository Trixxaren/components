import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Default = () => {
  return (
    <div>
      <Avatar name="Robin Vikström" src="https://picsum.photos/200" size={80} />
    </div>
  );
};
