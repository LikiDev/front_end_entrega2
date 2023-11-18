import React, { useState, useEffect } from 'react';
import Post from '../Post/Post'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PostList.css'; 

// Datos de ejemplo para los posts
const postData = [
    {
        id: 1,
        author: '@autor1',
        date: '1 de Enero, 2023',
        image: '/imgs/img1.jpg',
        description: 'Descripción del post 1',
        likes: 150,
        commentsNumber: 30
    },
    {
        id: 2,
        author: '@autor2',
        date: '2 de Febrero, 2023',
        image: '/imgs/img2.jpg',
        description: 'Descripción del post 2',
        likes: 250,
        commentsNumber: 50
    },
    {
        id: 3,
        author: '@autor3',
        date: '3 de Marzo, 2023',
        image: '/imgs/img3.jpg',
        description: 'Descripción del post 3',
        likes: 350,
        commentsNumber: 70
    }
];

const PostList = ({ posts }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []); 

    return (
        <div className="post-list">
            {loading ? (
                <div>Loading...</div> 
            ) : (
                posts.map(post => ( 
                    <Post
                        key={post.id}
                        createdAt={new Date(post.createdAt)} 
                        author={post.author}
                        text={post.text}
                        comments={post.comments}
                        image={post.image}
                    />
                ))
            )}
        </div>
    );
};

export default PostList;
