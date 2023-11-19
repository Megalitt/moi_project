import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig} from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

interface LoginByUsernameProps {
  username: string;
  password: string;
}


export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {

    const {extra, rejectWithValue} = thunkApi;
      try {
          const response = await extra.api.get<Profile>(`/profile/${profileId}`);
          // throw new Error();
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue('Вы ввели не верный логин или пароль');
      }
  },
);