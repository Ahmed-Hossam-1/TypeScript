type Props = {
  children: /* JSX.Element  OR  React.ReactNode*/ React.ReactNode;
};

function Layout(props: Props) {
  return (
    <div>
      <h1>Wellcome Layout</h1>
      {props.children}
    </div>
  );
}

export default Layout;
