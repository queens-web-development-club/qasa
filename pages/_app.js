import '@/styles/globals.css'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <NavBar />
      <Component {...pageProps} />
    </div>
  ) 
  
}
