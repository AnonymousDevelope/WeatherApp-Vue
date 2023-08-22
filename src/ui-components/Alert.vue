<template>
    <div class="weather-alert">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Alert'
}
</script>
<style>
    .weather-alert{
        width: fit-content;
        padding: 10px;
        background-color: var(--bs-danger);
        color: var(--secondary);
        text-transform: uppercase;
        margin: 20px auto;
        font-size: 2.5rem;
        border-radius: 1rem;
    }
</style>