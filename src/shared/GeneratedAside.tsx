import React from "react";

interface IGeneratedAside {
  title: string;
  content: { [key: string]: string };
}

const GeneratedAside = ({ title, content }: IGeneratedAside) => {
  return (
    <aside id="generated-aside" className="rounded-3 p-2 mt-5">
      <h2>{title}</h2>
      <hr />
      <div className="text-start">
        {Object.keys(content).map((key) => (
          <p key={key}>
            <b>{key}:</b> {content[key]}
          </p>
        ))}
      </div>
    </aside>
  );
};

export default GeneratedAside;
