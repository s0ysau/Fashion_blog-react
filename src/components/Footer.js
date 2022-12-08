import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className='footer'>
      <section className='footer-section'>
        <Link to='/'>
          <div className='footer-link'>Home</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>Women's</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>Men's</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>On The Street</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>The Catwalk</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>Adwatch</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>About</div>
        </Link>
        <Link to='/'>
          <div className='footer-link'>Tips</div>
        </Link>
      </section>
      <p className='copyright'>2013 Valet Industries, Inc</p>
    </div>
  )
}
