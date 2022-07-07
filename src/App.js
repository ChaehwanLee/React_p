import logo from './logo.svg';
import './App.css';
function Header(props) {
  console.log('props',props,props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">html</a></li>
      <li><a href="/read/3">html</a></li>
    </ol>
  </nav>
}

function Article(props) { 
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, web"></Article>
      <Article title="Hello" body="Hello, Stranger"></Article>
    </div>
    
  );
}

export default App;
