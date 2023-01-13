import './App.css';
import SearchEngine from './SearchEngine';
import github from "./pictures/github.png";

function App() {
  return (
    <div className="App">
     <SearchEngine defaultKeyword="love" />
     <footer className='text-white'>
          <p className="text-center">
            <a
              href="https://github.com/IhorKarp/dictionary-web-app-react"
              target="_blank"
              className="open-source text-decoration-none text-dark"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github-icon" width={30} />
            </a>{" "}
            coded by Ihor Karp
          </p>
        </footer>
    </div>
  );
}

export default App;
