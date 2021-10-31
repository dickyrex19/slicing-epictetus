export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center mt-5">
      <img src={`/assets/${authorAvatar}`} className="w-14 h-14 object-cover" />
      <div className="ml-4">
        <h3>{authorName}</h3>
        <p className="text-white/60 text-sm mt-1">{authorJob}</p>
      </div>
    </div>
  );
}
