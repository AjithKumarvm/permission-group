import React, { useState } from 'react'

const DropDown = ({
  options,
  selected,
  onChange
}: {
  options: string[],
  selected: string,
  onChange: (option: string) => void
}) => {
  const [show, setShow] = useState(false)
  return <div className="flex self-center text-xs relative">
    <button 
    onClick={() => setShow(!show)}
    id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
    className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1 text-center inline-flex items-center dark:transparent dark:hover:bg-gray-700 dark:focus:ring-blue-800" type="button">
      {selected || 'select'}
      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg>
    </button>

    <div id="dropdown" className={`${show? '' : 'hidden'} z-10 mt-6 right-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        {options?.map((option: string) => {
          return <li key={option} onClick={() => {
            onChange(option)
            setShow(false)
            }}>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{option}</a>
        </li>
        })}
      </ul>
    </div>
  </div>
}

export default DropDown