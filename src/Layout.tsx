import { Component, JSX } from "solid-js";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  return (
    <div>
      <header>Header</header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
