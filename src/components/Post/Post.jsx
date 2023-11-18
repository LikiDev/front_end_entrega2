import React, { useState } from 'react';
import './Post.css'; // Asegúrate de tener tus estilos aquí

const Post = ({ createdAt, author, text, comments, image }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1); // Incrementa los likes en 1 cada vez que se hace clic
    };

    return (
        <div className="card post">
            <img src={image} className="card-img-top" alt="Imagen del post" />
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text">{text}</p>
                <div className="post-footer">
                    <small className="text-muted">{createdAt.toLocaleString()}</small>
                    <div className="interactions">
                        {/* Botón de Me Gusta */}
                        <button className="like-button" onClick={handleLike}>
                            <i className="bi bi-heart"></i> {likes}
                        </button>
                        <span>
                            <i className="bi bi-chat"></i> {comments}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
