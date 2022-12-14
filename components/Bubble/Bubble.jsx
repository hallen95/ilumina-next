import style from './Bubble.module.scss'

const Bubble = ({ id, bubble_message, path, bubble_area_message }) => {
  return <div className={style.bubble}>{bubble_message}</div>
}

export default Bubble
