import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);

  return "UsersList";
};

export default UsersList;
