import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='nav' aria-label='Main Navigation' role='navigation'>
      <ul className='nav-container'>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>Women's</div>
          </Link>
        </li>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>Men's</div>
          </Link>
        </li>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>On The Street</div>
          </Link>
        </li>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>The Catwalk</div>
          </Link>
        </li>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>Adwatch</div>
          </Link>
        </li>
        <li className='links'>
          <Link to='/'>
            <div className='link-name'>About</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
