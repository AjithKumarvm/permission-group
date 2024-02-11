import Timeline from "@/components/Timeline";
import { WORKFLOW_STEPS } from "../constants";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="p-5 pb-0">Create a new permission group</h1>
        <hr className="my-5" />
      {children}
    </div>
  );
}
