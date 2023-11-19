import { counterReducer, counterActions } from "./counterSlice";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/counterSchema";

describe('counterSlise.test', () => {
  test('', () => {
    const stste: CounterSchema = {value: 10};
    expect(counterReducer(stste, counterActions.decrement())).toEqual({value: 9}) 
  });
});