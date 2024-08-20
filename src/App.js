
import './App.css';

//ricorda di aggiungere bootstrap!!!!!
import'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import Home from './components/Home';

function App() {
  return (
    <>
    <header>
      <CustomNavbar/>
    </header>
    <main>
     <Home/>
    </main>
    </>
  );
}

export default App;
