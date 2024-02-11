"use client"
import { PERMISSION_ROUTES, ROUTES, WORKFLOW_STEPS } from "../../constants"
import Link from "next/link"
import { usePermissionStore } from "../store"
import Timeline from "@/components/Timeline"


const GroupName = () => {
  const permissionState = usePermissionStore(state => ({
    groupName: state.groupName,
    setGroupName: state.setGroupName
  })) 
  return <div>
    <Timeline steps={WORKFLOW_STEPS} selected={0} />
    <hr className="my-5" />
    <h3 className="p-5 pt-0">Name your permissions group</h3>
    <div className="p-5 pb-0">
      <label htmlFor="group-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permissions group name <span className="text-red-600">*</span></label>
      <input value={permissionState.groupName} type="text" id="group-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Group name" 
      onChange={(e) => permissionState.setGroupName(e.target.value)} />
      <p className="mt-2 text-sm text-black-600 dark:text-white-500">
        A descriptive name will help identify it in the future
      </p>
    </div>
    <hr className="my-5" />
    <div className="p-5 pt-0 pb-3 flex flex-row justify-end">
      <Link href="/">
      <button
        className="text-black bg-transparent dark:text-white hover:bg-blue-200 focus:ring-4 border-gray-300 border focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 mb-2 mr-2">
        Cancel
      </button>
      </Link>
      <Link href={PERMISSION_ROUTES.STRUCTURES}>
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

export default GroupName