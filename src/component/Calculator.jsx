import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [expr, setExpr] = useState(""); // 儲存算式
  const [result, setResult] = useState(null);

  // 處理數字與運算符號按鈕
  const handleBtnClick = (val) => {
    setExpr(expr + val);
  };

  // 清除
  const handleClear = () => {
    setExpr("");
    setResult(null);
  };

  // 計算
  const handleEqual = () => {
    try {
      // 用 eval 計算（僅限簡單用途，實務請用更安全的解析器）
      // eslint-disable-next-line no-eval
      const res = eval(expr);
      setResult(res);
      setExpr(res.toString()); // 更新輸入框為結果
    } catch {
      setResult("錯誤");
      setExpr(""); // 清除輸入框
    }
  };

  return (
    <div className="Calculator">
      <h2 className="Calculator-title">計算機</h2>
      <div className="Calculator-input-wrap">
        <input
          type="text"
          value={expr}
          readOnly
          placeholder="請輸入算式"
          className="Calculator-input"
        />
      </div>
      {/* 數字與運算符號鍵盤 */}
      <div className="Calculator-keyboard">
        {[7,8,9,"+",4,5,6,"-",1,2,3,"*",0,".","/","C"].map(val => (
          val === "C"
            ? <button key={val} className="Calculator-btn Calculator-btn-clear" onClick={handleClear}>清除</button>
            : <button key={val} className="Calculator-btn" onClick={() => handleBtnClick(val.toString())}>{val}</button>
        ))}
      </div>
      <div>
        <button className="Calculator-btn-equal" onClick={handleEqual}>=</button>
      </div>
      <div className="Calculator-result">結果：{result !== null ? result : "—"}</div>
    </div>
  );
}