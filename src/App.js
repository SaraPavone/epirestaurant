
import './App.css';

//ricorda di aggiungere bootstrap!!!!!
import'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import Home from './components/Home';
import TableBooking from "./components/TableBooking";


function App() {
  return (
    <>
    <header>
      <CustomNavbar/>
    </header>
    <main>
<TableBooking/>
     <Home/>
    </main>
    </>
  );
}

export default App;
