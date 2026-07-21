"use client";

import { useMemo, useState } from "react";

type FinanceItem = {
  amount: number | null;
  source: string;
};

const createItems = (count: number): FinanceItem[] =>
  Array.from({ length: count }, () => ({
    amount: null,
    source: "",
  }));

export default function FinanceReport() {
  const [incomes, setIncomes] = useState<FinanceItem[]>(createItems(6));
  const [expenses, setExpenses] = useState<FinanceItem[]>(createItems(6));

  const totalIncome = useMemo(() => {
    const amounts = incomes
      .map((item) => item.amount)
      .filter((amount): amount is number => amount !== null);

    if (!amounts.length) return null;

    return amounts.reduce((sum, amount) => sum + amount, 0);
  }, [incomes]);

  const totalExpense = useMemo(() => {
    const amounts = expenses
      .map((item) => item.amount)
      .filter((amount): amount is number => amount !== null);

    if (!amounts.length) return null;

    return amounts.reduce((sum, amount) => sum + amount, 0);
  }, [expenses]);

  const updateIncome = (
    index: number,
    field: keyof FinanceItem,
    value: string | number | null,
  ) => {
    setIncomes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  const updateExpense = (
    index: number,
    field: keyof FinanceItem,
    value: string | number | null,
  ) => {
    setExpenses((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  const addIncomeField = () => {
    setIncomes((prev) => [...prev, { amount: null, source: "" }]);
  };

  const addExpenseField = () => {
    setExpenses((prev) => [...prev, { amount: null, source: "" }]);
  };

  const formatMoney = (value: number | null) => {
    if (value === null) return "";

    return new Intl.NumberFormat("ru-RU").format(value);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 mb-5 transition-colors">
      <h1 className="text-2xl font-semibold text-center mb-5 text-zinc-900 dark:text-zinc-100">
        Қаржы есебі
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Доходы */}
        <div>
          <div className="flex gap-5 mb-10">
            <div className="basis-1/3">
              <h3 className="mb-1 text-zinc-800 dark:text-zinc-200">
                Табыстар:
              </h3>

              {incomes.map((income, index) => (
                <input
                  key={index}
                  type="number"
                  min={0}
                  value={income.amount ?? ""}
                  onChange={(e) =>
                    updateIncome(
                      index,
                      "amount",
                      e.target.value === "" ? null : Number(e.target.value),
                    )
                  }
                  className="w-full border-b bg-transparent outline-none no-spinner
                  border-zinc-300 dark:border-zinc-700
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400
                  focus:border-black dark:focus:border-zinc-300
                  transition-colors"
                />
              ))}

              <button
                onClick={addIncomeField}
                className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:opacity-70 transition"
              >
                + Қосу
              </button>
            </div>

            <div className="basis-2/3">
              <h3 className="mb-1 text-zinc-800 dark:text-zinc-200">
                Қайдан келді:
              </h3>

              {incomes.map((income, index) => (
                <input
                  key={index}
                  type="text"
                  value={income.source}
                  onChange={(e) =>
                    updateIncome(index, "source", e.target.value)
                  }
                  className="w-full border-b bg-transparent outline-none
                  border-zinc-300 dark:border-zinc-700
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400
                  focus:border-black dark:focus:border-zinc-300
                  transition-colors"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end items-center gap-2 text-zinc-900 dark:text-zinc-100">
            Күндік жалпы табыс =
            <span className="border-b border-zinc-300 dark:border-zinc-700 inline-block min-w-40">
              {totalIncome !== null ? `${formatMoney(totalIncome)} ₸` : ""}
            </span>
          </div>
        </div>

        {/* Расходы */}
        <div>
          <div className="mb-10">
            <div className="flex gap-5">
              <div className="basis-1/3">
                <h3 className="mb-1 text-zinc-800 dark:text-zinc-200">
                  Шығындар:
                </h3>

                {expenses.map((expense, index) => (
                  <input
                    key={index}
                    type="number"
                    min={0}
                    value={expense.amount ?? ""}
                    onChange={(e) =>
                      updateExpense(
                        index,
                        "amount",
                        e.target.value === "" ? null : Number(e.target.value),
                      )
                    }
                    className="w-full border-b bg-transparent outline-none no-spinner
                    border-zinc-300 dark:border-zinc-700
                    text-zinc-900 dark:text-zinc-100
                    placeholder:text-zinc-400
                    focus:border-black dark:focus:border-zinc-300
                    transition-colors"
                  />
                ))}

                <button
                  onClick={addExpenseField}
                  className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:opacity-70 transition"
                >
                  + Қосу
                </button>
              </div>

              <div className="basis-2/3">
                <h3 className="mb-1 text-zinc-800 dark:text-zinc-200">
                  Қайда кетті:
                </h3>

                {expenses.map((expense, index) => (
                  <input
                    key={index}
                    type="text"
                    value={expense.source}
                    onChange={(e) =>
                      updateExpense(index, "source", e.target.value)
                    }
                    className="w-full border-b bg-transparent outline-none
                    border-zinc-300 dark:border-zinc-700
                    text-zinc-900 dark:text-zinc-100
                    placeholder:text-zinc-400
                    focus:border-black dark:focus:border-zinc-300
                    transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-2 text-zinc-900 dark:text-zinc-100">
            Күндік жалпы шығын =
            <span className="border-b border-zinc-300 dark:border-zinc-700 inline-block min-w-40">
              {totalExpense !== null ? `${formatMoney(totalExpense)} ₸` : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
