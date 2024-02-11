export const ROUTES = {
  PERMISSIONS: '/permissions'
}

export const PERMISSION_ROUTES = {
  CREATE_PERMISSION: `${ROUTES.PERMISSIONS}/group-name`,
  MEMBERS: `${ROUTES.PERMISSIONS}/members`,
  STRUCTURES: `${ROUTES.PERMISSIONS}/structures`,
  ENTITIES: `${ROUTES.PERMISSIONS}/entities`,
 
}

export const PERMISSION_API = {
  GET_STRUCTURE: `/api/structures`,
  GET_STRUCTURE_ROLES: `/api/structures/roles`,
  GET_USERS: `/api/users`
}

export const WORKFLOW_STEPS = [{
  name: 'Group name',
  value: 0,
  completed: false,
  route: PERMISSION_ROUTES.CREATE_PERMISSION
},
{
  name: 'Structures',
  value: 1,
  completed: false,
  route: PERMISSION_ROUTES.STRUCTURES
},
{
  name: 'Entities',
  value: 2,
  completed: false,
  route: PERMISSION_ROUTES.ENTITIES
},
{
  name: 'Members',
  value: 3,
  completed: false,
  route: PERMISSION_ROUTES.MEMBERS
}]

