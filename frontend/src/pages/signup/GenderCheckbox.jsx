import React, { useState } from "react";

const GenderCheckbox = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleCheckboxChange = (gender) => {
    if (selectedGender === gender) {
      setSelectedGender(null);
    } else {
      setSelectedGender(gender);
    }
  };

  return (
    <div className="flex p-1">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "text-blue-600" : ""
          }`}
          onClick={() => handleCheckboxChange("male")}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-400"
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "text-blue-600" : ""
          }`}
          onClick={() => handleCheckboxChange("female")}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-400"
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "others" ? "text-blue-600" : ""
          }`}
          onClick={() => handleCheckboxChange("others")}
        >
          <span className="label-text">Others</span>
          <input
            type="checkbox"
            className="checkbox border-slate-400"
            checked={selectedGender === "others"}
            onChange={() => handleCheckboxChange("others")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
