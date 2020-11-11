import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Title from '../../components/title';

export default function post(){
  const router = useRouter();
  console.log(router)

  return(
    <Layout>
      <Title>User detais</Title>
      <p>post id: {router.query.id}</p>
    </Layout>
  )
}