// 计算可以显示的最细边框
export const hairlineWidth = ((devicePixelRatio) => {
  if (devicePixelRatio && devicePixelRatio >= 2) {
    let testElem = document.createElement('div')

    testElem.style.border = '0.5px solid transparent'
    document.body.appendChild(testElem)

    return testElem.offsetHeight === 1 ? '0.5px' : '1px'
  }
})(window.devicePixelRatio)

// Colors
export const colors = {
  primary: '#218FFF',
  succ: '#40A9FF',
  warning: '#FAAD14',
  danger: '#F5222D',

  white: '#FFF',

  disabledColor: '#E7ECF3',
  disabledFontColor: '#C5C4D6',

  borderColor: '#EEF1F8',
  transparent: 'transparent'
}
