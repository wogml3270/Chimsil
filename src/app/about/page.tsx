'use client'
import React, { useState, useEffect } from 'react';
import api from '@/api/authApi';

interface ImageItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const About: React.FC = () => {
  const [data, setData] = useState<ImageItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData: ImageItem[] = await api({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/photos?_start=1&_end=10',
        });
        setData(jsonData);
        console.log('API response: ', jsonData);
      } catch (error: any) {
        console.error('API request failed: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>About page</h1>
      {data?.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '20px' }}>데이터 안불러와짐</p>
      )}
    </div>
  );
};

export default About;
