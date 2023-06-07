import styled from './home.module.scss';

interface Props {
  posts?: any;
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <>
      <div className={styled.home}>
        <h1>Home page</h1>
      </div>
    </>
  )
}