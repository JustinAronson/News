import {useEffect, useState} from 'react'
import Article from './Article.js'

const Articles = (props) => {
  return (
    props.map(data => { return(
              <Article data={data}/>
    )})
  )
  
}

export default Articles;