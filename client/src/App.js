import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ViewBooks />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/updatebook" element={<UpdateBook/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
