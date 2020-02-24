import React from "react";
import App from 'next/app';
import MainLayout from "../component/MainLayout"


// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {
    render() {
        const  { Component, pageProps } = this.props;

        return (
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
        )
    }

}

export default MyApp