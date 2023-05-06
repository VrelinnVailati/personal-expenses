import { Dispatch, FC, SetStateAction } from "react";
import { FieldArray, Form, Formik } from "formik";
import { v4 as uuid } from "uuid";

import { Expenses } from "@/app/page";

type ExpensesFormProps = {
  expenses: Expenses;
  setExpenses: Dispatch<SetStateAction<Expenses>>;
};

const ExpensesForm: FC<ExpensesFormProps> = ({ expenses, setExpenses }) => {
  return (
    <Formik
      initialValues={expenses}
      onSubmit={(values) => {
        setExpenses(values);
      }}
    >
      {({ values, submitForm, handleChange }) => (
        <Form>
          <div>
            <label htmlFor="income">Income</label> $
            <input
              type="number"
              className="text-black rounded ml-2 w-80"
              id="income"
              name="income"
              value={values.income}
              onChange={handleChange}
              onBlur={() => {
                void submitForm();
              }}
            />
          </div>

          <hr className="my-5 mx-auto w-8/12 border-purplish" />

          <div className="flex flex-col">
            <FieldArray
              name="expenses"
              render={(arrayHelpers) => (
                <>
                  <button
                    className="bg-green-500 mx-auto w-12 rounded mb-5"
                    onClick={() =>
                      arrayHelpers.insert(values.expenses.length, {
                        id: uuid(),
                        concept: "",
                        amount: "",
                      })
                    }
                  >
                    +
                  </button>

                  {values.expenses && values.expenses.length > 0
                    ? values.expenses.map((expense, index) => (
                        <div className="mb-2" key={expense.id}>
                          <input
                            className="text-black rounded ml-0.5 mr-4 w-3/12"
                            name={`expenses[${index}].concept`}
                            onChange={handleChange(
                              `expenses[${index}].concept`
                            )}
                            value={expense.concept}
                            onBlur={() => {
                              void submitForm();
                            }}
                          />
                          ${" "}
                          <input
                            type="number"
                            className="text-black rounded ml-0.5"
                            name={`expenses[${index}].amount`}
                            onChange={handleChange}
                            value={expense.amount}
                            onBlur={() => {
                              void submitForm();
                            }}
                          />
                          <button
                            type="button"
                            className="bg-reddish px-2 ml-2 rounded-md"
                            onClick={() => {
                              arrayHelpers.remove(index);
                              void submitForm();
                            }}
                          >
                            -
                          </button>
                        </div>
                      ))
                    : null}
                </>
              )}
            />
          </div>

          {/**/}
        </Form>
      )}
    </Formik>
  );
};

export default ExpensesForm;
