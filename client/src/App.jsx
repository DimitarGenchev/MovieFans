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
import Logout from './components/logout/Logout';
import Home from './components/home/Home';
import UserGuard from './components/common/UserGuard';
import OwnerGuard from './components/common/OwnerGuard';

function App() {
    return (
        <AuthContextProvider>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<MoviesList />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                    <Route element={<UserGuard />}>
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/movies/create' element={<MovieCreate />} />
                        <Route element={<OwnerGuard />}>
                            <Route path='/movies/:movieId/edit' element={<MovieEdit />} />
                        </Route>
                    </Route>
                </Routes>
            </main>
        </AuthContextProvider>
    );
}

export default App
