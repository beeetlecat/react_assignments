import './css/app.css';
import BookCard from './components/BookCard';
import Footer from './components/Footer';
import { books } from './data/bookData.js';

function App() {
  return (
    <div>
      <h1>Gothic Books and Short Stories</h1>
      {books.map ((books) =>(
        <BookCard key={books.id} title={books.title} author={books.author} description={books.description} bookArt={books.image}/>
      ))}
      <Footer/>
    </div>
  );
}

export default App

