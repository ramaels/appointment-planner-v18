import React from "react";
import {Tile} from "../tile/Tile";
export const TileList = ({ arrObjects }) => {
  return (
    <div>
      {arrObjects.map(obj => {
        const { name, ...rest } = obj;
        return <Tile name={name} description={Object.values(rest)} />
      })}
    </div>
  );
};
