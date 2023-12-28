<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import Heading from "./Heading.svelte";

    var carousel;

    
</script>

<div class=" p-4 ">
    <Heading>
        <span class="text-black">Partner</span> with us to <span class="text-black">build technology</span>
    </Heading>
    <div class="flex space-x-40 mt-8">
        <div class="relative flex mt-10 ml-20 w-fit items-center">
            <div class="items-center space-y-2 w-fit">
                <img src="tensax/1.jpg" class="h-44 rounded-[4rem]" alt="">
                <img src="tensax/2.jpg" class="h-44 rounded-[5rem]" alt="">
            </div>
            <div class="space-y-8 w-fit ">
                <img src="tensax/3.jpg" class="h-44 rounded-[5rem] m-auto" alt="">
                <div class="space-y-2 w-56 text-[11px] ml-4">
                    <p>
                        <i class="fa-solid fa-check"></i>Artificial Intelligence & Emerging Technologies
                        </p>
                        <p>
                        <i class="fa-solid fa-check"></i>AGILE + Scrum work process
                    </p>
                    <p>
                        <i class="fa-solid fa-check"></i>Project Delivery Guarantee & Project Insurance
                    </p>
                    <p>
                        <i class="fa-solid fa-check"></i>Work directly with team
                    </p>
                </div>
                <img src="tensax/4.jpg" class="h-44 rounded-[4rem] m-auto" alt="">
            </div>
            <div class=" w-fit  space-y-2">
                <img src="tensax/5.jpg" class="h-44 rounded-[5rem]" alt="">
                <img src="tensax/6.jpg" class="h-44 rounded-[4rem]" alt="">
            </div>
        </div>
        <div class="bg-orange-400 rounded-2xl py-10 px-8 text-xl space-y-12 ">
            <div class="bg-white p-8 space-y-6 h-full rounded-xl">
                <p class="w-96 text-base text-justify">TensaX Innovation Lab's Global Partnership Program offers the chance to collaborate and learn about emerging technologies, specifically AI, for mutual business growth.</p>
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" class="mt-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Name">
                </div>
                <div>
                    <label for="org" class="block text-sm font-medium text-gray-700">Organization</label>
                    <input type="text" class="mt-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Organization">
                </div>
                <div class="flex space-x-3 w-full">
                    <div class="w-full">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" class="mt-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Email">
                    </div>
                    <div class="w-full">
                        <label for="email" class="block text-sm font-medium text-gray-700">Phone no.</label>
                        <input type="text" class="mt-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Phone">
                    </div>
                </div>
                <!-- <a href="/#" class="bg-orange-500 hover:shadow hover:bg-orange-600 p-6 rounded-2xl text-xl text-white font-semibold">Submit</a> -->
                <div class="flex justify-center">
                    <button class="mt-3 bg-orange-500 hover:bg-orange-600 hover:shadow p-2 px-16 rounded-2xl text-base text-white">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mx-32 mt-8 ">
    <p class="text-gray-700 text-left font-semibold text-3xl">People we’ve worked with</p>
    <p class="text-gray-500 text-left font-semibold text-sm">
        We strongly believe in building strategic pafinerships with young entrepreneurs, companies, and individuals. We plan to have a global presence, so we welcome associations and pafinerships from across the globe.
    </p>
    <div class='relative'>

        <div class="h-full absolute z-10 bg-gradient-to-r from-white to-transparent w-16"></div>
        {#if browser}
        <Carousel
        bind:this={carousel}
        particlesToShow={4}
        autoplayDuration={0}
        
        duration={2000}
        autoplay
        timingFunction="linear"
        dots={false}
        arrows={false}
        swiping={false}
        >
        {#each Array(13) as _, i}
        <img class=" h-28 mx-10" src="tensax/c{i+1}.jpg" alt="">
        {/each}
    </Carousel>
    {/if}
    <div class="h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-transparent w-16"></div>
</div>

</div>