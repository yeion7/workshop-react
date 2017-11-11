import Head from 'next/head';

export default () => (
  <main>
    <Head>
      <title>Workshop React</title>
      <link rel="icon" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
    </Head>
    <h1>Bienvenidos al workshop</h1>
    <img src="/static/react.png" alt="Logo React" width="350px" />
    <br />
    <code>git clone git@github.com:yeion7/workshop-react.git</code>
    <style jsx>{`
      main {
        background: black;
        min-width: 100vw;
        min-height: 100vh;
        text-align: center;
      }

      h1 {
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 10em;
        margin: 0;
        padding: 0;
        color: #61dbfb;
      }

      code {
        background: white;
        padding: 10px;
      }
    `}</style>
  </main>
);
