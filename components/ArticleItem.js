import Link from "next/link"

const ArticleItem=({article})=>{
   return(
     <div>
        <div className="article">
           <Link href="/article/[id]" as={`/article/${article.id}`}>
              <h1>{article.title}</h1>
            </Link>
          </div>
        <style jsx>
            {`
              .article a{
                text-decoration:none;
                color:#000;
               }
             `}
          </style>
       </div>
   );
}



export default ArticleItem;
