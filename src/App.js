
import './App.css';
import {Header} from "./Components/Header"
import Home from "./Components/Home";
import {Route,Routes} from "react-router-dom";
import Cart from "./Components/Cart";
function App() {

  return (
    <div className="App">
        <Header />
        {/*Route is a make a one page for Home */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
