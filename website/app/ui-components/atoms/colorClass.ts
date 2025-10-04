type props = {
  color: "classic" | "reverse" | "grey" | null;
  type?: "section" | "title" | "subtitle" | "text" ;
};

type picker = {
    type: "section" | "title" | "subtitle" | "text";
    bgColor?: string
    titleColor?: string
    subtitleColor?: string
    textColor?: string
}

const typePicker = (data: picker): string => {
  switch (data.type) {
    case "section":
      return `bg-${data.bgColor}`; // Třídy pro sekci
    case "title":
      return `text-${data.titleColor}`; // Třídy pro nadpis
    case "subtitle":
      return `text-${data.subtitleColor}`; // Třídy pro podnadpis
    case "text":
      return `text-${data.textColor}`; // Třídy pro běžný text
    default:
      return "";
  }
};

export const colorClass = (props: props): string => {
  switch (props.color) {
    case "classic":
      return typePicker({ type: props.type || "title", bgColor: "classic", titleColor: "title", subtitleColor: "subtitle", textColor: "text" });
    case "reverse":
      return typePicker({ type: props.type || "title", bgColor: "reverse", titleColor: "title-reverse", subtitleColor: "subtitle-reverse", textColor: "text-reverse" });
    case "grey":
      return typePicker({ type: props.type || "title", bgColor: "bgGrey", titleColor: "title", subtitleColor: "subtitle", textColor: "text" });
    default:
      return "";
  }
};