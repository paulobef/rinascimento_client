import React, {DetailedHTMLProps, ReactElement} from "react";
import Link from "next/link";

function artworkCard({ artwork }): ReactElement {
    const maxLength = 255;
    const {  title, slug, image, creation_date, category, artist } = artwork;
    return (
          <div className="card">
              <Link href={'/gallery/[slug]'} as={`/gallery/${slug}`}>
                    <a>
                      <img alt={title} src={'http://127.0.0.1:8000' + image}/>
                    </a>
              </Link>
                      <div className="card-info">
                          <Link href={'/gallery/[slug]'} as={`/gallery/${slug}`}>
                              <a>
                                  <h3>{title}</h3>
                              </a>
                          </Link>

                              <span> By { artist.name }  </span>

                          {/*<p>{ description.length > maxLength ? description.substring(0, maxLength) + '...' : description }</p>*/}
                      </div>


              <style jsx>{`
                    a {
                      text-decoration: none;
                      color: inherit;
                    }
                  .card {
                    margin-bottom: 3em;
                    break-inside: avoid;
                    
                  }
                  h3:hover {
                    color: darkslategray;
                    transition: color ease-in-out 0.5s;
                  }
                  img:hover {
                    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.1);
                    transition: box-shadow ease-in-out 0.5s;
                   
                  }
                  @media screen and (max-width: 640px) {
                      .card-info {
                        margin-left: 1em;
                        margin-right: 1em;
                      }
                  }
                
               
              `}</style>
          </div>

  )
}

export default artworkCard;