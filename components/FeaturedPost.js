export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center">
        <div className="w-8/12 px-6">
          <img
            src="/assets/featured-thumbnail.png"
            alt=""
            className="rounded-xl w-full"
          />
        </div>
        <div className="w-4/12 px-4">
          <div className="flex items-center text-white/60 space-x-3">
            <div className="uppercase">ui design</div>
            <span>&bull;</span>
            <div>July, 2 2021</div>
          </div>
          <h2 className="text-2xl mt-4">
            Understanding color theory: the color wheel and finding
            complementary colors
          </h2>
          <p className="text-white/60 mt-4 w-10/12">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.{" "}
          </p>
          <div className="flex items-center mt-6">
            <img
              src="/assets/author-1.png"
              className="w-14 h-14 object-cover"
            />
            <div className="ml-4">
              <h3>Leslie Alexander</h3>
              <p className="text-white/60 text-sm">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
