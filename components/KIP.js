import styles from "./KIP.module.css";
import Link from "next/link"
import {format, formatDistanceToNow} from 'date-fns'



function KIP({nftlist, mine}){
    console.log(nftlist)
    return (
        <div className={styles.mainContainer}>
        
            {nftlist.map((token)=>{

                return (
                    <Link href={mine? `/mynft/${token.tokenId}`:`/nfts/${token.tokenId}`}> 
                    {/* 링크 - mynft로 연결해야 함, 백엔드도 ,, */}
                    
                    <div key={token.tokenId} className={styles.tokenContainer}>
                        <img
                            src={token.photo[2]}
                            alt={token.tokenId}
                            style={{width:"100%", height:"80%", objectFit:"fill", 
                                borderTopRightRadius:"inherit", borderTopLeftRadius:"inherit"}}
                        />
                        <div className={styles.desc}>
                            <div className={styles.user}>
                                {/* 아이콘?? */}
                                <div className={styles.userText}>
                                    <span>{token.photo[5]}</span>
                                    <div>{token.photo[3]} #{token.tokenId} </div>
                                    
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
            })}
  
        </div>
    );
}
export default KIP;