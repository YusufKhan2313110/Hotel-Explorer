function ImageGallery({ photos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {photos.map((photo, index) => (

        <img
          key={index}
          src={photo}
          alt=""
          className="rounded-xl h-64 w-full object-cover hover:scale-105 transition duration-300"
        />

      ))}

    </div>
  );
}

export default ImageGallery;