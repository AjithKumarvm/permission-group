import React from 'react'
import { MdDone } from 'react-icons/md'

const Timeline = ({
  steps,
  selected
} : {
  steps: {
    value: number,
    name: string,
    completed: boolean
  }[],
  selected: number
}) => {
  return <div className='flex flex-col'>
    <hr className='-mb-4 mt-4 mx-14' />
    <div className='flex flex-row'>
      {steps.map((step, index) => {
        const selectedClass = index === selected ? 'bg-black text-white dark:bg-white' : 'bg-blue-100 text-blue-800 dark:bg-black'
        return <div className='flex mx-5 flex-col items-center' key={step.value}>
            <span className={`${selectedClass}  text-xs font-small min-h-7 flex justify-center w-8 h-8 mb-2 rounded-full items-center overflow-hidden dark:bg-blue-900 dark:text-blue-300`}>
              {selected > index  ? 
                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              : index + 1}
            </span>
            {step.name}
        </div>
      })}
    </div>
  </div>
}

export default Timeline