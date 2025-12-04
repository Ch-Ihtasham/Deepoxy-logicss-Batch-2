make a foler and a seprate context file where we will create the context and export

come to main file (app.js ,home.jsx ,contact us)
import the context you have create  (address of the context file)
make the states which you are going to use
const number=1

we have to provide this states/values to the components
<context.provider value={{number}}>


come to the component where we have to use these states (number1)

import usecontext
import contextfile

now we have to store the value in new varible
const num=usecontext(contextfile)


{num}