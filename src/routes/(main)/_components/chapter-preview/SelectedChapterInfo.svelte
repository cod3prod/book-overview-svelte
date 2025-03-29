<script lang="ts">
	import type { Chapter } from './type';

	let { selectedChapter }: { selectedChapter: Chapter } = $props();
</script>

<div class="w-[55%]">
	<h3 class="mb-4 italic">
		{selectedChapter.title}
	</h3>
	<p>
		{selectedChapter.excerpt}
	</p>
</div>
