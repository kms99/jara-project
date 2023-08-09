import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom'

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const menu = [
  "WOMEN", "MAN", "KIDS", "BEAUTY"
]

const NavigationBar = ({setAuthenticate, authenticate}) => {
  const navigate = useNavigate();
  const [width,setWidth] = useState(0);

  const setKeyword = (event)=>{
    if (event.key == "Enter"){
      navigate(`?q=${event.target.value}`)
      setWidth(0);
    }
  }

  return (
    <div>
      <div style={{width : width}} className='side-bar'>
        <button className='close-button' onClick={()=>{setWidth(0)}}>&#215;</button>
        
        <div className='side-search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
          <input placeholder='상품 검색' className='search-input' onKeyDown={setKeyword}/>
        </div>

        {menu.map((menuItem)=>{
          return <button onClick={()=>{setWidth(0)}}>{menuItem}</button>
        })}
      </div>

      <div className='nav-first-line'>
        <FontAwesomeIcon icon={faBars} className='side-menu-icon' onClick={()=>{setWidth(200)}}/>
        {authenticate?(
          <div className='login-area' onClick={()=>{setAuthenticate(false);}}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        )
        :(
          <div className='login-area' onClick={()=>{navigate('/login');}}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>

      <div className='nav-second-line'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png' width='150px' onClick={()=>{navigate('/');}}/>
      </div>

      <div className='nav-third-line'>
        {menu.map((menuItem)=>{
          return <div><a href='#'>{menuItem}</a></div>
        })}
        <div className='search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
          <input placeholder='상품 검색' className='search-input' onKeyDown={setKeyword}/>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
