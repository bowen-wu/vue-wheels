<template>
    <div class="demo">
        <g-button>hello world</g-button>
        啦啦la
    </div>
</template>
<script>
import Button from './button';
export default {
    name: 'bowen-demo',
    components: {
        'g-button': Button
    },
    created() {
        console.log(Button);
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --font-size: 14px;
    --line-height: 32px;
    --color: #333;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --border-color: #999;
    --border-color-hover: #666;
}

body {
    font-size: var(--font-size);
}
</style>

