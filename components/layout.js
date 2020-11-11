import Navbar from './navbar'

export default function Layout({ children }){
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <style jsx>
       {`
         main {
           background: lightGreen;
         }
       `}
      </style>
    </div>
  )
}