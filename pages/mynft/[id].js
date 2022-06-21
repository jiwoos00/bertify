import axios from "axios";
import Image from "next/image";
import swal from 'sweetalert';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
import {nfts} from '../../components/MyNFTs';
import styles from "../../styles/id.module.css";
import {format, formatDistanceToNow} from 'date-fns'

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
    const [randomId, setRandomId]=useState("");
    const rinkurl = "https://baobab.scope.klaytn.com/account/" + account
   
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
    

    const check = () =>{
        if (to){
            return true;
        }
        return false;
    }

    
    const sendToken=async(tokenId)=>{
        if (check()){
            const tokenContract="";
            tokenContract=await new caver.klay.Contract(nfts.abi, newKip17addr,{
                from:account,
            });

            tokenContract.options.address=newKip17addr;
            const receipt=tokenContract.methods
                .transferFrom(account, to, token.id)
                .send({
                    from : account,
                    gas:0xf4240 //가스비 조정으로 인한 수정
                })
            console.log(receipt) //트랜잭션결과
               
            setIsSend(true)
        }
        else {
            swal("필수항목을 모두 입력하세요.", " ","warning");
        }
    };


    const rendering = () => {
        
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
            
            <div style={{alignContent:"center"}} className="sharebutton">
                <div className="sharebutton">
                    <div className="logout">
                    <a href={photoURL} download target="_blank"><button><img src="/download.png" width="50px" title="증명서 파일"/></button></a>
                    <button onClick={random}>
                        <img src="/share.png" title="증명서 공유" width="50px"/>
                    </button>
                    </div>
                </div>
            </div>


            <div className={styles.tokenTransferContainer}>

                <div className={styles.label}>
                    <div className={styles.rightlabel1}>{tag}</div>
                    <div className={styles.name}>{title} #{token.id}</div>
                </div>

                <div className={styles.tokenContainer4}>
                <div className={styles.desc4}>
               
                    <span>· 발급기관 -  </span>
                    <span className={styles.label2}>
                        <a href={'https://baobab.scope.klaytn.com/account/'+{originalOwner}} download target="_blank" >
                            {originalOwner}</a>
                    </span>

                    <br/><br/><br/>
                      
                    <span>· 수령인 -    </span>
                    <span className={styles.rightlabel2}> <a href={rinkurl}  download target="_blank">
                        {currentOwner}</a> 
                    </span>

                    <br/><br/><br/>

                    <p className={styles.date}>· 발급일자 -  {issueDate}</p>
                </div>

                    
                <div className={styles.desc2}>
                  <img src="/Description.png" width="240px"/>
                </div>
            
                <div>
                    <p className={styles.des}>· {desc}</p>
                </div>
                     

                </div>
                
                

            
                <div className={styles.tokenContainer4}>
                <div className={styles.desc4}>
                { isSendOwner? (
                    <div>
                        <img src="/Send.png" width="140px"/>

                        <div className={styles.tokenTransfer}>
                            <span>From</span>
                            <span className={styles.button}>
                                <span style={{ textOverflow:'ellipsis', overflow:'hidden'}}>{currentOwner}</span>
                            </span>
                            
                        </div>
                        <div className={styles.tokenTransfer}>
                            <span>To</span>
                            <span className={styles.button}>
                         
                                <input
                                    placeholder="Account Address"
                                    value={to}
                                    onChange={(e) => {
                                        setTo(e.target.value);
                                    }}
                                />
                         
                            </span>
                            
                        </div>
                        

                        <div className="sendbutton">
                            { !isSend? (
                            <button 
                                style={{textAlign:'center', backgroundColor:'#525FFB', color:'white'}}
                                onClick={sendToken.bind(this, token.tokenId)}
                            >증명서 전송</button>
                            ):(
                            <button 
                                style={{textAlign:'center', backgroundColor:'#525FFB', color:'white'}}
                                onClick={sendToken.bind(this, token.tokenId)}
                            >증명서 전송 완료</button>
                            )
                            }
                            
                        </div>

                    </div>
                ):(
                  <></>
                )}
                </div>
                
                </div>


            </div>
            </div>

          </div>

        </div>
        
     
    );
    
};
    
export default Post;
    
