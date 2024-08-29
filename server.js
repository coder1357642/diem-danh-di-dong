const sql = require('mssql');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Cấu hình kết nối
const config = {
  user: 'sa',
  password: '123456',
  server: 'DESKTOP-BMQHS61',
  database: 'diemDanhHocSinhLite',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Kết nối đến SQL Server
sql.connect(config)
  .then(pool => {
    if (pool.connected) {
      console.log('Connected to SQL Server database.');
    }
  })
  .catch(err => {
    console.error('Error connecting to SQL Server:', err);
  });

app.use(bodyParser.json());

app.post('/layIDvaVaiTro', async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .input('matKhau', sql.NVarChar, password)
      .output('ID', sql.NVarChar)
      .output('vaiTro', sql.NVarChar)
      .execute('dangNhap');

    const { ID, vaiTro } = result.output;
    
    if (ID && vaiTro) {
      res.json({ success: true, ID, vaiTro });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Error executing procedure:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

// Khởi động server và kiểm tra API
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
// Hàm kiểm tra API
async function testAPI() {
  try {
    const response = await axios.post('http://localhost:3000/layIDvaVaiTro', {
      email: 'SV_CNTT11_01@gmail.com',
      password: 'ydxqc019'
    });
    
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
}

*/