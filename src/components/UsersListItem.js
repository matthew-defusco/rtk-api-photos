import { FaTrashAlt } from "react-icons/fa";

import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsList from "./AlbumsList";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleUserRemove} className="mr-3">
        <FaTrashAlt className="text-red-500" />
      </Button>
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
