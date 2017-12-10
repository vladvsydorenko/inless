# Inless
Make application `in less` code.

# Get started
To install dependencies
`yarn`

To open electron app
`yarn run app`

There are three application parts - `electron`, `backend`, and `frontend`. Each could be building separately.

To run with watching
 - `yarn run electron:dev` - build and watch for changes electron app
 - `yarn run backend:dev` - build and watch for changes backend
 - `yarn run frontend:dev` - build and watch for changes frontend

To build only
 - `yarn run electron:build` - build electron app
 - `yarn run backend:build` - build backend
 - `yarn run frontend:build` - build frontend

# Nodemon Notes
Nodemon ingores *css.d.ts because otherwise it will cause endless rebuilding because it will update while rollup rebuilding.
