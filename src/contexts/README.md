# Contexts (Ngữ cảnh)

This folder contains React Context API providers for managing global state.  
(Thư mục này chứa các provider của React Context API để quản lý trạng thái toàn cục.)

## Guidelines (Hướng dẫn)
- Use this folder to define context providers for shared state (e.g., authentication, theme).  
  (Sử dụng thư mục này để định nghĩa các provider cho trạng thái dùng chung như xác thực, giao diện.)
- Each context should have:  
  (Mỗi ngữ cảnh nên có:)
  - A provider component.  
    (Một thành phần provider.)
  - A custom hook for accessing the context.  
    (Một hook tùy chỉnh để truy cập ngữ cảnh.)
- Keep context logic modular and reusable.  
  (Giữ logic ngữ cảnh theo mô-đun và có thể tái sử dụng.)