"use client"

import { useEffect, useState } from "react"
import { PERMISSION_API, PERMISSION_ROUTES, WORKFLOW_STEPS } from "../../constants"
import Link from "next/link"
import DropDown from "@/components/DropDown"
import { usePermissionStore } from "../store"
import Timeline from "@/components/Timeline"



const Structures = () => {
  const permissionState = usePermissionStore((state) => ({
    structures: state.structures,
    getStructures: state.getStructures,
    structuresLoader: state.structuresLoader,
    getRoles: state.getRoles,
    rolesLoader: state.rolesLoader,
    roles: state.roles,
    setRole: state.setRole,
    setChecked: state.setChecked,
    setAllChecked: state.setAllChecked
  }))
  useEffect(() => {
   !permissionState.structures.length && permissionState.getStructures()
    permissionState.getRoles()
  }, [])


  if (permissionState.structuresLoader) {
    return <div className="p-10">Loading..</div>
  }


  return <div>
    <Timeline steps={WORKFLOW_STEPS} selected={1} />
    <hr className="my-5" />
    <h3 className="p-5 pt-0 pb-0">Which structures would you like to grant access to?</h3>
    <span className="p-5 pt-0 text-xs pb-5">Access is required to at least one structure</span>
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
      <span className="w-32 ml-5 text-xs text-gray-500 text-right">24 structures</span>
    </form>
    <div>
      <div className="flex flex-row bg-slate-100 dark:bg-slate-900 dark:border-black border p-5 py-2 items-center justify-between">
        <div className="flex">
          <input onChange={(e) => permissionState.setAllChecked(!e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <span className="text-xs">Structure</span>
        </div>
        <span className="flex self-center text-xs">Role</span>
      </div>
    </div>
    {permissionState.structures?.map?.(({name, role, checked}, index) => {
      return <div className="flex flex-row top-0 p-5 py-2 items-center justify-between" key={name}>
        <div className="flex">
          <input checked={checked} onChange={(e) => permissionState.setChecked(!checked, index)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <span className="text-xs">{name}</span>
        </div>
        {permissionState.rolesLoader ? '...' : <DropDown options={permissionState.roles} selected={role} onChange={(role) => permissionState.setRole(role, index)} />}
      </div>
    })}

    <hr className="my-5 mt-0" />
    <div className="p-5 pt-0 pb-3 flex flex-row justify-end">
      <Link href={PERMISSION_ROUTES.CREATE_PERMISSION}>
        <button
          className="text-black bg-transparent dark:text-white hover:bg-blue-200 focus:ring-4 border-gray-300 border focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 mb-2 mr-2">
          Go back
        </button>
      </Link>
      <Link href={PERMISSION_ROUTES.ENTITIES}>
        <button
          style={{
            backgroundColor: '#146AA3'
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border font-medium rounded-md text-sm px-4 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Next
        </button>
      </Link>
    </div>
  </div>
}

export default Structures