import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    logger.error("Algo deu errado ao buscar os posts");
    return [];
  }

  logger.info("Posts obstidos com sucesso");

  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
