<template>
    <div class="button-demo">
        <g-button>默认组件</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="true">loading</g-button>
        
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Button from '../../../src/button';
export default {
    components: {
        'g-button': Button,
    },
    data() {
        return {
            content: `
            <g-button>默认组件</g-button>
            <g-button icon="setting">设置</g-button>
            <g-button :loading="true">loading</g-button>
            `.replace(/^\n+|\t+| +/g, '').trim(),
        };
    },
};
</script>


