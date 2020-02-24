import React, { Fragment } from "react";
import ArtworkCard from '../component/ArtworkCard'
import MasonryLayout from "../component/MasonryLayout";
import PageHeader from '../component/pageHeader'
import api from "../utils/api/artApi";

function HomePage({ artworks, article }) {

    return (
        <Fragment>
        <PageHeader title={article.title} lead={article.lead} backgroundImage={'http://127.0.0.1:8000' + article.image} link={'https://www.google.fr'} />
        <h2 className={'centered'}>Browse Artworks</h2>
        <div className={"container-large"}>
            <MasonryLayout columns={3} gap={25}>
                { artworks.map(artwork => {
                      return (
                          <ArtworkCard artwork={artwork} />
                      )})}
            </MasonryLayout>
        </div>
        </Fragment>
  )
}


HomePage.getInitialProps = async () => {
    const artworks = await api.getList('artworks', 1, 5);
    const article = await api.getOne('articles', 'bienvenue-rinascimento');
    return {
        artworks,
        article
    }
};

export default HomePage