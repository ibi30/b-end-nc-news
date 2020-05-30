const connection = require("../db/connection");

exports.fetchArticleById = (article_id) => {
  return connection
    .select(
      "articles.author",
      "articles.title",
      "articles.article_id",
      "articles.body",
      "articles.topic",
      "articles.created_at",
      "articles.votes"
    )
    .from("articles")
    .where("articles.article_id", article_id)
    .count("comments.article_id as comment_count")
    .leftJoin("comments", "comments.article_id", "articles.article_id")
    .groupBy("articles.article_id")
    .then(([article]) => {
      if (!article) return Promise.reject({status: 404, message: 'article_id does not exist'})
      else return article
    })
};

exports.updateArticleById = (article_id, inc_votes = 0) => {
  return connection('articles')
  .where('article_id', article_id)
  .increment({votes: inc_votes})
  .returning('*')
  .then(([article])=> article)
}