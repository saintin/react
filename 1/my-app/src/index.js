import ReactDom from 'react-dom'
import App from './App'

function SearchBar() {
    return (
        <div>
            <input></input>
            <button>Click me!</button>
        </div>
    );
}

ReactDom.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);
