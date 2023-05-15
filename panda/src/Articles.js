import {useEffect, useState} from 'react'
import Article from './Article.js'

const Articles = (props) => {
  console.log(props)

  console.log("Props[\"Props:\"]")
  console.log(props["props"])
  
  return (
    <div class="articles">
      {/* Tailwind CSS Table*/}
      <div class="container px-4 mx-auto">
        <div class="flex items-center gap-x-3">
            <h2 class="text-3xl font-medium text-gray-800">Articles & Pragmatic Dimension Scores</h2>
        </div>

        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Article URL </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Data Driven </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500"> Anecdotal </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center  text-gray-500"> Other Pragmatic Dimensions </th>

                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                            {
                            Object.keys(props["props"]).map(key => (
                              <Article props={[key,props["props"][key]]} />
                            ))}                                
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