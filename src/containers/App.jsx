import React, { useReducer } from "react";
import Component from "../components/App";

import { getRndType } from "../helpers/types";

const initialState = {
  sensors: [
    {
      id: 12343301,
      type: "osvesh",
      device: "4-20 IN1",
      indicator: "500 LX",
    },
    {
      id: 12343302,
      type: "dver",
      device: "SW1",
      indicator: "Закрыто",
    },
    {
      id: 12343303,
      type: "temp",
      device: "SW2",
      indicator: "+10 °С",
    },
    {
      id: 12343304,
      type: "vlashn",
      device: "SW3",
      indicator: "10%",
    },
    {
      id: 12343305,
      type: "dim",
      device: "4-20 IN2",
      indicator: "-",
    },
    {
      id: 12343306,
      type: "schetch",
      device: "RS 405",
      indicator: "-",
    },
  ],
  current: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const newObj = {
        id: state.sensors[state.sensors.length - 1].id + 1,
        type: getRndType().key,
        device: `RDF-${Math.round(Math.random() * 1000)}`,
        indicator: `${Math.round(Math.random() * 1000)} LX`,
      };

      return { ...state, sensors: [...state.sensors, newObj] };
    }
    case "SELECT":
      return { ...state, current: action.id };
    case "EDIT": {
      const editedObj = {
        ...state.sensors.find(el => el.id === action.id),
        id: Number(action.newId), // вообще странно менять idшники, ну только если у вас нет другиx idшников
        type: action.dtype,
      };

      return {
        ...state,
        sensors: [
          ...state.sensors.filter(el => el.id !== action.id),
          editedObj,
        ],
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const create = () =>
    dispatch({
      type: "CREATE",
    });

  const select = id =>
    dispatch({
      type: "SELECT",
      id,
    });

  const edit = (id, data) =>
    dispatch({
      type: "EDIT",
      id,
      newId: data.id,
      dtype: data.type,
    });

  const sensors = state.sensors;
  const current = state.current;
  const currentFull = state.current
    ? state.sensors.find(el => el.id === state.current)
    : null;

  return (
    <Component
      create={create}
      select={select}
      edit={edit}
      sensors={sensors}
      current={current}
      currentFull={currentFull}
    />
  );
};

export default App;
