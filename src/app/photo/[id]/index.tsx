import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const index = ({ photo }: any) => {
  const router = useRouter();
  const { title, url } = photo
  return (
    <div>
      <h2>image {router.query.id}</h2>
      <Image
        src={url}
        width={500}
        height={500}
        alt={title}
      />
      <Link href='/photos'>
        <button>뒤로가기</button>
      </Link>
    </div>
  )
}

export const getStaticProps = async ({ context } : any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();
  const ids = photos.map((photo: any) => photo.id);
  const paths = ids.map((id: String) => {
    return {
      params: {id: id}
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export default index
