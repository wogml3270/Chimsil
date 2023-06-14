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
  const [error, setError] = useState<String>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/posts`);
        if (!res.ok) {
          throw new Error('데이터를 불러오는데 실패하였습니다.');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      }
    }
    fetchData();
  }, [])

  console.log(data);

  return (
    <>
      <div className={styled.home}>
        <div>
          {error ? (
            <p className={styled.error}>{error}</p>
          ) : (
            data.map((item) => (
              <div key={item.id} className={styled.contents_box}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Home;