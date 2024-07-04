export default function Pics({ image, altText }) {
    return <div className="pic-container">
    <div className='pic'>
        <img src={image} alt={altText} />
    </div>
    </div>
}
