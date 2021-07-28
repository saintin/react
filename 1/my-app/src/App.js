import Header from "./Header";
import SearchBar from "./SearchBar";

export default function App() {
    return (
        <div>
          <Header></Header>
            <aside>Aside</aside>
            <main>Content</main>
            <footer>Footer
                <SearchBar></SearchBar>
            </footer>
        </div>
    );
}