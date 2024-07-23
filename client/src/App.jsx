import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MoviesList from './components/movies-list/MoviesList';

function App() {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/movies' element={<MoviesList />} />
                </Routes>
            </main>
        </>
    );
}

export default App
