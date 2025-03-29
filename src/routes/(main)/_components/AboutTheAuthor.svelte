<script lang="ts">
	import authorPic from '$assets/profile_pic.jpg';
	import Container from '$components/layout/Container.svelte';
</script>

<Container>
	<h2 class="mb-16">About the author</h2>
	<div class="flex justify-between">
		<div class="w-[55%]">
			<p class="mb-2">
				Niklas Fischer is a seasoned expatriate with over seven years of experience living in Spain.
				Originally from New York, John left behind the hustle of corporate America to embrace a more
				fulfilling life on the sun-soaked coasts of Spain. Through his own journey, he has navigated
				the challenges of securing visas, finding the perfect home, and adapting to a new culture,
				making him an expert in the field of relocation.
			</p>
			<p>
				Niklas’ practical advice is rooted in real-life experience, having learned firsthand the
				intricacies of moving to a new country. His goal is to help others avoid common pitfalls and
				make their transition to life in Spain as smooth as possible. When not sharing his
				expertise, John enjoys exploring Spain’s rich culture and history, fully embracing the
				lifestyle he once dreamed of.
			</p>
		</div>
		<img
			class="w-[40%] border-6 border-black shadow-lg shadow-black/50"
			src={authorPic}
			alt="Author Niklas Fischer"
		/>
	</div>
</Container>
