<template>
    <component :is="computedComponent"
        v-bind="computedProps"
        class="flex items-center gap-x-1 text-base-content">
        <Icon name="mdi:flower-tulip-outline" class="h-6 w-6 text-secondary"></Icon>
        <span class="text-xl font-light">{{ appConfig.siteName }}</span>
    </component>
</template>

<script lang="ts" setup>
type Props = {
    iconOnly?: boolean,
    linked?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    iconOnly: false,
    linked: true,
});

const appConfig = useAppConfig();

const computedComponent = computed(() => {
    if (props.linked) {
        return resolveComponent('NuxtLink');
    }

    return 'span';
});

const computedProps = computed(() => {
    if (props.linked) {
        return {
            to: '/',
        };
    }

    return {};
});
</script>
