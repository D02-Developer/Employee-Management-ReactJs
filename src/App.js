// Components
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Home from "./components/home";
import ListEmployee from "./components/ListEmployee";
import NavBar from "./components/NavBar";

// Extra
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListEmployee />} />
        {/* <Route path="/list" element={<ListEmployee />} /> */}
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
