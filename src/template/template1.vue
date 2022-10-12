<template>
    <div class="h-full">
        <TopNavbar />
        <AccountType  />
    </div>
</template>

<script>
    import TopNavbar from "@/views/layout/admin/TopNavbar.vue";
    import AccountType from "@/views/layout/admin/AccountType.vue";
    export default {
        name: "Template1",
        components: {
            TopNavbar,
            AccountType
        }
    };
</script>

<style scoped>
</style>