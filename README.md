# react-native-animations

## 来源
由于在RN里面，动画这块需要照顾性能。所以设计成可完全序列化的。这样的做法可以脱离JavaScript事件循环，以一种高性能的方式运行。但是却导致这些API让JSer比较难懂。所以写一个平常经常用到的动画的例子。

## 内容
动画主要包括decay，timing，spring三种，而动画是为了交互存在的。所以在这里面新增一个手势动画，为前三者动画和手势事件的关联。同时也简略写了一个手势的例子。

## UI
![UI](https://raw.githubusercontent.com/sanyuelanv/react-native-animations/master/screenshots/1.png)
