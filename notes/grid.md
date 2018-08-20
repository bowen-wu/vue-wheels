## Grid

```
<h2>网格布局</h2>

<div class="box">
    <h3>响应式</h3>
    <div class="box">
        <g-row>
            <g-col span="12" :xs="{span: 24}" :sm="{span: 8}" :md="{span: 10}" :xl="{span: 16}">12</g-col>
            <g-col span="12" :xs="{span: 12, offset: 8}" :sm="{span: 10, offset: 6}" :md="{span: 14}" :xl="{span: 8}">12</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="24" :md="{span: 8}" :sm="{span: 12}">24</g-col>
            <g-col span="24" :md="{span: 8}" :sm="{span: 12}">24</g-col>
            <g-col span="24" :md="{span: 8}" :sm="{span: 12}">24</g-col>
            <g-col span="24" :md="{span: 8}" :sm="{span: 12}">24</g-col>
            <g-col span="24" :md="{span: 8}" :sm="{span: 12}">24</g-col>
        </g-row>
    </div>
</div>

<div class="box">
    <h3>justify content 分布</h3>
    <div class="box">
        <g-row>
            <g-col span="4">4</g-col>
            <g-col span="12">12</g-col>
        </g-row>
        <g-row justify="center">
            <g-col span="4">4</g-col>
            <g-col span="12">12</g-col>
        </g-row>
    </div>
</div>

<div class="box">
    <h3>span 分布</h3>
    <div class="box">
        <g-row>
            <g-col span="2">2</g-col>
            <g-col span="22">22</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="4">4</g-col>
            <g-col span="20">20</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="8">8</g-col>
            <g-col span="16">16</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="12">12</g-col>
            <g-col span="12">12</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="2">2</g-col>
            <g-col span="4">4</g-col>
            <g-col span="6">6</g-col>
            <g-col span="8">8</g-col>
            <g-col span="4">4</g-col>
        </g-row>
    </div>
</div>

<div class="box">
    <h3>add offset</h3>
    <div class="box">
        <g-row>
            <g-col span="2">2</g-col>
            <g-col span="20" offset="2">20</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="4">4</g-col>
            <g-col span="16" offset="4">16</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="6">6</g-col>
            <g-col span="12" offset="6">12</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="8">2</g-col>
            <g-col span="8" offset="8">8</g-col>
        </g-row>
    </div>
    <div class="box">
        <g-row>
            <g-col span="6">12</g-col>
            <g-col span="2" offset="6">2</g-col>
            <g-col span="2" offset="8">2</g-col>
        </g-row>
    </div>
</div>

<div class="box">
    <h3>add gutter</h3>
    <div class="box">
        <g-row gutter="24">
            <g-col>12</g-col>
            <g-col>12</g-col>
        </g-row>
    </div>

    <div class="box">
        <g-row gutter="24">
            <g-col>8</g-col>
            <g-col>8</g-col>
            <g-col>8</g-col>
        </g-row>
    </div>

    <div class="box">
        <g-row gutter="24">
            <g-col>6</g-col>
            <g-col>6</g-col>
            <g-col>6</g-col>
            <g-col>6</g-col>
        </g-row>
    </div>

    <div class="box">
        <g-row gutter="24">
            <g-col span="4">4</g-col>
            <g-col span="6" offset="2">5</g-col>
            <g-col span="12">12</g-col>
        </g-row>
    </div>
</div>
```