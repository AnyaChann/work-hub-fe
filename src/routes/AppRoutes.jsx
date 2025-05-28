import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Không cần BrowserRouter ở đây
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const CreateCV = () => <div>Tạo CV</div>;
const Tools = () => <div>Công cụ</div>;
const CareerGuide = () => <div>Cẩm nang nghề nghiệp</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-cv" element={<CreateCV />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/career-guide" element={<CareerGuide />} />
    </Routes>
  );
};

export default AppRoutes;