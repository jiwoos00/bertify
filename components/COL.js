import styles from "./KIP.module.css";
import COL2 from '../components/COL2';
import { useState, useEffect } from "react";



function COL({category, nftlist, mine}){

    const [click, setClick]=useState(false);
    const [cate, setCate]=useState("");


    return (
        (!click)? (
        <div className={styles.colmainContainer}>
            {category.map((token)=>{

                return (
             
                    <div className={styles.colContainer}
                    onClick={()=>{
                        setClick(true)
                        setCate(token.res)
                        console.log(token.res)
                    }}
                    >
                       
                        <div className={styles.desc}>
                            <div className={styles.user}>
                               
                                <div className={styles.coluserText}>
                                    {/*<span>{token.tokenOwner}</span>*/}
                                    <div> {token.res}</div>
                                    
                                </div>
                            </div>
                            <div style={{marginRight:"20px"}}>
                                {/* 아이콘??? */}
                                <p></p>
                            </div>
                        </div>
                    </div>
           
           
                

                )
            })}  

        </div>
        ) :  (
            
            
        <COL2 nftlist={nftlist} category={cate} />
        
        )
    );
}
export default COL;