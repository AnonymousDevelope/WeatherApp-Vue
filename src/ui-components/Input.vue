<template>
    <div class="input-group">
        <input type="text" placeholder="Search . . ." v-model="searchText">
        <button class="btn" @click="search"><i class="bi bi-search"></i></button>
    </div>
</template>

<script lang="js">
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
    name: 'Input',
    data() {
        return {
            searchText: '' // Renamed to avoid conflict with the search method
        };
    },
    methods: {
        search() {
            this.$store.dispatch('getData', this.searchText);
        }
    }
};
</script>

<style scoped>
.input-group {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--white);
}
.input-group input {
    border: none;
    padding: 10px;
    font-family: monospace;
    color: var(--white);
    font-size: 20px;
    outline: none;
    background-color: transparent;
}
.input-group input::placeholder {
    color: var(--white);
}
.btn {
    padding: 10px;
    font-size: 20px;
    color: var(--white);
    border: none;
}
</style>
