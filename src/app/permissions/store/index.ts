import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { } from '@redux-devtools/extension' // required for devtools typing
import { PERMISSION_API } from '@/app/constants'
import { immer } from 'zustand/middleware/immer'


interface PermissionState {
  groupName: string,
  structures: {
    name: string,
    role: string
  }[],
  structuresLoader: boolean,
  roles: string[],
  rolesLoader: boolean,
  users: {
    user: string,
    email: string,
    organisation: string
  }[],
  usersLoader: boolean,
  getRoles: () => void,
  getStructures: () => void
  setRole: (selectedRole: string, index: number) => void,
  setGroupName: (groupName: string) => void
  getUsers: () => void,
  resetStore: () =>  void
}

const initialState = {
  structures: [],
  roles: [],
  structuresLoader: false,
  rolesLoader: false,
  groupName: "",
  users: [],
  usersLoader: false
}

export const usePermissionStore = create<PermissionState>()(persist(immer(
  devtools(
      (set, get) => ({
        ...initialState,
        resetStore: () => {
          set({
            ...initialState
          })
        },
        getStructures: async () => {
          set({
            structuresLoader: true
          })
          try {
            const res = await fetch(`${PERMISSION_API.GET_STRUCTURE}`)
            const data = await res.json()
            set({
              structures: data.map((name: {
                name: string
                role: string
              }) => ({
                name,
                role: "No access"
              }))
            })
          } finally {
            return set({
              structuresLoader: false
            })
          }
        },
        getRoles: () => {
          set({
            rolesLoader: true
          })
          fetch(`${PERMISSION_API.GET_STRUCTURE_ROLES}`)
          .then((res) => res.json())
          .then((data) => {
            set({
              roles: data
            })
          }).finally(() => set({rolesLoader: false}))
        },
        setRole: (selectedRole, selectedIndex) => {
          console.log('setRole', selectedRole, selectedIndex)
          set({
            structures: get().structures.map((str, index) => ({
              ...str,
              role: index === selectedIndex ? selectedRole: str.role
            }))
          })
        },
        setGroupName: (groupName) => {
          set({
            groupName
          })
        },
        getUsers: () => {
          set({
            usersLoader: true
          })
          fetch(`${PERMISSION_API.GET_USERS}`)
          .then((res) => res.json())
          .then((data) => {
            set({
              users: data
            })
          }).finally(() => set({usersLoader: false}))
        }
      }),
    {
      name: 'permission',
      store: 'permission store'
    },
  )
),
{
  name: 'permission-storage',
},
))