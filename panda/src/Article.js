const Article = (props) => {

    var dimensions = Object.keys(props["props"][1]);
    
    dimensions = dimensions.filter(function (dimension) {
        return dimension !== "Data DrivenIndex" && dimension !== "AnecdotalIndex" && dimension.includes("Index");
    });

    for (var i = 0; i < dimensions.length; i++) {
        dimensions[i] = dimensions[i].substring(0, dimensions[i].length-5)
    }

    var anecdotal = props["props"][1]["AnecdotalIndex"];
    var data = props["props"][1]["Data DrivenIndex"];

    if (!data || data == ''){
        data = 0
    }

    return (
      <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div className="inline-flex items-center gap-x-3">

                  <div className="flex items-center gap-x-2">
                      {/* <h2 className="font-medium text-gray-800 dark:text-white ">{props["props"][1]["url"]}</h2> */}
                      <a className="font-medium text-gray-800" href={props["props"][1]["url"]}>{props["props"][0]}</a>
                  </div>
              </div>
          </td>
          {data && data !== '' && (<td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{data}</td>)}
          {anecdotal && anecdotal !== '' && (<td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{anecdotal}</td>)}
          <td className="px-4 py-4 text-sm whitespace-nowrap">
              <div className="flex items-center gap-x-2">
                {dimensions.map(key => (
                    key && key !== '' &&  (<p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">{key}: {props["props"][1][key+'Index']}</p>)
                    ))}
                  {/* {historical && historical !== '' &&  (<p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Historical: {historical}</p>)}
                  {statistical && statistical !== '' &&  (<p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Statistical: {statistical}</p>)}
                  {theoretical && theoretical !== '' &&  (<p className="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Theoretical: {theoretical}</p>)} */}
              </div>
          </td>
      </tr>

      // <div className="article">
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