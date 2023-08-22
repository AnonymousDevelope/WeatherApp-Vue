<template>
    <!-- bootstrap spinner -->
    <div class="loading">
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
}
</script>
<style>
    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .loading .spinner-border{
        width: 5rem;
        height: 5rem;
        border-left: var(--primary);
        border-right: var(--primary);
    }
</style>