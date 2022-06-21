import 'bootstrap/dist/css/bootstrap.css';
import data from "../data/uploadData.json";
import Image from 'next/image';
import styles from "../styles/create.module.css";
import { Icon } from "semantic-ui-react";

import {nfts} from '../components/MyNFTs';

import { useState } from "react";
import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import swal from 'sweetalert';




export default function upload({ caver, account, newKip17addr }) {
  const [fileUrl, updateFileUrl]=useState(``);
  const [nftName, setNftName]=useState("");
  const [nftDesc, setNftDesc]=useState("");
  const [category, setCategory]=useState("");
  const [nftSup, setNftSup]=useState("");
  const [isMint, setIsMint]=useState("");
  
  const [image, setImage]=useState(null);
  const client = create("https://ipfs.infura.io:5001/api/v0");


  const check = () =>{
    if (nftName && nftSup && fileUrl &&category){
      return true;
    }
    return false;
  }



  const onChange = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    try {
      const added=await client.add(file);
      const url=`https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch(error) {
      console.log("uploading file error : ",error);
    }
  };

  const onChange2 = async () => {
    var selected=document.getElementById("category");
    var selected_id=selected.options[selected.selectedIndex].value;
    var selected_name=selected.options[selected.selectedIndex].text;
    console.log("name:"+selected_name);

    setCategory(selected_name)
  };




  const createNFT = async () =>{

    let tokenContract;
    tokenContract=await new caver.klay.Contract(nfts.abi, newKip17addr,{
      from : account,
    });
    tokenContract.options.address=newKip17addr;
    console.log(tokenContract)
    console.log(category+"dkfjd")
    if (check()){
      const newTokenId=await tokenContract.methods.uploadPhoto(fileUrl,nftName,nftDesc,category)
      .send({
        from:account, gas:0xf4240});
      setIsMint(true);
      updateFileUrl("");
      setNftName("");
      setNftDesc("");
      setCategory("");
      setIsMint("");
    }
    else {
      swal("필수항목을 모두 입력하세요.", " ","warning");
    }
  

  };

  
  

  return (
    <>
    <section className="upload-section">
      <div className="container-upload">

        <div className="content-uplaod">
          <div className="upload-title">
            <h1>증명서 발행</h1>
          </div>

          <form className="upload-main">
            <p className="required">
                <span className="require" >* </span>
                필수 항목
            </p>

            <div>
                <label>Image / 이미지<span className="require"> *</span></label>
                <p>{data.info0}</p>
                <p>{data.info5}</p>
            
                <br></br>

                <div className={styles.selectFile}>
                  <label for="fileInput" className="file-button">
                    {image? (
                    <>
                      <img for="fileInput" src={image} alt="preview" /> 
                      <button 
                      className={styles.deleteFile}
                      onClick={()=> { setImage(""); updateFileUrl("")}}
                      >X</button>
                    </>
                    ) : <Image src="/loading.gif" width="300px" height="300px"/>}
                  </label>
                  <input type="file" name="file" onChange={onChange} id="fileInput"  />
                  
                </div>
                <p>{data.info1}</p>
                <div className="ipfs">{fileUrl? <div>IPFS Link: {fileUrl}</div> : ""}</div>
            </div>

            {/*<UploadFile imageURI={imageURI} setImageURI={setImageURI}/>*/}


            
            <div>
                <label>Name / 이름<span className="require"> *</span></label>
                <div class="form-group">
                    <input 
                    type="text" 
                    class="form-control input-lg"
                    placeholder="Item name"
                    onChange={(e)=>{setNftName(e.target.value);}}
                    required
                    value={nftName}
                    ></input>
                </div>
            </div>

            <div>
                <label>Description / 설명 </label>
                <p>{data.info2}</p>
                <div class="form-group">
                    <textarea 
                    class="form-control input-lg"
                    rows="3"
                    placeholder="증명서에 대한 상세설명을 작성해주세요."
                    onChange={(e)=>{setNftDesc(e.target.value);}}
                    required
                    value={nftDesc}
                    ></textarea>
                </div>
            </div>



            <div>
                <label>Category / 종류<span className="require"> *</span></label>
                <p>{data.info1}</p>
                <div>
                    <select 
                    id="category"
                    class="form-control"
                    onChange={onChange2}
          
                    >
                        <option value="0">선택하세요</option>
                        <option value="1">졸업증명서</option>
                        <option value="2">상장/임명장</option>
                        <option value="3">자격증</option>
                        <option value="4">기타</option>

                    </select>
                </div>
            </div>




            <div>
                <label>Supply / 발행 수<span className="require"> *</span></label>
               
                <div>
                    <input 
                        type="text" 
                        class="form-control input-lg"
                        placeholder="1"
                        onChange={(e)=>{setNftSup(e.target.value);}}
                        required
                        value={nftSup}
                    ></input>
                </div>
            </div>

            <div>
                <label>Blockchain</label>
                <div>
                    <div className="box">
                        
                        <Image src="/coin.png" width="40px" height="25px"/>
                        <div style={{margin : "10px"}}>Baobab</div>
                    </div>
                    
                </div>
                
            </div>
          </form>
          
            <div className="upload-button">
                <div className="upload-button2">
                    <div className="logout">
                        <button
                          onClick={createNFT}
                        >
                          create NFT
                        </button>
                       
                    </div>
                </div>
                
                {isMint? (
                  <button style={{textAlign:'center', backgroundColor:'#525FFB', color:'white'}}>NFT 발행 성공</button>
                  
                ): ( 
                  ""
                )}
            </div>

        </div>
        
      </div>
    </section>
    </>
  );
}
