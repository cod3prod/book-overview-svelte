<script lang="ts">
	import twitterIcon from '$assets/icons/twitter.webp';
	import { Button } from '$components/ui';
	import FaqItem from './FaqItem.svelte';
	import { faqs } from '$lib/data';

	let selectedQuestion = $state(-1);

	const handleClick = (index: number) => {
		if (selectedQuestion === index) {
			selectedQuestion = -1;
		} else {
			selectedQuestion = index;
		}
	};
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently asked questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FaqItem {faq} isSelected={index === selectedQuestion} onclick={() => handleClick(index)} />
		{/each}
	</div>
	<div class="additional-info mt-m">
		<Button class="mt-s">BUY NOW</Button>
		<p class="mt-m">Any other questions?</p>
		<a href="https://x.com/KIZO_ES">
			<p>
				Hit me up on twitter <img src={twitterIcon} class="twitter-icon" alt="" />
			</p></a
		>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
	}

	.twitter-icon {
		width: 16px;
		height: 16px;
	}

	.additional-info a {
		text-decoration: underline;
	}
</style>
