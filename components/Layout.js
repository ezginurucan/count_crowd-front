import Navbar from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-200 content">
      
      { children }
      
    </div>
  );
}
 
export default Layout;