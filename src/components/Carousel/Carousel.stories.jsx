import Carousel from "./Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

export const Default = () => {
  const slides = [
    <div
      key="1"
      style={{
        backgroundColor: "#E6D8C3",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1>Första slide</h1>
      <p>Detta block bestämmer själv sin höjd baserat på texten.</p>
    </div>,
    <div
      key="2"
      style={{
        backgroundColor: "#C2A68C",
        color: "white",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h1>Andra slide</h1>
      <p>Den här har mer padding och blir automatiskt högre.</p>
    </div>,
    <div
      key="3"
      style={{
        backgroundColor: "#5D866C",
        color: "white",
        padding: "160px 20px",
        textAlign: "center",
      }}
    >
      <h1>Tredje slide</h1>
      <p>Ingen fast höjd — karusellen växer med innehållet.</p>
    </div>,
  ];

  return (
    <div style={{ padding: "40px" }}>
      <Carousel items={slides} />
    </div>
  );
};
