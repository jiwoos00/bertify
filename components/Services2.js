import Image from 'next/image';
import data from '../data/services2Section.json';

const Services2 = () => {
    return (
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    {data.blocks.map(managment =>
                        <div className="item" key={managment.id}>
                            <div className="left-side">
                                <Image src={managment.image} alt="Mockup" width={550} height={500} />
                            </div>
                            <div className="right-side">
                                <h3>{managment.title}</h3>
                                <p>{managment.description}</p>
                                <p><b>{managment.description2}</b></p>
                                <a href="https://drive.google.com/file/d/1w0InQ2xvFnIJVZEr8UGPwIYTtRNT7u5S/view?usp=sharing" download target="_blank"><button>양식 다운로드</button></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default Services2;