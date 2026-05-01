import { books } from '../data/bookData';
import BookCard from '../components/BookCard';



function Home() {
  return (
    <div>
      <h1>Gothic Books and Short Stories</h1>
    <div className='book-grid'>
      {books.map ((books) =>(
        <BookCard key={books.id} title={books.title} author={books.author} description={books.description} bookArt={books.image}/>
      ))}
    </div>
    </div>
  );
}

export default Home;

// className='book-grid'