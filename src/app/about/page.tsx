'use clinet'
import React, { useState, useEffect } from 'react';
import api from '@/api/authApi';

type Props = {
  MyData: any;
}

const about = (props: Props) => {
  async function fetchData(){
    try {
      const data = await api({
        method: 'GET',
        url: 'http://localhost:8080/api/posts',
      });
      console.log('API response: ', data);
    } catch (error: any){
      console.error('API request failed: ', error);
    }
  }
  fetchData();
  return (
    <div>about page</div>
  )
}

export default about;