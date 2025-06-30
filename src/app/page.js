import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error("Algo deu errado ao buscar os posts");
    return [];
  }

  logger.info("Posts obstidos com sucesso");

  return response.json();
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      <div className={styles.pagination}>
        {prev && <Link href={`?page=${prev}`} className={styles.pageLink}>Página Anterior</Link>}
        {next && <Link href={`?page=${next}`} className={styles.pageLink}>Próxima Página</Link>}
      </div>
    </main>
  );
}
