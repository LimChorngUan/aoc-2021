import { readFileSync } from "fs";

type Direction = "forward" | "down" | "up";
type Command = [Direction, number];
interface Coordinate {
  x: number;
  y: number;
}

const input = readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((x) => {
    let command: Command;

    const arr = x.split(" ");
    command = [arr[0] as Direction, Number(arr[1])];

    return command;
  });

const part1 = (commands: Array<Command>): number => {
  const initCoordinate: Coordinate = {
    x: 0,
    y: 0,
  };

  const finalCoordinate: Coordinate = commands.reduce(
    (acc: Coordinate, cur: Command) => {
      const [direction, value] = cur;

      switch (direction) {
        case "forward":
          return {
            x: acc.x + value,
            y: acc.y,
          };

        case "down":
          return {
            x: acc.x,
            y: acc.y + value,
          };

        case "up":
          return {
            x: acc.x,
            y: acc.y - value,
          };
      }
    },
    initCoordinate
  );

  return finalCoordinate.x * finalCoordinate.y;
};

console.log(part1(input));
