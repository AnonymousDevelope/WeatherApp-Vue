<template>
    <div class="container ">
        <ul class="navbar-nav d-flex flex-row gap-3">
            <li class="navbar-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/">About</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .navbar-nav li router-link{
        color: var(--white);
        font-family:monospace;
        font-size: 20px;
    }
</style>