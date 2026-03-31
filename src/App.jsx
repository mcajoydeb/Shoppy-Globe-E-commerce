import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-[1280px] mx-auto px-4 flex">
        
        <div className="flex-grow">
          <Outlet />
        </div>
       
      </div>
       <Footer />
    </div>
  );
}

export default App;