import ReactDom from 'react-dom'
import App from './App'

function SearchBar(){
    return (
        <div>
        <input></input>
        <button>Click me!</button>
        </div>
    );
}

ReactDom.render (
    <SearchBar></SearchBar>,
    <App></App>,
    document.getElementById('root')
);
