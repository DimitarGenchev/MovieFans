import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MoviesList from './components/movies-list/MoviesList';
import MovieCreate from './components/movie-create/MovieCreate';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieEdit from './components/movie-edit/MovieEdit';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthContextProvider>
            <Header />

            <main>
                <Routes>
                    <Route path='/movies' element={<MoviesList />} />
                    <Route path='/movies/create' element={<MovieCreate />} />
                    <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                    <Route path='/movies/:movieId/edit' element={<MovieEdit />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>
        </AuthContextProvider>
    );
}

export default App
