import React from "react";

export default function HistoryItem({ history, disable, handleRestore }) {
  return (
    history.length !== 0 ? (<div className="historyList">
    {history.map((item) => (
      <div className="singleHistory" key={item.id}>
        <p className="historyResult">
          Operation: {item.input.a} {item.operation} {item.input.b}, Result ={" "}
          {item.result}
        </p>
        <p className="createAt">{item.creatAt}</p>
        <button
        className="restorBtn"
          disabled={disable !== null && disable === item.id ? true : false}
          onClick={() => handleRestore(item.id)}
        >
          Restore
        </button>
      </div>
    ))}
  </div>) : (<div className="notData">
    <p>No History</p>
  </div>)
  );
}

