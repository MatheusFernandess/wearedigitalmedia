import Title from '../components/title'
import Layout from '../components/layout'

function Home(){
  return(
    
    <Layout>
      <Title>We Are Digital Media</Title>
      <p>Me ajude a te ajudar!</p>
      <style>
        {`
          p{
            color: darkgray;
          }
          p:hover {
            color: #61DAFB;
          }
        `}
      </style>
    </Layout>
  )
}
export default Home