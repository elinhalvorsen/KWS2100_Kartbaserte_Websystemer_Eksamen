import React from "react";
interface IToogleCheckbox {
  title: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lableOn: string;
  lableOff: string;
}

const ToogleCheckbox = ({
  lableOn,
  lableOff,
  title,
  isChecked,
  onChange,
}: IToogleCheckbox) => {
  return (
    <>
      <div className="form-check form-switch bg-white">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={onChange}
        />
        {isChecked ? lableOff : lableOn}
        <label className="form-check-label">{title}</label>
      </div>
    </>
  );
};
export default ToogleCheckbox;
