import Head from 'next/head'
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
  }

  body, html {
    height: 100%;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>I-Witness</title>
          <meta name='description' content='Put a description here about your app'/>
          <meta name='robots' content='index, follow'/>
          <link rel="apple-touch-icon" sizes="180x180" href="/logothing.png"/>
          <link rel="icon" type="image/png" sizes="180x180" href="/logothing.png"/>
          <link rel="icon" type="image/png" sizes="180x180" href="/logothing.png"/>
          <link rel="manifest" href="/favicon_package/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <GlobalStyle />
        
        

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
