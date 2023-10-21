import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeLeftbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightBar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-container">
          <div className="controller-text-container">
            <h1>Layout</h1>
            <div className="elements-container">
              <input
                checked={showContent}
                onChange={onChangeContent}
                type="checkbox"
                id="content"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="elements-container">
              <input
                checked={showLeftNavbar}
                onChange={onChangeLeftbar}
                type="checkbox"
                id="leftnavbar"
              />
              <label htmlFor="leftnavbar">Left Navbar</label>
            </div>
            <div className="elements-container">
              <input
                checked={showRightNavbar}
                onChange={onChangeRightBar}
                type="checkbox"
                id="rightnavbar"
              />
              <label htmlFor="rightnavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
