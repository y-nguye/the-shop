import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar.js';
import SlideShow from '../../components/Body/SlideShow/index.js';
import './App.css';
import {
    Components,
    TodoList,
    UseImperativeHandle,
} from '../../components/Body/Learn/';

export default function App() {
    return (
        <div className="page-align__center">
            <Navbar />
            <Routes>
                <Route path="/" element={<SlideShow />} />
                <Route path="/store" element={<Components />} />
                <Route path="/smartphone" element={<TodoList />} />
                <Route path="/laptop" element={<UseImperativeHandle />} />
            </Routes>
        </div>
    );
}
