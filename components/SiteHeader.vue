<template>
    <div class="shadow navbar bg-base-100">
        <div class="container">
            <div class="flex-1">
                <SiteLogo></SiteLogo>
            </div>
            <div class="flex-none">
                <OrganismsMenuBase :menuItems="navigation"></OrganismsMenuBase>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { navigation } = useAppConfig();
</script>
