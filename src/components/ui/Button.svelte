<script lang="ts">
	import type { Snippet } from 'svelte';
	import { type HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type ButtonProps = {
		children: Snippet;
		class?: string;
	} & HTMLButtonAttributes;

	let { children, class: className, ...rest }: ButtonProps = $props();
</script>

<button
	class={twMerge(
		'cursor-pointer border border-white bg-black px-[20px] py-[24px] text-[22px] font-normal text-white uppercase transition-all duration-500 hover:bg-white hover:text-black',
		className
	)}
	{...rest}>{@render children?.()}</button
>
