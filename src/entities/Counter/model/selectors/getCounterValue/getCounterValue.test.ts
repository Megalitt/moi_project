import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

describe('getCounterValue.test', () => {
  test('', () => {
    const stste: DeepPartial<StateSchema> = {
      counter: {value: 10},
    }
    expect(getCounterValue(stste as StateSchema)).toEqual(10) 
  });
});