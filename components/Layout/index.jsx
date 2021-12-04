import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
      <div className="h-screen">footer</div>
    </>
  );
};

export default Layout;
