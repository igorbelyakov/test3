export const typeData = [
  {
    key: "osvesh",
    title: "Освещенность",
    selectorTitle: "Датчик освещённости",
    icon: "",
  },
  {
    key: "dver",
    title: "Дверь",
    selectorTitle: "Датчик двери",
    icon: "",
  },
  {
    key: "temp",
    title: "Температура",
    selectorTitle: "Датчик температуры",
    icon: "",
  },
  {
    key: "vlashn",
    title: "Влажность",
    selectorTitle: "Датчик влажности",
    icon: "",
  },
  {
    key: "dim",
    title: "Дым",
    selectorTitle: "Датчик дыма",
    icon: "",
  },
  {
    key: "schetch",
    title: "Счётчик",
    selectorTitle: "Счётчик",
    icon: "",
  },
];

export const getRndType = () =>
  typeData[Math.floor(Math.random() * typeData.length)];

export const getTypeData = key => typeData.find(el => el.key === key);
