const Article = (props) => {

    console.log("In article")
    console.log(props[1])
    console.log('Printing props[0]')
    console.log(props[0])
    console.log('Done printing')

    return (
      <div class="article">
        <p>{props["props"]}</p>
        {props.key}
      </div>
    )
    
  }
  
  export default Article;