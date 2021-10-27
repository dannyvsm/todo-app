import { useState } from 'react';
import './App.css';
// import axios from 'axios';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoList from './components/TodoList';
// import Images from './components/Images';

const App = () => {
  
  // const [images, setImages] = useState([]);
 
  // const getImage = async() => {
  //   const response = await axios.get('https://api.unsplash.com/photos/?client_id=plkPZy-3O3hQeqll55ra21BfvmwcqL8V27yZm3V09tg');
  //   const data = await response.data;
  //   setImages(data)
  // }

  return (
    <div className="todo-app">
      <Header />
      <TodoList />
      <Footer />
      {/* <button className="btn" onClick={getImage}>Click for a pic</button>
      <div className="photos">
        {images.length > 0 && (
          <Images images={images}/>
        )}
      </div> */}
     
    </div>
  );
}

export default App;
