# Inless
Make application `in less` code.

# Use-cases

## From Node
 - Notify about selected socket
 - Listen to socket selection events. If there is a socket from this node so select it as visual

## Connection process
Connection tool listen for socket selection.
For drag-n-drop it is requried for node to notify about socket selection on mousedown, not on click. Or event better on mouseenter.
Move tool listen for node selection. The same as with connection tool.

from node:selectSocket -> if lineTool active -> from lineTool:socketSelected -> from node:update socket ui

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

# Flow
## Node
Node is a main development block. Node has `input`, `output` and `meta`. 
`Input` and `output` are params and return schema. `Meta` is compile-time data.
Node could return multiply result. For example, if input type is autodetecting and output == input.
Node has a `type` like `function`, `var`, `const` etc.
Node `type` could be determined automatically from input and output. 
If it is a function and `type` is `function<auto(auto)>`. E.g. `function<string(string, string)>`.
If it is a var and `type` is `var<auto>`. E.g. `var<{name:string, age:string, id:string}>`

## Why don't use only input instead of meta?
Meta explicitly shows that data is for compile-time. So there will be no confusion. 
Also data could be just a string, like type, but after compiling it could become into class name or something.

# Sockets
There are few scalar types of sockets - string, number, boolean, enum, date that could be set inline.

# Functions
The main node types is a `function`. Function is described by input, output and meta data.


