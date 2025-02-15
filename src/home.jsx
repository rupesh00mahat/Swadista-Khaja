import React, {Fragment} from 'react'
import MainSectionOne from './main-section-one'
import MainShowCase from './main-showcase'
import Main from './main'

function Home() {
  return (
    <Fragment>
      Hello
      <main id="website-main">
        <MainSectionOne />
        <MainShowCase />
      </main>
    <Main/>
    </Fragment>
  )
}

export default Home