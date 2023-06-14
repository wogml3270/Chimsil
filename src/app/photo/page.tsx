'use client'
import React from 'react';
import Image from 'next/image';
import styled from './photo.module.scss';

interface Props {
  photos: Photo[];
}

interface Photo {
  id: number;
  thumbnailUrl: string;
  title: string;
}

const Page: React.FC<Props> = ({ photos }) => {
  return (
    <div>
      <ul className={styled.photos}>
        {photos?.map((photo) => (
          <li key={photo.id}>
            <Image src={photo.thumbnailUrl} width={200} height={200} alt={photo.title} />
            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticPhotoProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos: Photo[] = await res.json();

  return {
    props: {
      photos,
    },
  };
}

export default Page;
