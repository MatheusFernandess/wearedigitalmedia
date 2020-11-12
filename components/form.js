export default function form(){
return (
  <form>
  <label>
    Nome completo
    <input type="text" name="name" placeholder=" Digite aqui seu nome" />
  </label>
 
  <label>
    Seu telefone/ whats
    <input type="text" name="cellfone" placeholder=" Digite aqui seu telefone" />
  </label>

  <label>
    E-mail
    <input type="text" name="name" placeholder=" exemplo@email.com"  />
  </label>

  <input type="submit" value="Enviar!" />
  <style jsx>
    {`
      form{
        flex-direction: column;
        
      }

      label{
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        background-color: #e8f8ff
      }
      input text{
        margin-left:0px;
        padding: 10px;
        
      }
    
    `}
  </style>
</form>
)
}