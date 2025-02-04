import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-100">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900  bg-slate-300"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-100">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 bg-slate-300"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
      <div></div>
    </div>
  );
};

export default GenderCheckBox;
