import React from 'react'
import defaultTheme from './defaultTheme'
import { DefaultTheme } from 'styled-components'

export default React.createContext<DefaultTheme>(defaultTheme)
