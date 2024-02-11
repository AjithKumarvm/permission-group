"use client"

import Link from "next/link"
import { usePermissionStore } from "../store"
import { PERMISSION_ROUTES } from "@/app/constants"

const CreatePermissionButton = () => {
  const permissionState = usePermissionStore((state) =>  ({
    resetStore: state.resetStore
  }))
  return <Link href={PERMISSION_ROUTES.CREATE_PERMISSION} onClick={permissionState.resetStore}>
    <button 
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Create a new permission group
    </button>
  </Link>
}

export default CreatePermissionButton