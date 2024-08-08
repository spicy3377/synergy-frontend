// import { userAdmin } from '@/zustand/state';
import axios from 'axios';
// import { useEffect } from 'react';
// import * as dotenv from 'dotenv';

// dotenv.config();

const baseURL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.Base}`
    : 'http://localhost:3001';

// const baseURL = "https://synergy-api-aoea.onrender.com/"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
