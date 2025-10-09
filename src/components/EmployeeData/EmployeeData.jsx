import styles from "./EmployeeData.module.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const EmployeeCard = (props) => {
  const data = props.data;
  return (
    <div className={styles.card}>
      <img
        src={data.picture}
        alt={data.name ?? "no picture"}
        className={styles.image}
      />

      <h2 className={styles.name}>{data.name}</h2>

      <div className={styles.pills}>
        {/* Rad 1 – Position */}
        <div className={styles.pillRow}>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Position</span>
            <span className={styles.pillDivider}>|</span>
            <span className={styles.pillValue}>{data.position}</span>
          </div>
        </div>

        {/* Rad 2 – Age och Salary */}
        <div className={styles.pillRow}>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Age</span>
            <span className={styles.pillDivider}>|</span>
            <span className={styles.pillValue}>{data.age}</span>
          </div>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Salary</span>
            <span className={styles.pillDivider}>|</span>
            <span className={styles.pillValue}>{data.salary}</span>
          </div>
          <p className={styles.description}>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default function EmployeeList() {
  const employees = [
    {
      name: "Robin Hood",
      position: "Arrow Ranger",
      age: "102",
      salary: "0 kr",
      picture: img1,
      text: "Every town has its ups and downs, and Faint hearts never won fair lady, along with the recurring Robin Hood's advice Rise and rise again until lambs become lions",
    },
    {
      name: "Robin Vikström",
      position: "FrontEnd Developer",
      age: "32",
      salary: "50 000 kr",
      picture: img2,
      text: "lorem ipsum  dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Torkel i knipa",
      position: "Studerande",
      age: "11",
      salary: "0 kr",
      picture: img3,
      text: "Ah, men det var ju fan tur att ingen fick den feta kon i huvvet' va!",
    },
    {
      name: "Emma Hoffmann",
      position: "Finance",
      age: "29",
      salary: "60 000 kr",
      picture: img4,
      text: "lorem ipsum  dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className={styles.container}>
      {employees.map((employee, index) => (
        <EmployeeCard key={index} data={employee} />
      ))}
    </div>
  );
}
