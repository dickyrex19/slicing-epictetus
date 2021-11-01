import InfoPost from "@components/InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 w-full px-4">
          <img
            src="/assets/featured-thumbnail.png"
            className="rounded-xl w-full mb-4 md:mb-0"
          />
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="ui design"
            date="July 2 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDesc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
