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
            <h2 class="text-lg font-medium text-gray-800">Articles & Pragmatic Dimension Scores</h2>
        </div>

        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"> Article URL </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"> Data Driven </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"> Anecdotal </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-center  text-gray-500 dark:text-gray-400"> Other Pragmatic Dimensions </th>

                                    <th scope="col" class="relative py-3.5 px-4">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

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