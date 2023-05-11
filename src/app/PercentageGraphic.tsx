import React, { FC } from "react";
import { VictoryPie } from "victory";

import { Expenses } from "@/app/page";
import PieChartLabel from "@/app/PieChartLabel";

const REMAINING_TEXT = "Remaining";

type PercentageGraphicProps = {
  expenses: Expenses;
};

const PercentageGraphic: FC<PercentageGraphicProps> = ({
  expenses: { income, expenses },
}) => {
  let totalSum = 0;

  const pieData = expenses.map(({ amount, concept }) => {
    const percentage = Math.floor((amount / income) * 100);

    totalSum += percentage;

    return { y: percentage, x: concept };
  });

  pieData.push({ y: 100 - totalSum, x: REMAINING_TEXT });

  const elementIsRemaining = (label: string) => {
    return label === REMAINING_TEXT;
  };

  return (
    <>
      <VictoryPie
        width={500}
        style={{
          data: {
            fill: ({ datum }) => {
              if (elementIsRemaining(datum.x)) {
                return "blue";
              }

              if (datum.y > 50) return "red";

              if (datum.y > 30) return "yellow";

              return "green";
            },
            stroke: "#000",
            strokeWidth: 2,
          },
          labels: {
            fill: "white",
            fontSize: 20,
          },
        }}
        innerRadius={({ datum }) => (elementIsRemaining(datum.x) ? 115 : 100)}
        radius={({ datum }) => (elementIsRemaining(datum.x) ? 165 : 150)}
        data={pieData}
        labels={({ datum }) => `${datum.x}`}
        labelComponent={<PieChartLabel />}
        animate={{
          duration: 200,
        }}
      />
    </>
  );
};

export default PercentageGraphic;
