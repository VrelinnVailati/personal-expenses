import React, {FC} from "react";
import {Pie, PieChart, ResponsiveContainer} from "recharts";

import {Expenses} from "@/app/page";

type PercentageGraphicProps = {
  expenses: Expenses;
};

const PercentageGraphic: FC<PercentageGraphicProps> = ({expenses: {income, expenses}}) => {
  const pieData = expenses.map(({amount, concept}) => {
    const percentage = Math.floor((amount / income * 100));

    return {value: percentage, name: concept}
  });

  return (
    <>
      <ResponsiveContainer height="100%">
        <PieChart width={400} height={100} margin={{top: 5, right: 5, bottom: 5, left: 5}}>
          <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#7DCFB6" />
        </PieChart>
      </ResponsiveContainer>

      {/*expenses.map(({ concept, amount }) => {
        const percentage = Math.floor((amount / income) * 100);

        return (
          <p key={concept}>
            {`${concept.charAt(0).toUpperCase() + concept.slice(1)}:`}{" "}
            <span
              className={
                percentage >= 50
                  ? "text-reddish"
                  : percentage >= 30
                  ? "text-yellow-400"
                  : "text-green-500"
              }
            >
              ${`${amount} => ${percentage}%`}
            </span>
          </p>
        );
      })*/}
    </>
  );
};

export default PercentageGraphic;
