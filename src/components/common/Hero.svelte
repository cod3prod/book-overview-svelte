<script lang="ts">
	import bookCover from '$assets/book_cover.png';
	import phoneCover from '$assets/phone_cover.png';
	import { Button } from '$components/ui';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<section class="flex h-screen overflow-y-hidden">
	<div class="hero-background relative w-1/2 px-4 pt-24 text-center font-bold">
		<h1 class="text-blue-900">MOVE TO</h1>
		<h1 class="mb-2 text-blue-900">SPAIN</h1>
		<h4 class="font-semibold italic">There's no need to make the same mistakes I made.</h4>
		<img
			class="absolute right-[2%] bottom-0 w-[65%] translate-y-[30%] transform"
			src={bookCover}
			alt="book"
		/>
		<img
			class="absolute right-[52%] bottom-0 w-[35%] translate-y-[25%] transform"
			src={phoneCover}
			alt="phone"
		/>
	</div>
	<div class="w-1/2 bg-black px-[5%] py-24 text-center text-white">
		{#if children}
			{@render children()}
		{:else}
			<h1>THIS EBOOK WILL</h1>
			<h1>SAVE YOU MONEY,</h1>
			<h1 class="mb-8">TIME & NERVES</h1>
			<p class="text-light-gray mb-16">
				I moved to Spain seven years ago. The process was painful and difficult. I learned most
				things the hard way: finding a job, getting a visa, calculating my cost of living, choosing
				an apartment. That's why I wrote this e-book, to tell you how I did it. No bullshit, no
				stress.
			</p>
			<Button>Purchase E-book for $10</Button>
		{/if}
	</div>
</section>

<style>
	.hero-background {
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}
</style>
