import main from './Components/main.js'
import footer from './Components/footer.js'
import header from './Components/header.js'

function App() {

  return (
    <>
    <head>
      <meta name="description" content="Little Lemon Homepage"/>
      <meta name="og:title" Little lemon=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>
    </head>
    <header/>
    <main text = "this is a bunch of text sent down as props"/>
    <footer/>
    </>
  );
}

export default App;
