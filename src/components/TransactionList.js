import React, { useContext } from "react";

import Transaction from "./Transaction";

import { GlobalContext } from "../Context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.length === 0 ? (
          <h6>No History Found</h6>
        ) : (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
