import Layout from '../../components/layout';
import Title from '../../components/title';
import Form from '../../components/form'

function Contato(){
  return(
    
    <Layout>
      <Title>We Arre Digital Media</Title>
      <p>entre em contato hoje mesmo!</p>
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
      <Form></Form>
    </Layout>
  )
}
export default Contato