import { RUNE_NUMBER_MAX, RUNE_NUMBER_MIN } from "./constants";
import { randomRange } from "./utils/randomRange";

export const randomRuneValue = () =>
  `${randomRange(RUNE_NUMBER_MIN, RUNE_NUMBER_MAX)}`;

export const isRuneValueValid = (value: number) =>
  !isNaN(value) && value >= RUNE_NUMBER_MIN && value <= RUNE_NUMBER_MAX;
