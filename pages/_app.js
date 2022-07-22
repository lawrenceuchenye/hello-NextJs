import '../styles/globals.css'
import LayOut from "../components/LayOut";

function MyApp({ Component, pageProps }) {
  return (
   <div>
     <LayOut>
      <Component {...pageProps} />
     </LayOut>
    </div>
   );
}

export default MyApp
