import * as components from './components';

const componentsList = components?.default;
const CountAnimation = {
    install(Vue) {
        Vue.component('count-animation', componentsList.CountAnimation);
        Vue.component('CountAnimation', componentsList.CountAnimation);
    }
}

export default CountAnimation