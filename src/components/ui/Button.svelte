<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { type HTMLButtonAttributes } from 'svelte/elements';
	import { type ClassValue } from 'clsx';

	type ButtonProps = {
		children: Snippet;
		class?: ClassValue;
	} & HTMLButtonAttributes;

	let { children, class: className, ...rest }: ButtonProps = $props();
</script>

<button
	class={cn(
		'border border-white bg-black px-[20px] py-[24px] text-[22px] font-normal text-white uppercase transition-all duration-300',
		className
	)}
	{...rest}>{@render children?.()}</button
>
