"use client"

import Timeline from "@/components/Timeline"
import { PERMISSION_ROUTES, WORKFLOW_STEPS } from "../../constants"
import Link from "next/link"
import { usePermissionStore } from "../store"
import { useEffect } from "react"

const Members = () => {
  const permissionState = usePermissionStore(state => ({
    users: state.users,
    usersLoader: state.usersLoader,
    getUsers: state.getUsers,
    selectMember: state.selectMember
  }))
  useEffect(() => {
    !permissionState.users?.length && permissionState.getUsers()
  }, [])
  if(permissionState.usersLoader) {
    return <div className="p-10">Loading..</div>
  }
  return <div>
    <Timeline steps={WORKFLOW_STEPS} selected={3} />
    <hr className="my-5" />
    <h3 className="p-5 pt-0 pb-0">Would you like to add anyone to the new group now?</h3>
    <span className="p-5 pt-0 text-xs pb-5">You can skip this and add members later if you wish</span>

    <form className="flex items-center p-5">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
      </div>
      <span className="w-32 ml-5 text-xs text-gray-500 text-right">0 members</span>
    </form>
    {permissionState.users.map((user, index) => {
      return <div className="border-b">
      <div className="flex flex-row top-0 p-5 py-2 items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm">{user.user}</span>
           <span className="text-xs text-gray-400">{user.email} . {user.organisation}</span>
        </div>
        <span className="flex self-center text-xs">
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" checked={user.selected} className="sr-only peer" onChange={(e) => permissionState.selectMember(e.target.checked, index)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </span>
      </div>
    </div>
    })}
    
    <hr className="my-5 mt-0" />
    <div className="p-5 pt-0 pb-3 flex flex-row justify-end">
      <Link href={PERMISSION_ROUTES.ENTITIES}>
        <button
          className="text-black bg-transparent dark:text-white hover:bg-blue-200 focus:ring-4 border-gray-300 border focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 mb-2 mr-2">
          Go back
        </button>
      </Link>
      <Link href="/">
        <button
          style={{
            backgroundColor: '#146AA3'
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border font-medium rounded-md text-sm px-4 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Create Group
        </button>
      </Link>
    </div>
  </div>
}

export default Members