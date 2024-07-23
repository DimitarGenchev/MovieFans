import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MoviesList from './components/movies-list/MoviesList';
import MovieCreate from './components/movie-create/MovieCreate';

function App() {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/movies' element={<MoviesList />} />
                    <Route path='/movies/create' element={<MovieCreate />} />
                </Routes>
            </main>
        </>
    );
}

export default App
