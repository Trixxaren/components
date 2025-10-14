import AccordionPro from "./AccordionPro";
import s from "./StoriesStyles.module.css";

const demoItems = [
  { title: "Rubrik 1", content: "Text 1 – helt via props." },
  {
    title: "Rubrik 2",
    content: (
      <p>
        Text 2 med <strong>JSX</strong>.
      </p>
    ),
  },
  { title: "Rubrik 3", content: "Du kan lägga vad som helst här." },
];

export default {
  // Enkelt namn utan parenteser → stabilt storyId: components-accordionpro
  title: "Components/AccordionPro",
  component: AccordionPro,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

const Template = (args) => <AccordionPro {...args} />;

// ✅ Lägg till Default → id blir: components-accordionpro--default
export const Default = {
  render: Template,
  args: {
    items: demoItems,
    defaultOpen: 0,
    allowMultiple: false,

    className: s.wrapper,
    itemClassName: s.item,
    headerClassName: s.header,
    titleClassName: s.title,
    panelClassName: s.panel,
    contentClassName: s.content,

    titleAs: "h2",
  },
};

export const FleraÖppna = {
  render: Template,
  args: {
    ...Default.args,
    allowMultiple: true,
    defaultOpen: [0, 2],
  },
};
