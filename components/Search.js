import Image from 'next/image';
import data from "../data/searchSection.json";


import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import router from 'next/router';
import swal from 'sweetalert';

const Search = () => {
    const [randomId, setRandomId]=useState("")
    const [ok, setOk]=useState(false);



    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(randomId)
        axios.get('http://localhost:3000/api/randomTable',{
            params:{randomId:randomId}
        }).then(res=>{
            console.log(res)
            console.log(res.data.tokenId[0].tokenId)
            
           
            router.push(`/random/${res.data.tokenId[0].tokenId}`)
            console.log("라우터동작")
            
        }).catch(err=>{
            console.log(err.res)
            swal("조회 실패", "해당 코드는 존재하지 않습니다. 다시 확인해 주세요.", "warning");
        })
    }

    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input  
                                    type="text"
                                    value={randomId}
                                    onChange={(e)=>setRandomId(e.target.value)}
                                    placeholder="증명서 공유 코드를 입력해주세요."
                                    required
                                />
                                
                                
                                    <button 
                                        type="submit"
                                    >
                                    증명서 조회하기
                                    </button>
                                
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <Image src="/hero.png" layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Search;