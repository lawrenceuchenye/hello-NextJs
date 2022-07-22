import styles from "../styles/LayOut.module.css";
import Nav from "./Nav";
import Header from "./Header";

const LayOut=({children})=>{
   return(
     <div className={styles.container}>
       <Nav />
         <Header />
       <main className={styles.main}>
         {children}
       </main>
      </div>
   );
}

export default LayOut;
