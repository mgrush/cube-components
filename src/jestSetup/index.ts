/**
 * 1. 对通用的beforeEach、afterEach等全局设置进行封装，确保测试文件中只需要关注测试逻辑；
 *
 * Usage:
 * 
 * import React from 'react'
 * import { render } from 'react-dom'
 * import { act } from 'react-dom/test-utils'
 * import { run, getContainerType } from '../jestSetup'
 *
 * run('<Component />', (getContainer: getContainerType) => {
 *    it('should do something', () => {
 *      act(() => {
 *        render(<ComponentName />, getContainer())
 *      })
 *
 *      // expect assertion
 *     })
 * })
 **/ 

import { unmountComponentAtNode } from 'react-dom'

const containerId: string = 'jest-test-container'
const getContainer = (): HTMLElement => {
  return document.getElementById(containerId)
}

export type getContainerType = typeof getContainer

export const run = (
  name: string, 
  fn: (g: getContainerType) => void
): void => {
  describe(name, () => {
    let container: HTMLElement | null = null

    beforeEach(() => {
      container = document.createElement('div');
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    fn(getContainer)
  })
}
