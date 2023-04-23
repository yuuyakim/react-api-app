import React, { useEffect, useState } from "react"

import { execTest } from "./lib/api/test"
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";

// const App: React.FC = () => {
//   const [message, setMessage] = useState<string>("")

//   const handleExecTest = async () => {
//     const res = await execTest()

//     if (res.status === 200) {
//       setMessage(res.data.message)
//     }
//   }

//   useEffect(() => {
//     handleExecTest()
//   }, [])

//   return (
//     <h1>{message}</h1>
//   )
// }

const App: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App