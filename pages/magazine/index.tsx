import GridLayout from "../../component/GridLayout";
import ArticleCard from "../../component/ArticleCard";
import fetch from "isomorphic-unfetch";
import React from "react";

function magazinePage({ articles }) {

    return (
        <div className={"container-large"}>
            <GridLayout columns={3} gap={25}>
                { articles.map(article => {
                      return (
                          <ArticleCard article={article} />
                      )})}
            </GridLayout>
        </div>
  )
}


magazinePage.getInitialProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/art/articles/page-1/item-5');
    const json = await res.json();
    return { articles: json }
};

export default magazinePage