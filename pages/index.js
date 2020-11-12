import Title from '../components/title'
import Layout from '../components/layout'

function Home(){
  return(
    
    <Layout>
      <Title>We Arre Digital Media</Title>
      <p>Ajudando você a entregar o melhor conteúdo!</p>
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