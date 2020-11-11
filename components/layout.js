import Navbar from './navbar'

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
      <style jsx>
        {`
          div {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #5B9FB3;
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