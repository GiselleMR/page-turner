import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

async function getData() {
  try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&key=${process.env.REACT_APP_GoogleAPIPageTurner}`);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch(err){
      console.log(err)
    }
  }

export default function App() {
  const [user, setUser] = useState(getUser());

  const [data, setData] = useState()

  useEffect(() => {
  const fetchData = async () => {
     const data = await getData(1);
     setData(data);
  }

  fetchData();
}, []);

console.log(data)

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
