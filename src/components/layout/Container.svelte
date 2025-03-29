<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let { children, class: className }: { children?: Snippet; class?: string } = $props();
</script>

<section class={twMerge('max-2xl container mx-auto mt-16 p-10', className)}>
	{@render children?.()}
</section>
