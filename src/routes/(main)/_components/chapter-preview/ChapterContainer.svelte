<script lang="ts">
	import { Container } from '$components/layout';
	import { chapters } from '$lib/data';
	import ChapterItem from './ChapterItem.svelte';
	import SelectedChapterInfo from './SelectedChapterInfo.svelte';
	import type { Chapter } from './type';

	let selectedChapterNumber = $state(1);
	let selectedChapter = $derived(
		chapters.find((chapter: Chapter) => chapter.number === selectedChapterNumber)
	) as Chapter;

	const selectChapter = (chapter: Chapter) => {
		selectedChapterNumber = chapter.number;
	};
</script>

<Container>
	<h2 class="mb-16">What you're getting</h2>
	<div class="flex justify-between">
		<ul class="w-2/5">
			{#each chapters as chapter}
				<ChapterItem
					isSelected={selectedChapterNumber === chapter.number}
					{chapter}
					onclick={() => selectChapter(chapter)}
				/>
			{/each}
		</ul>
		<SelectedChapterInfo {selectedChapter} />
	</div>
</Container>
