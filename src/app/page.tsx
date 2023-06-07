'use client'
import React, { useState, useEffect } from 'react';
import styled from './home.module.scss';

interface DataItem {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8080/api/posts`);
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, [])

  console.log(data)


  return (
    <>
      <div className={styled.home}>
        <h1>Home page</h1>
        <div>
          {data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;