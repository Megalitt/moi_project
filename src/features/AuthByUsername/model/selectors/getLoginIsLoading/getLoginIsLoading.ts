import { StateSchema } from "app/providers/StoreProvider";


export const getLoginIsLoadind = (state: StateSchema) => state?.loginForm?.isLoading || false;