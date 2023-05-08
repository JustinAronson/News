import {useEffect, useState} from 'react'
import Article from './Article.js'

const Articles = (props) => {
  console.log(props)

  console.log("Props[\"Props:\"]")
  console.log(props["props"])
  
  return (
    <div class="articles">
      {
      Object.keys(props["props"]).map(key => (
      <Article key={key} props={props["props"][key]} />
      ))}
    </div>
  )
  
}


export default Articles;