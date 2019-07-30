import colors from './colors'

export default {
  /* 高度尺寸 */
  smallHeight: '3.6rem',
  mediumHeight: '4.4rem',
  largeHeight: '5.0rem',

  /* 横向留白 */
  smallPaddingH: '1.2rem',
  mediumPaddingH: '1.8rem',
  largePaddingH: '2.4rem',

  /* 字体大小 */
  smallFontSize: '1.3rem',
  mediumFontSize: '1.5rem',
  largeFontSize: '1.7rem',

  /* 按钮圆角 */
  smallBDRadius: '0.4rem',
  mediumBDRadius: '0.8rem',
  largeBDRadius: '1.2rem',

  activeOpacity: 0.8,

  /* variant: plain 类型相关设置 */
  plain: {
    primaryFontColor: colors.primary,
    primaryBGColor: colors.transparent,
    primaryBDColor: colors.transparent,

    succFontColor: colors.succ,
    succBGColor: colors.transparent,
    succBDColor: colors.transparent,

    warningFontColor: colors.warning,
    warningBGColor: colors.transparent,
    warningBDColor: colors.transparent,

    dangerFontColor: colors.danger,
    dangerBGColor: colors.transparent,
    dangerBDColor: colors.transparent,

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.transparent,
    disabledBDColor: colors.transparent
  },

  /* variant: contain 类型相关设置 */
  contain: {
    primaryFontColor: colors.white,
    primaryBGColor: colors.primary,
    primaryBDColor: colors.transparent,

    succFontColor: colors.white,
    succBGColor: colors.succ,
    succBDColor: colors.transparent,

    warningFontColor: colors.white,
    warningBGColor: colors.warning,
    warningBDColor: colors.transparent,

    dangerFontColor: colors.white,
    dangerBGColor: colors.danger,
    dangerBDColor: colors.transparent,

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.disabledColor,
    disabledBDColor: colors.transparent
  },

  /* variant: outline 类型相关设置*/
  outline: {
    primaryFontColor: colors.primary,
    primaryBGColor: colors.transparent,
    primaryBDColor: colors.primary,

    succFontColor: colors.succ,
    succBGColor: colors.transparent,
    succBDColor: colors.succ,

    warningFontColor: colors.warning,
    warningBGColor: colors.transparent,
    warningBDColor: colors.warning,

    dangerFontColor: colors.danger,
    dangerBGColor: colors.transparent,
    dangerBDColor: colors.danger,

    disabledFontColor: colors.disabledFontColor,
    disabledBGColor: colors.transparent,
    disabledBDColor: colors.disabledColor
  }
}
