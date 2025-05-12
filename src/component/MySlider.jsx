import {useState} from 'react';

function MySlider() {
    const [value, setValue] = useState(128);
    const handleChange=(e) =>{
        setValue(e.target.value);
    };
    return (
      <>
          <input 
          type="range" 
          min="0" 
          max="255" 
          value={value} 
          onChange={handleChange}
        />
        <span>{value}</span>
      </>
    );
}
export default MySlider;
// Compare this snippet from src/App.jsx: