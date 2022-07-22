
const Header=()=>{
   return(
    <div>
      <div className="title">
         <h1><span>WebDev</span> Newz</h1>
         <p>Keep Up To Date with the latest dev news</p>
       </div>
      <style jsx>
       {`
         .title h1 span{
           color:red;
         }
        `}
       </style>
    </div>
  );
}


export default Header;
