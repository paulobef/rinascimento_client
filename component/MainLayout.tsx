import React, { Fragment } from "react";
import Nav from './nav'



export default function mainLayout(props) {
  return (
      <Fragment>
          <Nav />
          <div className='main'>
            { props.children }
          </div>
          <style jsx>{`


          `}</style>
          <style jsx global>{`
                /* Box-sizing reset: //w3bits.com/?p=3225 */
                html {
                  box-sizing: border-box;
                }
                
                *,
                *:before,
                *:after {
                  box-sizing: inherit;
                }
                // simple base stylesheet courtesy of https://fvsch.com/base-stylesheet/
                body {margin: 0; padding: 0; font-size: 100%; line-height: 1.5}
                h1, h2, h3, h4 {margin: 1em 0 .5em; line-height: 1.25}
                h1 {font-size: 2em}
                h2 {font-size: 1.5em}
                h3 {font-size: 1.2em}
                ul, ol {margin: 1em 0; padding-left: 40px}
                p, figure {margin: 1em 0}
                a img {border: none}
                sup, sub {line-height: 0}                      
                a {
                   text-decoration: none;
                   color: inherit;
                }
                
              body {
                background: whitesmoke;
                font-family: Helvetica Neue, sans-serif;
           
                
              }
              
              h1 {
                font-family: Georgia, serif;
              }
              
              p {
                font-family: Georgia, serif;
              }
              img {
                max-width: 100%;
              }
              .container-normal {
                margin: auto;
                max-width: 50em;
                align-content: center;
              }
              .container-large {
                margin: auto;
                max-width: 70em;
                align-content: center;
              }
              
              button {
                  border: none;
                  background: transparent;

              }
              
              .hide {
                display: none;
              }
              
              .centered {
                text-align: center;
              }
          `}</style>
      </Fragment>
  )
    //@ts-ignore
};