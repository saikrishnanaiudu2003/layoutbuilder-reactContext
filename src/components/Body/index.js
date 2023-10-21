// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          <div>
            {showLeftNavbar ? (
              <div className="left-navbar">
                <h1 className="head">Left Navbar Menu</h1>
                <ul className="lists">
                  <li className="item">Item 1</li>
                  <li className="item">Item 2</li>
                  <li className="item">Item 3</li>
                  <li className="item">Item 4</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div>
            {showContent ? (
              <div className="content">
                <h1 className="head">Content</h1>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Utenim ad minim veniam.
                </p>
              </div>
            ) : null}
          </div>
          <div>
            {showRightNavbar ? (
              <div className="right-navbar">
                <div className="navbar-items">
                  <h1 className="head">Right Navbar</h1>
                  <div className="right-items">
                    <p>Ad 1</p>
                  </div>
                  <div className="right-items">
                    <p>Ad 2</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
