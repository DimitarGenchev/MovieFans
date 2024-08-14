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
import MyMovies from './components/my-movies/MyMovies';
import MyReviews from './components/my-reviews/MyReviews';
import GuestGuard from './components/common/GuestGuard';
import ReviewEdit from './components/review-edit/ReviewEdit';

function App() {
    return (
        <AuthContextProvider>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<MoviesList />} />
                    <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                    <Route element={<GuestGuard />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
                    <Route element={<UserGuard />}>
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/movies/create' element={<MovieCreate />} />
                        <Route path='/my-movies' element={<MyMovies />} />
                        <Route path='/my-reviews' element={<MyReviews />} />
                        <Route path='/movies/:movieId/edit' element={<MovieEdit />} />
                        <Route path='/reviews/:reviewId/edit' element={<ReviewEdit />} />
                    </Route>
                </Routes>
            </main>
        </AuthContextProvider>
    );
}

export default App;
