import Avatar from "./Avatar";
import img2 from "../../assets/img2.jpg";
import img4 from "../../assets/img4.jpg";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Default = () => {
  return (
    <div>
      <Avatar name="Robin Vikström" src={img2} size={80} />
      <div style={{ margin: "30px" }} />
      <Avatar name="Emma Hoffman" src={img4} size={80} />
    </div>
  );
};
