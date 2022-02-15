import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts"; // https://recharts.org/en-US/examples/TwoSimplePieChart

// put these in a separate component??

const data_macro1 = [
  { name: "Carbs", value: 40 },
  { name: "Protein", value: 25 },
  { name: "Fat", value: 15 },
];
const data_macro2 = [
  { name: "Carbs", value: 30 },
  { name: "Protein", value: 25 },
  { name: "Fat", value: 25 },
];

const data_macro3 = [
  { name: "Carbs", value: 10},
  { name: "Protein", value: 30 },
  { name: "Fat", value: 20 },
];


const HomePie = () => {

return (
  <div style={{ textAlign: "center" }}>
    {/* <h1>{macro}</h1> */}
    <div className="HomePie">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data_macro1}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#b684d8"
          label
        />
        <Tooltip />
      </PieChart>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data_macro2}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#b684d8"
          label
        />
        <Tooltip />
      </PieChart>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data_macro3}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#b684d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  </div>
);
};


function Home() {
  return (
    <div>
      <h3 className="nav-links">Welcome to Macro Recipes!</h3>
      <h3 className="heading">
        {" "}
        Please select one of the following macronutrient ratios to view recipes
      </h3>
      <div className="pie-charts">
        {HomePie()}
      </div>
      <div className="home-links">
        <Link to="/macro1">Macro 1: Bodybuilding </Link>
        <Link to="/macro2">Macro 2: Maintenance</Link>
        <Link to="/macro3">Macro 3: Fat Loss</Link>
      </div>
    </div>
  );
}

export default Home;
