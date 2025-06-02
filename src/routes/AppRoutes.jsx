import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import EmployerHome from '../pages/Employer/Home/EmployerHome';
import EmployerLogin from '../pages/Employer/Login/EmployerLogin';
import EmployerRegister from '../pages/Employer/Register/EmployerRegister'; // Import EmployerRegister
import EmployerDashboard from '../pages/Employer/Dashboard/EmployerDashboard';

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
      <Route path="/WorkHub-pro" element={<div>WorkHub Pro</div>} />
      <Route path="/employer" element={<EmployerHome />} />
      <Route path="/employer/login" element={<EmployerLogin />} />
      <Route path="/employer/register" element={<EmployerRegister />} /> {/* Thêm route register */}
      <Route path="/employer/dashboard" element={<EmployerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;