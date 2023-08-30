import { useState } from "react";

const Checkbox = ({label, isChecked, onChange}) => {
    return (
        <div className="checkbox-cont">
            {/* {console.log(isChecked)} */}
            <div className={isChecked ? "done": "checkbox-wrapper" }>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange} 
                    />
                    <span>{label}</span>
            </div>
        </div>
    );
};
export default Checkbox; 