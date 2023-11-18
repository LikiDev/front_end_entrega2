import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('posts'); // Controla si se muestra 'posts' o 'profile'
  const [isLoading, setIsLoading] = useState(true);

  // Datos de ejemplo para los posts
  const examplePosts = [
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

  useEffect(() => {
    // Simula la carga de datos con un retardo
    const timeoutId = setTimeout(() => {
      setPosts(examplePosts);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleLogoClick = () => {
    // Función para manejar el clic en el logo y cambiar a ver el perfil
    setSection('profile');
  };

  const handleSearch = (event) => {
    // Actualizar el estado de búsqueda cada vez que el usuario escribe en el campo de búsqueda
    setSearch(event.target.value);
  };

  // Filtrar los posts basados en la cadena de búsqueda
  const filteredPosts = !isLoading && search
    ? posts.filter(post =>
        post.text.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  return (
    <div className="App">
      <NavBar onLogoClick={handleLogoClick} />
      {section === 'posts' && <SearchBar value={search} onSearch={handleSearch} />}
      {section === 'posts' ? (
        isLoading ? (
          <div>Loading...</div> // Muestra "Loading..." mientras se cargan los datos
        ) : (
          <PostList posts={filteredPosts} />
        )
      ) : (
        <Profile
          avatar="'/imgs/jordinadal.jpg"
          username="@jordinadal"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        />
      )}
    </div>
  );
}

export default App;




