import Toast from '../components/toast/toast.vue';

let currentToast = null;

export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, userOptions) => {
            // Vue 动态创建实例
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({
                Vue,
                propsData: userOptions,
                message,
                onClose: () => {
                    // 不会多次调用 close()，如果 toast close，则将 toast 置为 null
                    currentToast = null;
                }
            });

        }
    }
}

function createToast({
    Vue,
    propsData,
    message,
    onClose
}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData,
    });
    toast.$slots.default = [message];
    toast.$mount();
    toast.$on('close', onClose);
    document.body.appendChild(toast.$el);
    return toast;
}