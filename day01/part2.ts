import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString().split("\n").map(Number);

export const part2 = (
  input: number[],
  currentIndex: number,
  count: number
): number => {
  if (currentIndex === 0) return part2(input, currentIndex + 1, count);

  if (currentIndex === input.length) return count;

  const prevValue = input[currentIndex - 1] + input[currentIndex] + input[currentIndex + 1]
  const currentValue = input[currentIndex] + input[currentIndex + 1] + input[currentIndex + 2]
  const hasIncreased = currentValue > prevValue;

  return part2(input, currentIndex + 1, hasIncreased ? count + 1 : count);
};

console.log(part2(input, 0, 0));