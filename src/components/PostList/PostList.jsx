import React, { useState, useEffect } from 'react';
import Post from '../Post/Post'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PostList.css'; 

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
