import React from 'react'
import ThemeContext from './ThemeContext'
import hoistNonReactStatics from 'hoist-non-react-statics'

const getDisplayName = (WrappedComponent: React.ComponentType) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  const WithThemeComponent: React.FC<P> = (props: P) => (
    <ThemeContext.Consumer>
      {theme => (
        <WrappedComponent {...props} theme={theme} />
      )}
    </ThemeContext.Consumer>
  )

  hoistNonReactStatics(WithThemeComponent, WrappedComponent)

  WithThemeComponent.displayName = `WithTheme(${getDisplayName(WrappedComponent)})`

  return WithThemeComponent
}
