import "../tailwind.css";

export const parameters = {
  layout: "fullscreen",
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        color: "#ffffff",
        default: true,
      },
      {
        name: "Dark",
        class: ["dark"],
        color: "#000000",
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <div className="w-screen h-fit p-6 bg-white dark:bg-black">
      <Story />
    </div>
  ),
];
