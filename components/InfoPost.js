export default function InfoPost({
  category,
  date,
  title,
  shortDesc,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-3">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className="text-2xl mt-4">{title}</h2>
      <p className="text-white/60 mt-4 w-10/12">{shortDesc}</p>
      <div className="flex items-center mt-5">
        <img
          src={`/assets/${authorAvatar}`}
          className="w-14 h-14 object-cover"
        />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <p className="text-white/60 text-sm mt-1">{authorJob}</p>
        </div>
      </div>
    </>
  );
}
