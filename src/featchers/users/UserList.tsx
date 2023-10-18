import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { User } from "../../types/app";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/Store";

const UserList = () => {
  const users = useAppSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {users?.data.map((user: User) => (
        <h1 key={user.id}>{user.username}</h1>
      ))}
    </div>
  );
};

export default UserList;
