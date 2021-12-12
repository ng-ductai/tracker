import React from "react";
import ExpenseList from "../../components/list";
import TopFold from "../../components/top-fold";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
