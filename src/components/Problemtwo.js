import React from "react"
import { useState } from "react"


const Problemtwo = ({getColor}) =>{
const [activecolor, setActivecolor] = useState();
const handleChange = (e) =>{
    const {value} = e.target;
    setActivecolor(value);
    getColor(value);
};
    return(
        <input type="text" id="input" aria-label="input" 
        onChange={handleChange}
        value={activecolor}
        />
    );
};
export default Problemtwo;
