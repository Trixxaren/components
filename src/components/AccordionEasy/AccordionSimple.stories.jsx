import AccordionSimple from "./AccordionSimple.jsx";

export default {
  title: "Components/AccordionSimple",
  component: AccordionSimple,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <div style={{ paddinng: 24 }}>
      <AccordionSimple
        title="Whats an Accordion?"
        text="A clickable section thats opening and closing to show text on example Q & A. "
      />
      <AccordionSimple
        title="Why use Accordion?"
        text="It saves place on the site and makes content easier to watch. "
      />
      <AccordionSimple
        title="How to change props in this Accordion"
        text="Use the props like this: title=(the title you want) text=(the text you want)"
      />
      <AccordionSimple
        title="Use JSX in Accordion for more information"
        text={
          <ul>
            <li>☀️ Stockholm</li>
            <li>🌤️ Today: 18°C</li>
            <li>🌧️ Tomorrow: 12°C</li>
          </ul>
        }
      />
    </div>
  );
};
