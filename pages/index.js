import Title from '../components/title'
import Layout from '../components/layout'

function Home(){
  return(
    
    <Layout>
      <Title>We Are Digital Media</Title>
      <p>Ajudando você a entregar o melhor conteúdo!</p>
      <style>
        {`
          p{
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </Layout>
  )
}
export default Home