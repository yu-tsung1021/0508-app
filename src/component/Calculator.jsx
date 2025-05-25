import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, width: 300 ,borderRadius: "16px",
}}>
      <h2>計算機</h2>
      <input
        type="number"
        value={a}
        onChange={e => setA(e.target.value)}
        placeholder="數字A"
        style={{ width: "100px", marginRight: "10px" ,height: "30px"}}
      />
      <input
        type="number"
        value={b}
        onChange={e => setB(e.target.value)}
        placeholder="數字B"
        style={{ width: "100px", height: "30px" }}
      />
      <div style={{ margin: "15px 0" }}>
        <button onClick={() => setResult(Number(a) + Number(b))}>＋</button>
        <button onClick={() => setResult(Number(a) - Number(b))}>－</button>
        <button onClick={() => setResult(Number(a) * Number(b))}>×</button>
        <button onClick={() => setResult(Number(a) / Number(b))}>÷</button>
      </div>
      <div>結果：{result !== null ? result : "—"}</div>
    </div>
  );
}