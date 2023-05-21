import NavBar from "../components/NavBar";

const RootLayout = ({ children }) => {
  return (
    <div className="pos-rel no-overflow-x flex" style={{'height': '100%', 'flexDirection': 'column'}}>
      <header>
        <NavBar />
      </header>
      {children}
    </div>
  );
};

export default RootLayout;
