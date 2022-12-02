import React, { useEffect, useState } from "react";
import "./App.css";
import HistoryItem from "./Components/history/HistoryItem";
import InputSection from "./Components/input/InputSection";
import Operations from "./Components/operations/Operations";

const initialInputState = {
  a: 0,
  b: 0,
};

function* getId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
let genarateId = getId();

export default function App() {
  const [state, setState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [disable, setDisable] = useState(false);
  const [disableArth, setDisableArth] = useState(true);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  useEffect(() => {
    if ((state.a > 0 || state.a < 0) && !isNaN(state.b)) {
      setDisableArth(false);
    } else if ((state.b > 0 || state.b < 0) && !isNaN(state.a)) {
      setDisableArth(false);
    } else {
      setDisableArth(true);
    }
  }, [state]);

  // clear ui
  const handleClearOps = () => {
    setState({ ...initialInputState });
    setResult(0);
    setDisable(null);
    setHistory([]);
    setTotal(0)
  };

  const handleArithmeticOps = (operation) => {
    const res = eval(`${state.a} ${operation} ${state.b}`);
    if ((state.a > 0 || state.a < 0) && !isNaN(state.b)) {
      setResult(res);
      let historyData = {
        id: genarateId.next().value,
        input: { ...state },
        creatAt: new Date().toISOString(),
        operation: operation,
        result: res,
      };
      setHistory([...history, historyData]);
      setTotal(total+res)
    } else if ((state.b > 0 || state.b < 0) && !isNaN(state.a)) {
      setResult(res);
      let historyData = {
        id: genarateId.next().value,
        input: { ...state },
        creatAt: new Date().toISOString(),
        operation: operation,
        result: res,
      };
      setTotal(total+res)
      setHistory([...history, historyData]);
    }
  };

  const handleRestore = (id) => {
    let find = history.find((item) => item.id === id);
    setState({
      ...find.input,
    });
    setDisable(id);
  };

  return (
    <div className="app">
      <div className="calcResult">
        <h1 className="result">
          Result: <span className="res">{result}</span>
        </h1>
        <h1 className="result">
          Total: <span className="res">{total}</span>
        </h1>
      </div>
      <div className="input">
        <p>Input: </p>
        <InputSection handleInputChange={handleInputChange} state={state} />
      </div>
      <div className="operation">
        <h3>Operation: </h3>
        <Operations
          handleClearOps={handleClearOps}
          handleArithmeticOps={handleArithmeticOps}
          disableArth={disableArth}
        />
      </div>
      <br />
      <br />
      <div className="history">
        <HistoryItem
          history={history}
          disable={disable}
          handleRestore={handleRestore}
        />
      </div>
    </div>
  );
}
