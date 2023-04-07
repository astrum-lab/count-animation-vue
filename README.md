# Count Animation Library

## Introduction
The Animated Number Library is a JavaScript library for animating numbers in React and Vue.js applications. It provides a simple way to animate a number from one value to another with a smooth transition.

## Installation
To install the library, you can use NPM:

``` typescript
npm install count_animation
```

## Usage
To use the Animated Number Library, you need to import the **`AnimatedNumber`** component from the library and use it in your React or Vue.js application.

Here's an example of how to use it in React:

``` jsx
import AnimatedNumber from 'count_animation';

function App() {
  return (
    <div>
      <AnimatedNumber value={42} />
    </div>
  );
}

```

In this example, the **`AnimatedNumber`** component will animate the number from 0 to 42 with a default animation time of 1000 milliseconds.

You can also customize the animation time by passing the **`animationTime`** prop to the component:

``` jsx
import AnimatedNumber from 'count_animation';

function App() {
  return (
    <div>
      <AnimatedNumber value={42} animationTime={2000} />
    </div>
  );
}
```
In this example, the **`AnimatedNumber`** component will animate the number from 0 to 42 with an animation time of 2000 milliseconds.

Contributing
If you want to contribute to the Animated Number Library, you can submit pull requests or issues on our GitHub repository: https://github.com/mkbek/count_animation.

License
The Animated Number Library is licensed under the [MIT License](https://github.com/mkbek/count_animation/blob/main/LICENSE).