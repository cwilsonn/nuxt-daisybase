<template>
    <section class="py-8 hero hero--base bg-base-200">
        <div class="container">
            <div class="flex flex-col items-center justify-center gap-y-4">
                <slot name="title">
                    <h1 class="text-4xl font-bold">{{ title }}</h1>
                </slot>
                <div v-if="$slots.default" class="max-w-prose">
                    <slot>
                    </slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
type Props = {
    title?: string;
};

const props = defineProps<Props>();
</script>