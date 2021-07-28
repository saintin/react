import ReactDom from 'react-dom'

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
    document.getElementById('root')
);
