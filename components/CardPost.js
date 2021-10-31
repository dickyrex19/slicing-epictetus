import InfoPost from "@components/InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={`/assets/${thumbnail}`} className="w-full rounded-lg mb-4" />
      <InfoPost {...infoPost} />
    </article>
  );
}
