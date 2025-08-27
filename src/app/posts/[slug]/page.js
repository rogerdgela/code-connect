import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

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

  const post = data[0];

  const processedContent = await remark()
    .use(html)
    .process(post.markdown || "");
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>{post.title}</h1>
      <div
        style={{ padding: 16, background: "white" }}
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      />
      <p style={{ color: "white" }}>{post.body}</p>
    </div>
  );
};

export default PagePost;
