// Write your code here
import './index.css'
const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="conatiner">
      <div className="c2">
        <img src={imgUrl} alt={name} />
        <h1>{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
