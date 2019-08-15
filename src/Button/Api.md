### Button

| 属性      | 说明                                                      | 类型           | 默认值  |
| --------- | --------------------------------------------------------- | -------------- | ------- |
| type      | 按钮类型，可选 primary / succ / warning / danger 四种类型 | string         | primary |
| size      | 按钮尺寸，可选 small / medium / large 三种尺寸            | string         | medium  |
| variant   | 按钮显示的UI风格，可选 plain / contain / outline           | string         | contain |
| round     | 是否显示圆角按钮                                          | boolean        | false   |
| className | 自定义样式类名                                            | string         | -       |
| disabled  | 按钮是否可用                                              | boolean        | false   |
| loading   | 是否显示加载中，加载中不响应任何点击事件                  | boolean        | false   |
| icon      | 需要在按钮中显示的图标节点，支持图标名称或者资源文件      | string\|object | -       |
| iconPosition | 图标在按钮中显示的位置，支持 left / right |string|left|
| onClick   | 响应按钮点击事件                                          | function       | -       |
| throttle  | 节流时长，在给定的时间内（毫秒）只响应最开始的一次点击    | number         | 500     |
| children | 显示的内容 | node | - |
