const onDocumentEventHandle = ({target}) => {
    callbackArray.forEach(({el, callback}) => {
        if (!(el === target || el.contains(target))) {
            callback && callback();
        }
    });
}

document.addEventListener('click', onDocumentEventHandle);
let callbackArray = [];

export default {
    bind(el, binding) {
        callbackArray.push({el, callback: binding.value});
    },
}

let removeListener = () => {
    document.removeEventListener('click', onDocumentEventHandle);
}

export {removeListener}

