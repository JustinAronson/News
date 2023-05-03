import {useEffect, useState} from 'react'
import Article from './Article.js'

const Articles = (props) => {
  return (
    <div>
      <p>Enter a Search Term </p>
      {props.data ? <p>{props.data}</p> : null}
    </div>
    )
  }
/*
  return (
    props.map(data => { return(
              <Article data={data}/>
    )})
  )
}
  */

export default Articles;