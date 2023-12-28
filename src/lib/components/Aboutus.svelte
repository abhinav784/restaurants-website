<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import Heading from './Heading.svelte';
</script>
<div>

    <div>
        <Heading> About <span class="text-black">Tensa</span>X </Heading>
    </div>
    <div class="flex justify-center mt-16 mx-16 space-x-12">

        <div class="w-80">
            {#if browser}
                <Carousel
                duration={1000}
                particlesToShow={1}
                autoplay
                dots={false}
                arrows={false}
                >
                {#each Array(6) as _,i}
                <div class="flex justify-center">

                    <img src="tensax/img{i+1}.png" class="h-60 w" alt="">
                </div>
                {/each}
            </Carousel>
            {/if}
        </div>

        <div class="w-3/5 ">
            <p class="text-gray-600 text-sm font-semibold">
                Established in 2017, TensaX Innovations Pvt. Ltd. is a prominent player in the field of Artificial Intelligence and Emerging Technologies. We offer a wide range of services including Product Development and AI Training Programs, in addition to our core expertise in AI. Our team of experts provides services such as data science, AI engineering, and machine learning development. We also offer pre-built AI models, an AI hub for managing deployed models, and a customized AI data lake for businesses to store and analyze their data.            </p>
        </div>
    </div>
</div>