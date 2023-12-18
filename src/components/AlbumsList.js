import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isFetching) {
    content = (
      <div>
        <Skeleton times={2} className="h-10 w-full" />
        <Skeleton times={1} className="h-10 w-4/5" />
        <Skeleton times={1} className="h-10 w-3/5" />
      </div>
    );
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
