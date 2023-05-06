import exp from "constants";

import React, { FC } from "react";

import { Expenses } from "@/app/page";

type PercentageGraphicProps = {
  expenses: Expenses;
};

const PercentageGraphic: FC<PercentageGraphicProps> = ({
  expenses: { income, expenses },
}) => {
  return (
    <>
      {expenses.map(({ concept, amount }) => {
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
      })}
    </>
  );
};

export default PercentageGraphic;
