import Navbar from "./component/navbar/Navbar";
import ProductPhoto from "./component/product photo/ProductPhoto";
import ProductInfo from "./component/product info/ProductInfo";
import Cart from "./component/cart/Cart";
import ShowProduct from "./component/showZoomProduct/ShowProduct";
import './App.css'
import { useState , useEffect } from "react";
import ShoppingCartProvider from "./context/ShoppingCartProvider"
import SideMenu from "./component/sideMenu/SideMenu";


function App() {
  const [showPhoto , setShowPhoto] = useState(false);
  const [toggeleCart , setToggeleCart] = useState(false);
  const [toggeleMenu , setToggeleMenu] = useState(false)

  useEffect(() => {
    fixBody();
  }, [showPhoto , toggeleMenu]);

  const fixBody = () => {
    if (showPhoto || toggeleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="App" >
      { toggeleMenu ? <SideMenu onClose={() => { fixBody(); setToggeleMenu(!toggeleMenu)}} /> : null}
      <ShoppingCartProvider>
          <Navbar onToggele={() => { setToggeleCart(!toggeleCart) }} onOpen={() => {setToggeleMenu(!toggeleMenu)}} />
          { toggeleCart ? <Cart /> : null}
          <div className="app_main-content-container">
            <ProductPhoto onshow={() => {fixBody(); setShowPhoto(!showPhoto)}}/>
            <ProductInfo/>
          </div>

          {showPhoto ? <ShowProduct onshow={() => {setShowPhoto(!showPhoto)}} /> : null}
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
