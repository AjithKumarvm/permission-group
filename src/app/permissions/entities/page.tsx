import Timeline from "@/components/Timeline"
import { PERMISSION_ROUTES, WORKFLOW_STEPS } from "../../constants"
import Link from "next/link"

const Entities = () => {
  return <div>
    <Timeline steps={WORKFLOW_STEPS} selected={2} />
    <hr className="my-5" />
    <h3 className="p-5 pt-0 pb-0">Which entities would you like to grant access to?</h3>
    <span className="p-5 pt-0 text-xs pb-5">Entity roles have been inherited from structure roles</span>
    
    <hr className="my-5 mt-4" />
    <div className="p-5 pt-0 pb-3 flex flex-row justify-end">
      <Link href={PERMISSION_ROUTES.STRUCTURES}>
      <button
        className="text-black bg-transparent dark:text-white hover:bg-blue-200 focus:ring-4 border-gray-300 border focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 mb-2 mr-2">
        Go back
      </button>
      </Link>
      <Link href={PERMISSION_ROUTES.MEMBERS}>
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

export default Entities