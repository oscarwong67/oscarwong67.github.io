import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer';
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{
    //backgroundColor: '#ffd1dc',
    backgroundColor: '#aec6cf',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Oscar Wong\'s portfolio site,' },
        { name: 'keywords', content: 'Oscar Wong, developer, engineer, software engineer' },
      ]}
    />
    <div
      style={{
        padding: '0px 1.0875rem 1.45rem',
        paddingBottom: 40,
      }}
    >
      {children()}
    </div>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
