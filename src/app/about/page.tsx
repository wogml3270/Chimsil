'use client'
import React, { useEffect } from 'react';
import api from '@/api/authApi';

const About = () => {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await api({
        method: 'GET',
        url: 'http://localhost:8080/api/posts',
      });
      console.log('API response:', data);
    } catch (error: any) {
      console.error('API request failed:', error);
    }
  }

  return <div>about page</div>;
};

export default About;
