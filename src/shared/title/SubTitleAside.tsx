import React from "react";
interface ISubTitleAside {
  title: string;
}
const SubTitleAside = ({ title }: ISubTitleAside) => {
  return (
    <>
      <h3>{title}</h3>
    </>
  );
};
export default SubTitleAside;
