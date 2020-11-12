import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }){
  return (
    <div>
      <head>
        <title>
          We Are Digital Media
        </title>
      </head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer/>
      <style jsx>
        {`
          div {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #e8f8ff;
          }
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
      <style jsx global>
       {`
         html,
         body {
           padding: 0;
           margin: 0;
         }
         * box-sizing: border-box;
       `}
      </style>
    </div>
  )
}