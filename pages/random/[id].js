import Caver from 'caver-js';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import {nfts} from '../../components/MyNFTs';
import styles from "../../styles/id.module.css";
import Image from "next/image";
import {format, formatDistanceToNow} from 'date-fns'
import axios from "axios";
import swal from 'sweetalert';


export const last = (array) => {
    return array?.length? array[array.length-1]:undefined
}

export const len = (array)=> {
    return array?.length? length:undefined
}

const Post = ({account, nftlist, newKip17addr})=>{
    const [token, setToken]=useState([]);
    const [to, setTo]=useState("");
    const router=useRouter();
    const {id}=router.query;
 
    const [title, setTitle]=useState([]);
    const [desc, setDesc]=useState([]);
    const [tag, setTag]=useState([]);
    const [originalOwner, setOriginalOwner]=useState([]);
    const [currentOwner, setCurrentOwner]=useState([]);
    const [isOwner,setOwner]=useState([]);
    const [issueDate, setIssueDate]=useState([]);
    const [issueDateText, setIssueDateText]=useState([]);
    const [photoURL, setPhotoURL]=useState([]);
    const [isSend, setIsSend]=useState(false);
    const [isSendOwner, setIsSendOwner]=useState(false);
    //const [randomId, setrandomId] = useState([]);
    //const [randomId, setRandomId]=useState("")

    useEffect(async()=>{
       
        const tokenContract="";
        tokenContract=await new caver.klay.Contract(nfts.abi, newKip17addr);

        let photo=await tokenContract.methods.getPhoto(id).call();
        setToken({id, photo});
        
        setTitle(photo[3])
        setDesc(photo[4])
        setOriginalOwner((photo[1])[0])
        setOwner(photo[1])
        setCurrentOwner(last(photo[1]))
        setTag(photo[5])

      
        const date1=new Date(photo[6]*1000)
        setIssueDate(format(date1, 'yyyy.MM.dd'))
        setIssueDateText(`${formatDistanceToNow(date1)} ago`)
        setPhotoURL(photo[2])

       
        if (String(last(photo[1])).toLowerCase() === account){
            setIsSendOwner(true)
        }
    
        
    },[]);
    




    const sendToken=async(tokenId)=>{
        const tokenContract="";
        tokenContract=await new caver.klay.Contract(nfts.abi, newKip17addr,{
            from:account,
        });
        tokenContract.options.address=newKip17addr;
        tokenContract.methods
            .transferFrom(account, to, token.id)
            .send({
                from : account,
                gas:0xf4240 //가스비 조정으로 인한 수정
            })
            /*
            .on("receipt",(receipt)=>{
                setTo("");
                router.push("/");
            });
            */
           setIsSend(true)
    
    };


    const rendering = () => {
        
        const leng=isOwner.length
   
        const result=[];
        for (let i=0; i<isOwner.length-1; i++){
            result.push(<div className="upload-button"><br/>transfer : {isOwner[i]} <br/>&gt; {isOwner[i+1]}</div>)
        }
        return result;
        
    };

    const random=(e)=>{
     

          function generateUID() {
            // I generate the UID from two parts here 
            // to ensure the random number provide enough bits.
            var sw= "SW-"; //성희지우
            var firstPart = (Math.random() * 46656) | 0;
            var secondPart = (Math.random() * 46656) | 0;
            firstPart = ("000" + firstPart.toString(36)).slice(-3);
            secondPart = ("000" + secondPart.toString(36)).slice(-3);
            return sw + firstPart + secondPart;
        }

        

        //const random_code=randomId
        //post으로 디비에 넘기기
        const random_code= generateUID()
        swal("증명서 공유 코드: " + random_code, "해당 코드를 복사한 후 메인화면에서 조회하세요.", "success");
        axios.post('http://localhost:3000/api/randomTable',{
            random:random_code,
            tokenId:Number(id),
            
        }).then(res=>{
            console.log(res),
            setRandomId(res.data.random)
            
            
        }).catch(err=>{
            console.log(err.res)
        })



        return random_code;
    }


    return (
    
        <div className={styles.container}>
        
          <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
          
              <div key={token.tokenId} className={styles.tokenContainer}>

                    

                <div className={styles.desc}>
                  <div className={styles.user}>
                    <Image src="/coin.png" width="25px" height="25px"/>
                  </div>
                </div>

                <img
                  src={photoURL}
                  alt={token.id}
                  //onClick="location.href={token.URI}"
                  style={{ width: "100%", height: "93%", objectFit: "fit", borderBottomLeftRadius: "inherit", borderBottomRightRadius: "inherit"}}
                />

              </div>
              
              <div className={styles.tokenContainer3}>
              <div className={styles.tokenTransferContainer}>
                <div className={styles.desc4}>
                    <div>
                        <h3></h3>
                        <div className="tokenTransfer">
                        <img src="/Activity.png" width="170px"/>
                            
                        </div>
                        <br/>
                        <div className="upload-button">
                          Mint : {originalOwner}
                        </div>
                        
                        {rendering()}
                     
                      
                        

                    </div>
                    </div>
                </div>
                </div>

            
              
            </div>




            <div className={styles.tokenTransferContainer2}>
            
           
            <div className={styles.tokenTransferContainer}>

                <div className={styles.label}>
                    <div className={styles.rightlabel1}>{tag}</div>
                    <div className={styles.name}>{title} #{token.id}</div>
                </div>



                <div className={styles.tokenContainer4}>
             
                <div className={styles.desc4}>
               
                <span>· 발급기관 -  </span>
                        <span className={styles.label2}>{originalOwner}</span>
                        <br/>
                        <br/>
                        <br/>
                        
                        <span>· 수령인 -    </span>
                        <span className={styles.rightlabel2}>{currentOwner}</span>
                        <br/>
                        <br/>
                        <br/>
                        <p className={styles.date}>· 발급일자 -  {issueDate}</p>
                      
                        
                    </div>

                    <div className={styles.desc2}>
                  <img src="/Description.png" width="240px"/>
                </div>
                
                    <div>
                        <p className={styles.des}>· {desc}</p>
                        </div>
                

                </div>
                
                

            
               


            </div>
            </div>

          </div>

        </div>
        
     
    );
    
};
    
export default Post;
    
