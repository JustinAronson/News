const Article = (props) => {

    console.log("In article")
    console.log(props["props"])
    console.log(props["props"][1])
    console.log('Done printing')

    return (
      <div class="article">
        <h3>{props["props"][0]}</h3>
        <p>{props["props"][1]["url"]} </p>
        <p>{props["props"][1]["dataDrivenIndex"]}  </p>
        <p>{props["props"][1]["anecdotalIndex"]}  </p>
      </div>
    )
    
  }
  
  export default Article;