import main from './Components/main.js'
import footer from './Components/footer.js'
import header from './Components/header.js'

function App() {

  return (
    <>
    <head>
      <meta name="description" content="Little Lemon Homepage"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon's Landing site"/>
      <meta name="og:image" content="Logo.png"/>
    </head>
    <header/>
    <main text = "this is a bunch of text pushed down down as props"/>
    <footer/>
    </>
  );
}

export default App;
