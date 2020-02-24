import MasonryLayout from "../../component/MasonryLayout";
import ArtworkCard from "../../component/ArtworkCard";
import fetch from "isomorphic-unfetch";
import React from "react";

function galleryPage({ artworks }) {

    return (
        <div className={"container-large"}>
            <MasonryLayout columns={3} gap={25}>
                { artworks.map(artwork => {
                      return (
                          <ArtworkCard artwork={artwork} />
                      )})}
            </MasonryLayout>
        </div>
  )
}


galleryPage.getInitialProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/art/artworks/page-1/item-10');
    const json = await res.json();
    return { artworks: json }
};

export default galleryPage