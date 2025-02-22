import React from 'react'
import AppRouter from './AppRouter'

const App = () => {
  return (
    <div>
     <AppRouter />
    </div>
  )
}

export default App

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// export default function App() {
//   return (
//     <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
// //   );
// }
