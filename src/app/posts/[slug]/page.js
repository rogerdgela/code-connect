import logger from "@/logger";

async function getPostBySlug(slug) {
  const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
  if (!response.ok) {
    logger.error("Algo deu errado ao buscar os posts");
    return {};
  }

  logger.info("Post obtido com sucesso");

  const data = await response.json();
  if (!data || data.length === 0) {
    return {};
  }
  return data[0];
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PagePost;