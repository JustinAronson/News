const Article = (props) => {

    console.log("In article")
    console.log(props["props"])
    console.log(props["props"][1])
    console.log('Done printing')

    var historical = props["props"][1]["historicalIndex"];
    var statistical = props["props"][1]["statisticalIndex"];
    var theoretical = props["props"][1]["theoreticalIndex"];
    var anecdotal = props["props"][1]["anecdotalIndex"];
    var data = props["props"][1]["dataDrivenIndex"];

    return (
      <tr>
          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div class="inline-flex items-center gap-x-3">

                  <div class="flex items-center gap-x-2">
                      {/* <h2 class="font-medium text-gray-800 dark:text-white ">{props["props"][1]["url"]}</h2> */}
                      <a class="font-medium text-gray-800 dark:text-white " href={props["props"][1]["url"]}>{props["props"][0]}</a>
                  </div>
              </div>
          </td>
          {data && data !== '' && (<td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{data}</td>)}
          {anecdotal && anecdotal !== '' && (<td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{anecdotal}</td>)}
          <td class="px-4 py-4 text-sm whitespace-nowrap">
              <div class="flex items-center gap-x-2">
                  {historical && historical !== '' &&  (<p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Historical: {historical}</p>)}
                  {statistical && statistical !== '' &&  (<p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Statistical: {statistical}</p>)}
                  {theoretical && theoretical !== '' &&  (<p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Theoretical: {theoretical}</p>)}
              </div>
          </td>
      </tr>

      // <div class="article">
      //   <h3>{props["props"][0]}</h3>
      //   <p>{props["props"][1]["url"]} </p>
        
      //   {data && (<p>Data: {data}</p>)}
      //   {anecdotal && (<p>Anec: {anecdotal}</p>)}
      //   {historical && (<p>Hist: {historical}</p>)}
      //   {statistical && (<p>Stat: {statistical}</p>)}
      //   {theoretical && (<p>Theo: {theoretical}</p>)}
        
      // </div>
    )
    
  }
  
  export default Article;