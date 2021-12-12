import React from "react";
import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import AddExpense from "./pages/addExpense";
import Home from "./pages/home/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element ={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
