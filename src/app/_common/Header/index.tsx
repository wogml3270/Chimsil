import React from 'react'
import styled from './Header.module.scss';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  return (
    <nav>
      <div className={styled.header}>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/photo">photo</Link>
      </div>
    </nav>
  )
}

export default Header;