"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Montserrat } from "next/font/google";

import ExpensesForm from "@/app/ExpensesForm";
import PercentageGraphic from "@/app/PercentageGraphic";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export type Expense = {
  id: string;
  concept: string;
  amount: number;
};

export type Expenses = {
  income: number;
  expenses: Expense[];
};

const Home = () => {
  const [expenses, setExpenses] = useState<Expenses>({
    income: 30000,
    expenses: [
      { id: uuid(), concept: "Food", amount: 6000 },
      { id: uuid(), concept: "Housing", amount: 4000 },
    ],
  });

  return (
    <main
      className={`flex flex-col justify-center w-full h-full ${montserrat.variable}`}
    >
      <div className="mx-auto">
        <div className="mb-5">
          <p className="text-6xl mb-2">Gain Financial Insight</p>

          <em>
            Visualize the Percentage Breakdown of Your Income and Expenses
          </em>
        </div>

        <div className="grid grid-cols-12 text-lg">
          <div className="col-span-6 border-r-2 border-purplish">
            <ExpensesForm expenses={expenses} setExpenses={setExpenses} />
          </div>

          <div className="col-span-6 ml-2">
            <PercentageGraphic expenses={expenses} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
