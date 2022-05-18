<template>
  <div>
	  <Topnav/>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
			<li>菜单1</li>
			<li>菜单2</li>
		</ul>
    </div>

    <div class="banner">
      <h1>bubble UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default{
	components:{Topnav}
}
</script>

<style lang="scss" scoped>
.topnav{
	background: pink;
	display: flex;
	padding: 16px;
	> .logo{
		max-width: width 6em;
		margin-right: auto;
	}
	> .menu{
		display: flex;
		white-space:nowrap;
		flex-wrap:nowrap;
		> .li{
			margin:0 1em;
		}
	}
}
</style>