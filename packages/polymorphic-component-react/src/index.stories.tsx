import { useRef } from "react";
import { Text } from "./component";

export default {
  title: "poly",
};

export const Preview = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Text as="button">button</Text>
      <Text as="div" ref={divRef}>div</Text>
      <Text as="span" color="yellow" ref={divRef}>span</Text>
      <Text as="em">em</Text>
    </>
  );
};

export const Wrong = () => {
  return (
    <>
      <Text as="what-is-going-on">A component</Text>
      <Text as="span" href="/home">A component</Text>
    </>
  );
};
