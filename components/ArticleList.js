import ArticleItem from "./ArticleItem";

const ArticleList=({articles})=>{
  return(
    <div>
      <div>
         {articles.map((article)=>(
            <ArticleItem key={article.id} article={article}/>
          ))}
        </div>
     </div>
  );
}

export default ArticleList;
