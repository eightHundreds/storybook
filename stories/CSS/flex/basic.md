# 父容器属性


| 属性名          | 默认值     | 说明                                                                                                  |
| --------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| flex-direction  | row        | 默认主轴从左往右                                                                                      |
| flex-wrap       | no-wrap    | 是否换行                                                                                              |
| justify-content | flex-start | 定义主轴上的对齐方式,如果 flex-direction 是 row, 那么就是水平方向上(元素左右位置)的元素之间的对齐方式 |
| align-items     | stretch    | 定义交叉轴上的对其方式                                                                                |
| align-content   | stretch    | 看起来效果与 align-items 一样,但是这个是用于多行(wrap) item 的                                        |
| flex-flow       |            | flex-direction 和 flex-wrap 的简写                                                                    |

# 子容器属性


| 属性名      | 默认值   | 说明                                                                                                |
| ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| flex        | 0 1 auto | 语法`flex:none 或 [felx-grow flex-shrink flex-basis]`                                                  |
| flex-grow   |          | 放大比例                                                                                            |
| flex-shrink |          |                                                                                                     |
| flex-basis  | auto     | 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间,auto意为根据内容来决定大小 |
| align-self  | auto     | 属性允许单个项目单独在侧轴（纵轴）方向上的对齐方式 可覆盖align-items属性                            |

