import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
