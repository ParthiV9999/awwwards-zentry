function ImageClipBox({ src, clipClass }) {
  return (
    <div className={clipClass}>
      <img src={src} alt="clip-img" className="object-cover bg-no-repeat" />
    </div>
  );
}

export default ImageClipBox;
