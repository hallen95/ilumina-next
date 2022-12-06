export default function NewsCards(props) {
  const { locale } = props
  return (
    <div
      style={
        {
          // ...
        }
      }
    >
      <span>Current Language123: </span>
      <span
        style={
          {
            //...
          }
        }
      >
        {locale}
      </span>
    </div>
  )
}
