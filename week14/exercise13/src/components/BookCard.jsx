import {useState} from "react";


function BookCard({title, author, description, bookArt}) {
    const [isRead, setIsRead] = useState(false);
    
    function toggleReadStatus() {
    setIsRead((prevState) => !prevState);
}
    

    return (
        <div className="book-card">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <img src={bookArt} className="book-image"/>
            <p>{description}</p>
            <button onClick={toggleReadStatus}>
                {isRead ? "Mark as unread" : "Mark as read"}
            </button>
            <p>Status: {isRead ? "Read" : "Not Read"}</p>
        </div>     
    );
}


export default BookCard;