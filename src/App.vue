<template>
  <div>导航栏 | 
	  <router-link to="/">jade</router-link> | 
	  <router-link to="/xxx">jade2</router-link>
	  </div>
  <hr />
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
