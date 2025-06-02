import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployerRegister.css';

const EmployerRegister = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        companyType: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        // Step 2
        fullName: '',
        gender: '',
        phone: '',
        companyName: '',
        workLocation: '',
        district: '',
        agreeToTermsStep2: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateStep1 = () => {
        const newErrors = {};

        if (!formData.companyType) newErrors.companyType = 'Vui lòng chọn quy định';
        if (!formData.email) newErrors.email = 'Vui lòng nhập email';
        if (!formData.password) newErrors.password = 'Vui lòng nhập mật khẩu';
        if (formData.password.length < 6) newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Vui lòng nhập lại mật khẩu';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu không khớp';
        }
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Vui lòng đồng ý với điều khoản';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};

        if (!formData.fullName) newErrors.fullName = 'Vui lòng nhập họ và tên';
        if (!formData.gender) newErrors.gender = 'Vui lòng chọn giới tính';
        if (!formData.phone) newErrors.phone = 'Vui lòng nhập số điện thoại';
        if (!formData.companyName) newErrors.companyName = 'Vui lòng nhập tên công ty';
        if (!formData.workLocation) newErrors.workLocation = 'Vui lòng chọn địa điểm làm việc';
        if (!formData.agreeToTermsStep2) newErrors.agreeToTermsStep2 = 'Vui lòng đồng ý với điều khoản';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setCurrentStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep2()) {
            console.log('Registration data:', formData);
            alert('Đăng ký thành công!');
        }
    };

    const handleGoogleRegister = () => {
        console.log('Google registration for employer');
    };

    return (
        <div className="employer-register-page">
            <div className="employer-register-container">
                {/* Left Side - Register Form */}
                <div className="employer-register-form">


                    <div className="form-content">
                        <div className="form-header">
                            <div className="logo">
                                <img src="/logo-WorkHub.png" alt="WorkHub" className="logo-img" />
                                <span className="logo-text">WorkHub</span>
                            </div>
                        </div>
                        <h1>Đăng ký tài khoản Nhà tuyển dụng</h1>
                        <p>Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel.</p>

                        {currentStep === 1 && (
                            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                                {/* Company Type */}
                                <div className="form-group">
                                    <label>Quy định <span className="required">*</span></label>
                                    <div className="select-wrapper">
                                        <select
                                            name="companyType"
                                            value={formData.companyType}
                                            onChange={handleInputChange}
                                            className={errors.companyType ? 'error' : ''}
                                        >
                                            <option value="">Quy định</option>
                                            <option value="company">Công ty TNHH</option>
                                            <option value="joint-stock">Công ty Cổ phần</option>
                                            <option value="enterprise">Doanh nghiệp tư nhân</option>
                                            <option value="startup">Startup</option>
                                            <option value="agency">Cơ quan nhà nước</option>
                                            <option value="ngo">Tổ chức phi chính phủ</option>
                                            <option value="other">Khác</option>
                                        </select>
                                        <span className="select-arrow">▼</span>
                                    </div>
                                    {errors.companyType && <span className="error-text">{errors.companyType}</span>}
                                </div>

                                <h3 className="section-title">Tài khoản</h3>

                                {/* Terms Agreement */}
                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                        Tôi đã đọc và đồng ý với <Link to="/terms">Điều khoản dịch vụ</Link> và <Link to="/privacy">Chính sách bảo mật</Link> của TopCV.
                                    </label>
                                    {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
                                </div>

                                {/* Google Register Button */}
                                <button
                                    type="button"
                                    className="google-register-btn"
                                    onClick={handleGoogleRegister}
                                >
                                    <span className="google-icon">G</span>
                                    Đăng ký bằng Google
                                </button>

                                <div className="divider">
                                    <span>Hoặc bằng email</span>
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label>Email đăng nhập <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">✉️</span>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={errors.email ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                    <div className="input-note">
                                        Trường hợp bạn đăng ký tài khoản bằng email không phải email tên miền công ty, một số dịch vụ trên tài khoản có thể sẽ bị giới hạn quyền mua hoặc sử dụng.
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="form-group">
                                    <label>Mật khẩu <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔒</span>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Mật khẩu (từ 6 đến 25 ký tự)"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={errors.password ? 'error' : ''}
                                        />
                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? '👁️' : '👁️‍🗨️'}
                                        </button>
                                    </div>
                                    {errors.password && <span className="error-text">{errors.password}</span>}
                                </div>

                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label>Nhập lại mật khẩu <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔒</span>
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            placeholder="Nhập lại mật khẩu"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className={errors.confirmPassword ? 'error' : ''}
                                        />
                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                                </div>

                                <button type="submit" className="next-btn">
                                    Tiếp tục
                                </button>
                            </form>
                        )}

                        {currentStep === 2 && (
                            <form onSubmit={handleSubmit}>
                                <h2>Thông tin nhà tuyển dụng</h2>

                                {/* Full Name & Gender */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Họ và tên <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">👤</span>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="Họ và tên"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className={errors.fullName ? 'error' : ''}
                                            />
                                        </div>
                                        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                                    </div>

                                    <div className="form-group gender-group">
                                        <label>Giới tính: <span className="required">*</span></label>
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="radio-mark"></span>
                                                Nam
                                            </label>
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="radio-mark"></span>
                                                Nữ
                                            </label>
                                        </div>
                                        {errors.gender && <span className="error-text">{errors.gender}</span>}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="form-group">
                                    <label>Số điện thoại cá nhân <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">📱</span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Số điện thoại cá nhân"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={errors.phone ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>

                                {/* Company Name */}
                                <div className="form-group">
                                    <label>Công ty <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🏢</span>
                                        <input
                                            type="text"
                                            name="companyName"
                                            placeholder="Tên công ty"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className={errors.companyName ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                                </div>

                                {/* Work Location */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Địa điểm làm việc <span className="required">*</span></label>
                                        <div className="select-wrapper">
                                            <span className="input-icon">🏢</span>
                                            <select
                                                name="workLocation"
                                                value={formData.workLocation}
                                                onChange={handleInputChange}
                                                className={errors.workLocation ? 'error' : ''}
                                            >
                                                <option value="">Chọn tỉnh/thành phố</option>
                                                <option value="hanoi">Hà Nội</option>
                                                <option value="hcm">Hồ Chí Minh</option>
                                                <option value="danang">Đà Nẵng</option>
                                                <option value="haiphong">Hải Phòng</option>
                                                <option value="cantho">Cần Thơ</option>
                                                <option value="binhduong">Bình Dương</option>
                                                <option value="dongnaui">Đồng Nai</option>
                                                <option value="bacninh">Bắc Ninh</option>
                                                <option value="other">Khác</option>
                                            </select>
                                            <span className="select-arrow">▼</span>
                                        </div>
                                        {errors.workLocation && <span className="error-text">{errors.workLocation}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Quận/huyện</label>
                                        <div className="select-wrapper">
                                            <span className="input-icon">🏛️</span>
                                            <select
                                                name="district"
                                                value={formData.district}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Chọn quận/huyện</option>
                                                <option value="district1">Quận 1</option>
                                                <option value="district2">Quận 2</option>
                                                <option value="district3">Quận 3</option>
                                                <option value="district4">Quận 4</option>
                                                <option value="district5">Quận 5</option>
                                                <option value="district6">Quận 6</option>
                                                <option value="district7">Quận 7</option>
                                                <option value="district8">Quận 8</option>
                                                <option value="district9">Quận 9</option>
                                                <option value="district10">Quận 10</option>
                                                <option value="district11">Quận 11</option>
                                                <option value="district12">Quận 12</option>
                                                <option value="binhtan">Quận Bình Tân</option>
                                                <option value="binhthanh">Quận Bình Thạnh</option>
                                                <option value="govap">Quận Gò Vấp</option>
                                                <option value="phunhuan">Quận Phú Nhuận</option>
                                                <option value="tanbinh">Quận Tân Bình</option>
                                                <option value="tanphu">Quận Tân Phú</option>
                                                <option value="thuduc">Quận Thủ Đức</option>
                                            </select>
                                            <span className="select-arrow">▼</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms Agreement */}
                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="agreeToTermsStep2"
                                            checked={formData.agreeToTermsStep2}
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                        Tôi đã đọc và đồng ý với <Link to="/terms">Điều khoản dịch vụ</Link> và <Link to="/privacy">Chính sách bảo mật</Link> của TopCV.
                                    </label>
                                    {errors.agreeToTermsStep2 && <span className="error-text">{errors.agreeToTermsStep2}</span>}
                                </div>

                                <button type="submit" className="complete-btn">
                                    Hoàn tất
                                </button>

                                <div className="form-actions">
                                    <button
                                        type="button"
                                        className="back-btn"
                                        onClick={() => setCurrentStep(1)}
                                    >
                                        Quay lại
                                    </button>
                                </div>
                            </form>
                        )}

                        <div className="login-link">
                            <p>
                                Đã có tài khoản? <Link to="/employer/login">Đăng nhập ngay</Link>
                            </p>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>©2014-2025 WorkHub Vietnam JSC. All rights reserved.</p>
                    </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="employer-register-illustration">
                    <div className="illustration-content">
                        {currentStep === 1 && (
                            <>
                                <div className="ai-cube-container">
                                    <div className="ai-cube">
                                        <div className="cube-face front">
                                            <div className="hexagon-pattern">
                                                <div className="hexagon"></div>
                                                <div className="hexagon"></div>
                                                <div className="hexagon"></div>
                                            </div>
                                            <div className="ai-logo">WorkHub AI</div>
                                        </div>
                                    </div>
                                    <div className="floating-elements">
                                        <div className="element element-1">💡</div>
                                        <div className="element element-2">🔍</div>
                                        <div className="element element-3">⚡</div>
                                    </div>
                                </div>

                                <div className="text-content">
                                    <h2>Match your candidate with <span className="highlight">AI</span></h2>
                                    <div className="pagination-dots">
                                        <span className="dot active"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <div className="campaign-container">
                                    <div className="screens">
                                        <div className="screen screen-1">
                                            <div className="screen-header"></div>
                                            <div className="screen-content">
                                                <div className="chart-line"></div>
                                                <div className="data-points">
                                                    <div className="point"></div>
                                                    <div className="point"></div>
                                                    <div className="point"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="screen screen-2">
                                            <div className="screen-header"></div>
                                            <div className="screen-content">
                                                <div className="progress-bars">
                                                    <div className="progress-bar"></div>
                                                    <div className="progress-bar"></div>
                                                    <div className="progress-bar"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="growth-arrow">
                                        <svg viewBox="0 0 100 100">
                                            <path d="M10,90 Q50,10 90,30" stroke="#00ff88" strokeWidth="3" fill="none" />
                                            <polygon points="85,25 95,30 85,35" fill="#00ff88" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-content">
                                    <h2>Manage your works with <span className="highlight">Campaigns</span></h2>
                                    <div className="pagination-dots">
                                        <span className="dot"></span>
                                        <span className="dot active"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="bottom-logo">
                            <img src="/logo-WorkHub.png" alt="WorkHub" className="bottom-logo-img" />
                            <span className="bottom-logo-text">WorkHub</span>
                            <p className="slogan">Tiếp lợi thế, nối thành công</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerRegister;