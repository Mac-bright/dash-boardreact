import { Link } from 'react-router-dom'
import { menu } from '../../data'
import './menu.scss'

const Menu = () => {
  return (
    <div className='menu'>
      { menu.map((item) => (<div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        <Link to={'/'} className='listItem'>
            <img src="/home.svg" alt="" />
            <span className="listItemTitle">Profile</span>
        </Link>
        {
          item.listItems.map((listitem) => (
            <Link to={'/'} className='listItem' key={listitem.id}>
            <img src={listitem.icon} alt="" />
            <span className="listItemTitle">{listitem.title}</span>
        </Link>
          ))
        }
      </div>
      ))}
    </div>
  )
}

export default Menu