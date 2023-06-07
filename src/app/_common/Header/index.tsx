import styled from './Header.module.scss';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className={styled.header}>
      <div className={styled.header__nav}>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/photo">photo</Link>
      </div>
    </nav>
  )
}

export default Header;