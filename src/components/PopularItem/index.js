import {Link} from 'react-router-dom'
import './index.css'

const PopularItem = props => {
  const {popularItem} = props
  const {id, title, posterUrl} = popularItem
  return (
    <Link to={`/movies/${id}`}>
      <li className="popular-li-item">
        <img className="popular-poster" src={posterUrl} alt={title} />
      </li>
    </Link>
  )
}

export default PopularItem
