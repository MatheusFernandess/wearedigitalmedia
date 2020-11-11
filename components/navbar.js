import Link from 'next/link'

export default function(){
  return(
    <nav>
      <Link href='/'><a>Home</a></Link>
      <Link href='/users'><a>Users</a></Link>
      <Link href='/posts'><a>Posts</a></Link>
      <style jsx>
        {`
          nav {
            padding-top: 10px;
          }
          a {
            padding: 0 10px;
          }
          a:hover {
            color: darkgreen
          }
        `}
      </style>
    </nav>
  )
}