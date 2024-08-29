// File: testAPI.js

const axios = require('axios');

// Hàm kiểm tra API
async function testAPI(nhapEmail, nhapPassword) {
  try {
    // Gửi yêu cầu POST đến API với dữ liệu email và password
    const response = await axios.post('http://localhost:3000/layIDvaVaiTro', {
      email: nhapEmail,
      password: nhapPassword
    });

    // In kết quả phản hồi từ API
    console.log('API Response:', response.data);
  } catch (error) {
    // In ra lỗi nếu có vấn đề xảy ra khi gửi yêu cầu
    if (error.response) {
      console.error('Error:', error.response.data);
    } else if (error.request) {
      console.error('Error with request:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
  }
}

// Gọi hàm kiểm tra API
testAPI('SV_CNTT11_01@gmail.com', 'ydxqc019');
