import React, { RefAttributes } from 'react'
import ThemeContext from './ThemeContext'
import hoistNonReactStatics from 'hoist-non-react-statics'

export default <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  type ComponentInstance = typeof WrappedComponent
  
  const WithThemeComponent = React.forwardRef<ComponentInstance, P>((props, ref) => {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <WrappedComponent {...props} theme={theme} ref={ref} />
          )}
        </ThemeContext.Consumer>
      )
  })

  hoistNonReactStatics(WithThemeComponent, WrappedComponent)

  WithThemeComponent.displayName = `WithTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithThemeComponent
}