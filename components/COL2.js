import styles from "./KIP.module.css";
import Link from "next/link"

function COL2({ nftlist, category}){
 
    return (
        <div className={styles.mainContainer}>
        
            {nftlist.map((token)=>{
                console.log(category)
                console.log(token.photo[5])
                if (category===token.photo[5]){
                   
                return (
                    
                    <Link href={{
                        pathname : `/mynft/${token.photo[0]}`,
                     
                    }}
                    as={`/mynft/${token.photo[0]}`}
                    >
                    


                    <div className={styles.tokenContainer}>
                        <img
                            src={token.photo[2]}
                            alt={token.photo[2]}
                            style={{width:"100%", height:"80%", objectFit:"fill", 
                                borderTopRightRadius:"inherit", borderTopLeftRadius:"inherit"}}
                        />
                        <div className={styles.desc}>
                            <div className={styles.user}>
                                {/* 아이콘?? */}
                                <div className={styles.userText}>
                                    <span>{token.photo[5]}</span>
                                    <div>{token.photo[3]}  </div>
                                    
                                </div>
                            </div>
                            <div style={{marginRight:"20px"}}>
                                {/* 아이콘??? */}
                                <p></p>
                            </div>
                        </div>
                    </div>
                 </Link>

                )
                }
            })}
  
        </div>
    );
}
export default COL2;