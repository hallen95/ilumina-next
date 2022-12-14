import { useTranslation } from 'next-i18next'
import Bubble from '../Bubble/Bubble'

const BubblesContainer = () => {
  const { t } = useTranslation('common')

  return (
    <div className="bubblesContainer">
      <div className="bubblesContainer__item">
        {t('bubbles', { returnObjects: true }).map((bubble) => (
          <Bubble
            id={bubble.id}
            bubble_area_message={bubble.bubble_area_message}
            bubble_message={bubble.bubble_message}
            path={bubble.path}
          />
        ))}
      </div>
    </div>
  )
}

export default BubblesContainer
