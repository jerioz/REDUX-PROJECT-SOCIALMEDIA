import './NotFoundView.styles.scss'
import Photo from '../../assets/notFound.png'

const NotFoundView = () => {
    return (
    <>
    <div className='notFound__container'>
    <img src={Photo} alt='photo' className='notFound__img'/>
    </div>
    </>
    )
}
    
export default NotFoundView