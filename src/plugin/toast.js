import Toast from '../toast';

export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, userOptions) => {
            // Vue 动态创建实例
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: userOptions,
            });
            toast.$slots.default = [message];
            toast.$mount();
            console.log('toast', toast);
            document.body.appendChild(toast.$el);

        }
    }
}