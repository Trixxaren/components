import UserCard from "./UserCard";
import styles from "./UserCard.module.css";

export default {
  title: "Components/UserCard",
  component: UserCard,
};

export const Default = () => {
  return (
    <div className={styles.container}>
      <UserCard
        name="Robin"
        age="32"
        color="#E6D8C3"
        img="https://i.pravatar.cc/150?img=3"
      />
      <UserCard
        name="Emma"
        age="28"
        color="#C2A68C"
        img="https://i.pravatar.cc/150?img=5"
      />
      <UserCard
        name="Alfons"
        age="5"
        color="#5D866C"
        img="https://place.dog/300/300"
      />
    </div>
  );
};
