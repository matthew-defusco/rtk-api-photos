import { FaTrashAlt } from "react-icons/fa";

import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleAlbumRemove = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        onClick={handleAlbumRemove}
        className="mr-3"
      >
        <FaTrashAlt className="text-red-500" />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header} className="bg-blue-100">
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
