function BookCard({title, author, description, bookArt}) {
    return (
        <article className="book-card">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <img src={bookArt} className="book-image"/>
            <p>{description}</p>
        </article>
            
            
    );
}

export default BookCard;