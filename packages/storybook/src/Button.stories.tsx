import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "storybook/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Preview: ComponentStory<typeof Button> = (props) => {
  return <Button {...props} />;
};

Preview.args = {
  children: "Button",
};
