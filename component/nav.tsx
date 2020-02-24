import React, { Fragment, useState } from "react";
import Link from "next/link";

function nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu)
    };

    const retracted = showMenu ? '' : 'retracted';

    return (
        <Fragment>
              <div className={`overlay ${retracted}`} >
                    <div className="overlay-content">
                        <a className={retracted} href="#">Gallery</a>
                        <a className={retracted} href="#">Artists</a>
                        <a className={retracted} href="#">Magazine</a>
                        <a className={retracted} href="#">About</a>
                    </div>
              </div>
              <nav className="nav">`
                  <div className="center">
                          <h1>
                              <Link href="/" as="">
                                <a id='site-logo'>
                                   rinascimento
                                 </a>
                              </Link>
                          </h1>
                  </div>
                  <div className={"right"} >
                      <button className={`closebtn ${showMenu ? '' : 'hide'}`} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"
                             className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                      <button className={`openbtn ${showMenu ? 'hide' : ''}`} onClick={toggleMenu}>
                          <svg  xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"
                               className="feather feather-menu">
                              <line x1="3" y1="12" x2="21" y2="12"/>
                              <line x1="3" y1="6" x2="21" y2="6"/>
                              <line x1="3" y1="18" x2="21" y2="18"/>
                          </svg>
                      </button>
                  </div>
              </nav>
              <style jsx>{`
              .nav {
                backdrop-filter: blur(30px);
                background-color: rgb(0,0,0, 0.9);
                position: sticky;
                top: 0;
                height: 100%;
                display: flex;
                z-index: 3;
              }
    
              #site-logo {
                font-family: Georgia, serif;
                font-size: 0.6em;
                letter-spacing: 16px;
                word-spacing: 0.4px;
                color: #FFFF;
                font-weight: normal;
                text-decoration: none;
                font-style: normal;
                font-variant: normal;
                text-transform: uppercase;
                text-align: center;
                line-height: 0.7;
                
              }
              h1 {
                line-height: 0;
                margin: .5em 0 .5em
              }
              
              .center {
                margin: auto;
            
                padding-left: 4em;
              }
              
              .right {
                padding: 0.6em;
              }
              .feather-menu, .feather-x {
                color: white;
              }
              
               /* The Overlay (background) */
                .overlay {
                  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
                  height: 100%;
                  width: 100%;
                  position: fixed; /* Stay in place */
                  z-index: 1; /* Sit on top */
                  left: 0;
                  top: 0;
                  background-color: rgb(0,0,0); /* Black fallback color */
                  overflow-x: hidden;
                  overflow-y: hidden; /* Disable horizontal scroll */
                  transition: 0.3s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
                }
                
                /* Position the content inside the overlay */
                .overlay-content {
                  position: relative;
                  top: 25%; /* 25% from the top */
                  width: 100%; /* 100% width */
                  text-align: center; /* Centered text/links */
                  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
                }
                
                /* The navigation links inside the overlay */
                .overlay a {
                  padding: 8px;
                  text-decoration: none;
                  font-size: 36px;
                  font-weight: lighter;
                  color: #818181;
                  display: block; /* Display block instead of inline */
                  transition: color 0.3s linear /* Transition effects on hover (color) */
                
                }
                
                /* When you mouse over the navigation links, change their color */
                .overlay a:hover, .overlay a:focus {
                  color: #f1f1f1;
                }
                
                /* Position the close button (top right corner) */
                .overlay .closebtn {
                  position: absolute;
                  top: 20px;
                  right: 45px;
                  font-size: 60px;
                }
                /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
                @media screen and (max-height: 450px) {
                  .overlay a {font-size: 20px}
                  .overlay .closebtn {
                    font-size: 40px;
                    top: 15px;
                    right: 35px;
                  }
                  
                }
                @media screen and (max-width: 450px) {
                  #site-logo {
                        font-family: Georgia, serif;
                        font-size: 0.4em;
                        letter-spacing: 12px;
                        word-spacing: 0.4px;
                        color: #FFFF;
                        font-weight: normal;
                        text-decoration: none;
                        font-style: normal;
                        font-variant: normal;
                        text-transform: uppercase;
                        text-align: center;
                        line-height: 0.7;
                
                  }
               
                }

              
                  .retracted {
                    visibility: hidden;
                    background: transparent;
                    color: transparent;
                  }
    
              `}</style>
      </Fragment>

  )
}

export default nav