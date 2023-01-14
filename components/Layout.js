import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-200 content">
      { children }
      <Footer/>
    </div>
  );
}
 
export default Layout;