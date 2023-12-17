import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";

const store = configureStore({
  reducer: { users: usersReducer },
});

export { store, fetchUsers };
