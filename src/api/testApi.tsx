
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:8080');
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20, // 
  }
}
