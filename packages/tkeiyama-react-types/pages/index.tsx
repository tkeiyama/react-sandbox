import { ElementType, forwardRef, MouseEventHandler, ReactElement, useState } from "react";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "@tkeiyama/react-types";

export default function Index() {
  const [count, setCount] = useState(0)
  
  const handleCount: MouseEventHandler<HTMLButtonElement> = () => {
    setCount(props => props + 1)
  }

  return (
    <div>
      <Test backgroundColor="red">Div</Test>
      <Test onClick={handleCount} as="button" backgroundColor="blue">Button</Test>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  )
}

export type TestProps<Element extends ElementType = "div"> = PolymorphicComponentPropWithRef<Element, {
  backgroundColor?: "red" | "blue";
}>;

type TestComponent = <Element extends ElementType = "div">(
  props: TestProps<Element>,
) => ReactElement | null;

export const Test: TestComponent = forwardRef(<Element extends ElementType = "div">(
  { as, children, backgroundColor = "red", ...props }: TestProps<Element>,
  forwardedRef: PolymorphicRef<Element>,
) => {
  const Component = as ?? "div";
  return (
    <Component {...props} className="text-black dark:text-white" style={{ backgroundColor }} ref={forwardedRef}>
      {children}
    </Component>
  );
});