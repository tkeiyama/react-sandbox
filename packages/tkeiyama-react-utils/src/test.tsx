import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "@tkeiyama/react-utils";
import { ElementType, forwardRef, ReactElement } from "react";

export type TestProps<Element extends ElementType = "div"> =
  PolymorphicComponentPropWithRef<Element, {
    backgroundColor?: "red" | "blue";
  }>;

type TestComponent = <Element extends ElementType = "div">(
  props: TestProps<Element>,
) => ReactElement | null;

export const Test: TestComponent = forwardRef(
  <Element extends ElementType = "div">(
    { as, children, backgroundColor = "red", ...props }: TestProps<Element>,
    forwardedRef: PolymorphicRef<Element>,
  ) => {
    const Component = as ?? "div";
    return (
      <Component {...props} style={{ backgroundColor }} ref={forwardedRef}>
        {children}
      </Component>
    );
  },
);