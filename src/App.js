
import './App.css';

//ricorda di aggiungere bootstrap!!!!!
import'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import Home from './components/Home';
import TableBooking from "./components/TableBooking";
import BookingList from "./components/BookingList";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
    <header>
      <CustomNavbar/>
    </header>
    <main>
    <BookingList/>
    <TableBooking/>
     <Home/>
    </main>
    </>
  );
}

export default App;


// se voglio mettere uno spinner a tutta la pagina 

//function App() {
//  return (
//  isLoading?(
//    <Spinner animation="border" variant="primary" />
//  ):(
//    <>
//    <header>
//      <CustomNavbar/>
//    </header>
//    <main>
//    <BookingList/>
//    <TableBooking/>
//     <Home/>
//    </main>
//    </>
//  );
//}