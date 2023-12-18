import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <div>
        <Skeleton times={1} className="h-8 w-10" />
        <Skeleton times={2} className="h-8 w-5" />
      </div>
    );
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div className="bg-gray-300 p-2 rounded">
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row mx-8 flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
