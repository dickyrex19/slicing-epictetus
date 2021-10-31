import { useState } from "react";
import Container from "@components/Container";
import Layout from "@components/Layout";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import mockPosts from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 mt-8 flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
