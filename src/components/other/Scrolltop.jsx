import React from 'react'
import { Link } from 'react-scroll';

export const Scrolltop = () => {
  return (
    <div>
        <div className="scroll-up position-relative z-index11">
            <Link to="home" smooth={true} duration={800} className="link top text-center"><span className="white-color theme-bg"><i className="fa fa-arrow-alt-up"></i></span></Link>
        </div>
    </div>
  )
}
