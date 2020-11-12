import Link from 'next/link'

export default function(){
  return(
    <nav>
      <Link href='/'><a>Home</a></Link>
      <Link href='/users'><a>Users</a></Link>
      <Link href='/posts'><a>Sobre nós</a></Link>
      <Link href='/contat'><a>Contato</a></Link>
      <style jsx>
        {`
          nav {
            padding: 1% 100%;
            background: #20232a;
            background-size: 100%;
            margin-top: 500px;
            
            
          }
          a {
            padding: 0 15px;
            color: gray;
            font-family: helvetica;
            font-color: 
            
            

          }
          a:hover {
            color: #61DAFB
          }
        `}
      </style>
    </nav>
  )
}