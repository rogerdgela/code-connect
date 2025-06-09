import { CardPost } from "@/components/CardPost";


async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    console.log("Algo deu errado ao buscar os posts");
  }

  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
