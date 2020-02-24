import React from "react";
import fetch from "isomorphic-unfetch";


function artworkPage ({ artwork }) {
    const {  title, image, creation_date, description } = artwork;

    return (
        <div className="container-normal">
            <img alt={title} src={'http://127.0.0.1:8000' + image}/>
              <div className="page-content">
                  <h1>{title}</h1>
                  <span> By { artwork.artist.name } | Created in { creation_date.split('/')[2] } | { artwork.category.name } </span>
                  <div dangerouslySetInnerHTML={{__html: description}}/>
              </div>
            <style jsx>{`
              @media only screen and (min-width: 1224px) {
                .container-normal {
                  margin-left: 50%;
                  
                }
                  img {
                    position: absolute;
                    left: 5%;
                    max-width: 40%;
                    max-height: 100%;
                  }
			}
            `}</style>
        </div>
    )
}

artworkPage.getInitialProps = async ({ query }) => {

    const res = await fetch('http://127.0.0.1:8000/art/artworks/' + query.slug);
    const json = await res.json();
    return { artwork: json }
};


export default artworkPage

