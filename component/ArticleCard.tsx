import React, {ReactElement} from "react";
import Link from "next/link";

function articleCard({ article }): ReactElement {
    const {  title, slug, image, category } = article;


    return (
          <div className="card">
              <Link href={'/gallery/[slug]'} as={`/gallery/${slug}`}>
                  <a>
                      <img alt={title} src={'http://127.0.0.1:8000' + image}/>
                      <div className="card-info">
                          <h3>{title}</h3>
                          <span> { category }</span>
                      </div>
                  </a>
              </Link>
            <style jsx>{`
                  .card {
                    margin-bottom: 3em;
                    break-inside: avoid;
                    
                  }
                  @media screen and (max-width: 640px) {
                      .card-info {
                        margin-left: 1em;
                        margin-right: 1em;
                      }
                  }
                
               
              `}
            </style>
          </div>

  )
}

export default articleCard;