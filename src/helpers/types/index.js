import * as imgs from "../../img";

export const typeData = [
  {
    key: "osvesh",
    title: "Освещенность",
    selectorTitle: "Датчик освещённости",
    icon: imgs.lux,
  },
  {
    key: "dver",
    title: "Дверь",
    selectorTitle: "Датчик двери",
    icon: imgs.gromFolder,
  },
  {
    key: "temp",
    title: "Температура",
    selectorTitle: "Датчик температуры",
    icon: imgs.temperature,
  },
  {
    key: "vlashn",
    title: "Влажность",
    selectorTitle: "Датчик влажности",
    icon: imgs.vlashnost,
  },
  {
    key: "dim",
    title: "Дым",
    selectorTitle: "Датчик дыма",
    icon: imgs.dim,
  },
  {
    key: "schetch",
    title: "Счётчик",
    selectorTitle: "Счётчик",
    icon: imgs.molniya,
  },
];

export const getRndType = () =>
  typeData[Math.floor(Math.random() * typeData.length)];

export const getTypeData = key => typeData.find(el => el.key === key);
