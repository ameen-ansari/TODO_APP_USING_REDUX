import React from 'react'
import style from '/styles/Loader.module.css'

function Loader() {
    console.log(document.getElementById('h1LoadingType'));
  return (
    <h1 id='h1' className={style.h1}>Loadding...</h1>
  )
}

export default Loader