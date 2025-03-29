<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Chapter } from './type';
	import { type HTMLButtonAttributes } from 'svelte/elements';

	let {
		isSelected,
		chapter,
		...rest
	}: { isSelected: boolean; chapter: Chapter } & HTMLButtonAttributes = $props();
</script>

<li>
	<button
		class={twMerge(
			'border-light-gray block w-full cursor-pointer border-b p-3 text-left transition-all duration-200',
			isSelected ? 'border-none bg-black text-white shadow-lg shadow-black/50' : ''
		)}
		aria-controls={`chapter-info-${chapter.number}`}
		aria-expanded={isSelected}
		{...rest}
	>
		<h3>
			Chapter {chapter.number}: {chapter.title}
		</h3>
	</button>
</li>
