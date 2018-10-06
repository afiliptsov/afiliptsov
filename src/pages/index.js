import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'

const IndexPage = () => (
  <Layout style={{ width: '100vw' }}>
    <header style={{
      clipPath: "polygon(0 0, 100% 0, 100% 71%, 0 100%)",
      backgroundColor: "orange",
      width: "100vw"
    }}>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
      <Link to="/page-2/">Go to page 2</Link>
    </header>
  </Layout>
)

export default IndexPage
