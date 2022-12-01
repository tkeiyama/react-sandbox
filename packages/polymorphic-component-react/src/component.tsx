export const MyComponent = ({ as, children }: any) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};
