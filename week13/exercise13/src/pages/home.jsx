import { books } from '../data/bookData';
import BookCard from '../components/BookCard';



function Home() {
  return (
    <div className='book-grid'>
      {books.map ((books) =>(
        <BookCard key={books.id} title={books.title} author={books.author} description={books.description} bookArt={books.image}/>
      ))}
    </div>
  );
}

export default Home;

// className='book-grid'