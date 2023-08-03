import Navbar from '../../components/Header/Navbar.js';
import Slideshow from '../../components/Body/Slideshow/Slideshow.js';
import './App.css';

export default function App() {
    return (
        <div className="page-align__center">
            <Navbar />
            <Slideshow />
        </div>
    );
}
