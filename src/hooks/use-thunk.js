import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useThunk = thunk => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    thunkArgs => {
      setIsLoading(true);
      dispatch(thunk(thunkArgs))
        .unwrap()
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
