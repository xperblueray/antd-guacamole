<template>

    <a-layout id="global-layout">
      <!-- <a-layout-header>Header</a-layout-header> -->

      <a-layout>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <div class="logo">{{ msg }}</div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                <a-icon type="user" />
                <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                <a-icon type="upload" />
                <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                <a-icon type="bar-chart" />
                <span class="nav-text">nav 4</span>
                </a-menu-item>
                <a-menu-item key="5">
                <a-icon type="cloud-o" />
                <span class="nav-text">nav 5</span>
                </a-menu-item>
                <a-menu-item key="6">
                <a-icon type="appstore-o" />
                <span class="nav-text">nav 6</span>
                </a-menu-item>
                <a-menu-item key="7">
                <a-icon type="team" />
                <span class="nav-text">nav 7</span>
                </a-menu-item>
                <a-menu-item key="8">
                <a-icon type="shop" />
                <span class="nav-text">nav 8</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>

        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }" class="display">
                ...
                
                </div>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
            </a-layout>
      </a-layout>


      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>

<script>
export default {
    name: 'GlobalLayout',
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>