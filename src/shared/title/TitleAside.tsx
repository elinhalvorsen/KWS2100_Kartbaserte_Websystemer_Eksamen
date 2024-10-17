import React from "react";
interface ITitleAside {
  title: string;
}
const TitleAside = ({ title }: ITitleAside) => {
  return (
    <>
      <h2 className="text-center mt-2">{title}</h2>
    </>
  );
};
export default TitleAside;
