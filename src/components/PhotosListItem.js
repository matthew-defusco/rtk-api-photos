import { FaTrashAlt } from "react-icons/fa";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative m-2 cursor-pointer" j onClick={handleRemovePhoto}>
      <img src={photo.url} className="h-30 w-30" alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <FaTrashAlt className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
