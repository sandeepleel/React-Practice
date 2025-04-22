import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Ready from './ready.jsx'

// function MyApp()
// {
//   return (
//     <div>
//       <h1>Custom app</h1>
//     </div>
//   )
// }
// const ReactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


 const reactElement = React.createElement('a',{
 href:'https://google.com', target:'_blank'
 }
 ,
 'click me to visit google'
, anotherUser
)

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit</a>
// )

const anotherUser ="sandeep"
createRoot(document.getElementById('root')).render(
{/* <App/> */},
reactElement
)


//  <>
//     {/* <App /> */}
//     MyApp()
//     {/* <Ready/> */}
//     </>
// MyApp()

// anotherElement
{/* <ReactElement/> */}
//ReactElement