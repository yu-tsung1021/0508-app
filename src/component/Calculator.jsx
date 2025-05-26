import { useState } from "react";

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
    <div style={{ border: "1px solid #ccc", padding: 16, width: 300, borderRadius: "16px" }}>
      <h2>計算機</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={expr}
          readOnly
          placeholder="請輸入算式"
          style={{ width: "220px", height: "30px", fontSize: "18px" }}
        />
      </div>
      {/* 數字與運算符號鍵盤 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "10px" }}>
        {[7,8,9,"+",4,5,6,"-",1,2,3,"*",0,".","/","C"].map(val => (
          val === "C"
            ? <button key={val} onClick={handleClear}>清除</button>
            : <button key={val} onClick={() => handleBtnClick(val.toString())}>{val}</button>
        ))}
      </div>
      <div>
        <button style={{ width: "100%" }} onClick={handleEqual}>=</button>
      </div>
      <div style={{ marginTop: "10px" }}>結果：{result !== null ? result : "—"}</div>
    </div>
  );
}