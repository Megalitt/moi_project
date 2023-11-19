import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { StateSchema } from "app/providers/StoreProvider";

describe('getCounter', () => {
  test('return counter', () => {
    const stste: DeepPartial<StateSchema> = {
      counter: {value: 10},
    }
    expect(getCounter(stste as StateSchema)).toEqual({value: 10})
  })
});
