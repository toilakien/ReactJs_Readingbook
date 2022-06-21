import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import {Routes,Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Home from './pages/Home';
import ContentBook from './components/Productbook/ContentBook';
function App() {
    return (
        <div className="App">
            <div className='container-fluid'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} /> 
                    <Route path="/books" element={<Books />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/books/content' element={<ContentBook/>}/>
                    <Route path='/find' element={<Books/>}/>
                </Routes>
                <Footer />
            </div>
        </div>
    );
}
export default App;
