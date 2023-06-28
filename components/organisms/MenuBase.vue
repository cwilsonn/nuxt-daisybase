<template>
    <ul class="px-2 menu menu-horizontal gap-x-2">
        <li v-for="item in menuItems">
            <NuxtLink class="flex items-center gap-x-1" :to="item.to">
                <Icon v-if="item.icon" :name="item.icon" class="w-4 h-4"></Icon>
                <span>{{ item.title }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>
type MenuItem = {
    title: string;
    to?: string;
    icon?: string;
    children?: MenuItem[];
};

type Props = {
    menuItems: MenuItem[];
};

const props = defineProps<Props>();
</script>
