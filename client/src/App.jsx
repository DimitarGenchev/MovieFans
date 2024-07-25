import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MoviesList from './components/movies-list/MoviesList';
import MovieCreate from './components/movie-create/MovieCreate';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieEdit from './components/movie-edit/MovieEdit';
import MovieDelete from './components/movie-delete/MovieDelete';

function App() {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/movies' element={<MoviesList />} />
                    <Route path='/movies/create' element={<MovieCreate />} />
                    <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                    <Route path='/movies/:movieId/edit' element={<MovieEdit />} />
                </Routes>
            </main>
        </>
    );
}

export default App
