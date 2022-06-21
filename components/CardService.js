import Image from 'next/image';

const CardService = ({ id, icon, title, description,description2 }) => {
    return (
        <div className="card" id={id}>
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="info">
                <h3>{title}</h3>
                <h5>{description}</h5>
                <p>{description2}</p>
            </div>
        </div>
    )
}

export default CardService;