import {useEffect, useState} from 'react'
import Article from './Article.js'

const Articles = (props) => {
  console.log(props)

  // console.log("Props[\"Props:\"]")
  // console.log("Articles.js props dictionary:")
  // console.log(props["props"])

  // var dimensionList = []
  // for (const [key, value] of Object.entries(props["props"])) {
  //   var dimensions = Object.keys(value);
    
  //   dimensions = dimensions.filter(function (dimension) {
  //       return dimension.includes("Index");
  //   });

  //   for (var i = 0; i < dimensions.length; i++) {
  //       dimensions[i] = dimensions[i].substring(0, dimensions[i].length-5)
  //       if (!dimensionList.includes(dimensions[i])) {
  //         dimensionList.push(dimensions[i])
  //       }
  //   }
  // }

  // console.log("Dimension list: ")
  // console.log(dimensionList)

  const dimensionToSort = props["props"][1]

  var newsArray = Object.entries(props["props"][0]);
  console.log("news array:")
  console.log(newsArray)
  console.log("but lets see the dimension to sort")
  console.log(dimensionToSort)

  var articleOrder = newsArray.map(([title]) => title)
  console.log("old article order: "+articleOrder);

  newsArray.sort((a, b) => {
    const aDimValue = a[1][dimensionToSort];
    const bDimValue = b[1][dimensionToSort];
  
    // Check if the dimension exists in both articles
    if (aDimValue !== undefined && bDimValue !== undefined) {
      return bDimValue - aDimValue;
    } else if (aDimValue !== undefined) {
      return -1; // Place the article with dimension key ahead
    } else if (bDimValue !== undefined) {
      return 1; // Place the article with dimension key ahead
    }
    return 0; // Both articles have missing dimension key, maintain original order
  });

  var articleOrder = newsArray.map(([title]) => title)
  console.log("new article order: "+articleOrder);
  
  return (
    <div className="articles">
      {/* Tailwind CSS Table*/}
      <div className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
            <h2 className="text-3xl font-medium text-gray-800">Articles & Pragmatic Dimension Scores</h2>
        </div>

        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Article URL </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Data Driven </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Anecdotal </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center  text-gray-500"> Other Pragmatic Dimensions </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                            {
                            
                            articleOrder.map(key => 
                              <Article props={[key, props["props"][0][key]]} />)
                              
                            }
                              
                             {/* Object.keys(props["props"][0]).map(key => (
                               <Article props={[key,props["props"][0][key]]} />
                             ))}                                 */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        
      </div>

    </div>
  )
  
}


export default Articles;