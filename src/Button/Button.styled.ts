import { 
  colors,
  hairlineWidth
} from '../styled/variables'

const getBorderStyle = (bdColor: string): string => {
  return `${hairlineWidth} solid ${bdColor}`
}

export default {
  /* 高度尺寸 */
  smallHeight: '2.8rem',
  mediumHeight: '3.6rem',
  largeHeight: '4.4rem',

  /* 横向留白 */
  smallPaddingH: '1.2rem',
  mediumPaddingH: '1.8rem',
  largePaddingH: '2.4rem',

  /* 字体大小 */
  smallFontSize: '1.2rem',
  mediumFontSize: '1.4rem',
  largeFontSize: '1.6rem',

  /* 按钮圆角 */
  smallBDRadius: '0.2rem',
  mediumBDRadius: '0.4rem',
  largeBDRadius: '0.6rem',

  activeOpacity: 0.8,

  /* variant: plain 类型相关设置 */
  plain: {
    primaryFontColor: colors.primary,
    primaryBGColor: colors.transparent,
    primaryBorderStyle: getBorderStyle(colors.transparent),

    succFontColor: colors.succ,
    succBGColor: colors.transparent,
    succBorderStyle: getBorderStyle(colors.transparent),

    warningFontColor: colors.warning,
    warningBGColor: colors.transparent,
    warningBorderStyle: getBorderStyle(colors.transparent),

    dangerFontColor: colors.danger,
    dangerBGColor: colors.transparent,
    dangerBorderStyle: getBorderStyle(colors.transparent),

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.transparent,
    disabledBorderStyle: getBorderStyle(colors.transparent)
  },

  /* variant: contain 类型相关设置 */
  contain: {
    primaryFontColor: colors.white,
    primaryBGColor: colors.primary,
    primaryBorderStyle: getBorderStyle(colors.transparent),

    succFontColor: colors.white,
    succBGColor: colors.succ,
    succBorderStyle: getBorderStyle(colors.transparent),

    warningFontColor: colors.white,
    warningBGColor: colors.warning,
    warningBorderStyle: getBorderStyle(colors.transparent),

    dangerFontColor: colors.white,
    dangerBGColor: colors.danger,
    dangerBorderStyle: getBorderStyle(colors.transparent),

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.disabledColor,
    disabledBorderStyle: getBorderStyle(colors.transparent)
  },

  /* variant: outline 类型相关设置*/
  outline: {
    primaryFontColor: colors.primary,
    primaryBGColor: colors.transparent,
    primaryBorderStyle: getBorderStyle(colors.primary),

    succFontColor: colors.succ,
    succBGColor: colors.transparent,
    succBorderStyle: getBorderStyle(colors.succ),

    warningFontColor: colors.warning,
    warningBGColor: colors.transparent,
    warningBorderStyle: getBorderStyle(colors.warning),

    dangerFontColor: colors.danger,
    dangerBGColor: colors.transparent,
    dangerBorderStyle: getBorderStyle(colors.danger),

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.transparent,
    disabledBorderStyle: getBorderStyle(colors.disabledColor)
  }
}
