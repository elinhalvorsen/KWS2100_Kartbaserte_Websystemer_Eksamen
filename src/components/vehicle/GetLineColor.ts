const getLineColor = (id: string): string => {
  switch (id) {
    case "VYB":
      return "red";
    case "VYX":
      return "red";
    case "OST":
      return "red";

    case "NSB":
      return "green";
    default:
      return "black";
  }
};

export default getLineColor;
