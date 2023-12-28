<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import Industry from './Industry.svelte';
    import Heading from './Heading.svelte';
    let carousel;

    var industries1=[
        {
            img:"/tensax/photo 1.png",
            title: "AI in Healthcare",
            content:"AI for Diagnosis | Personalised | Medicine | Drug Discovery | Patient Apps"
        },
        {
            img:"/tensax/photo 2.png",
            title: "Office AI",
            content:"Document Intelligence | Personal Assistants | AI Avatars | AI Works OS | Process AI Automation | AI Insights"
        },
        {
            img:"/tensax/photo 3.png",
            title: "Household AI",
            content:"AI Avatars | RLSE | Inventory Management | Domestic Helps | Smart Home | AI Companions"
        },
        {
            img:"/tensax/photo 4.png",
            title: "Fintech & Banking AI",
            content:"AI Investment Algorithum | Anomaly Detection | Document Intelligence | AI Due Diligence"
        },
        {
            img:"/tensax/photo 5.png",
            title: "Education AI",
            content:"AI Tutor | Personalized Education | AI Assessment Intelligence | AI Student Attention Intelligence"
        },
        {
            img:"/tensax/photo 6.png",
            title: "Human Emotion AI",
            content:"Attention | Facial Expression |Speech intelligence | Body language | Emotion AI"
        },
        {
            img:"/tensax/photo 7.png",
            title: "Fashion AI",
            content:"Clothing Try-On | Computer Vision | Body language-Ppse Tracking | 3D Superimposing | AI transfer | AI Recommendtions"
        },
        {
            img:"/tensax/photo 8.png",
            title: "Social Intalligence AI",
            content:"Conversational AI | AI Avatars | Natural Language | Swarm Intelligence | Feedback AI | Emotion AI | Attention AI"
        },
        {
            img:"/tensax/photo 9.png",
            title: "Smart Governance AI ",
            content:"Document intelligence | AI Assistants | AI Avatars | AI Works OS | AI Work Monitoring"
        }]
        var industries2=[
        {
            img:"/tensax/photo 10.png",
            title: "Transpotation AI",
            content:"Self Driving AI | Traffic Grid AI | AI Avatars | Road Safety Camera Vision AI | In-Vehicle AI "
        },
        {
            img:"/tensax/photo 11.png",
            title: "Real Estate AI ",
            content:"Automated Valuation Models (AMVs) | Conversational AI | AI Agents | AI Chatbots"
        },
        {
            img:"/tensax/photo 12.png",
            title: "Factoy AI & RPA",
            content:"Machine intelligence | Reinforcement Learning | Computer Vision | Custom AI"
        },
        {
            img:"/tensax/photo 13.png",
            title: "Energy & Power AI",
            content:"Sun Harvasting | Computer Vision | Concentrated Solar Mirror Control AI | Power Grid AI"
        },
        {
            img:"/tensax/photo 14.png",
            title: "Agriculture AI ",
            content:"Computer Vision Segmentation | Customer Insights+BlockChain | AI Vision Applications"
        },
        {
            img:"/tensax/photo 15.png",
            title: "FoodTech AI",
            content:"Food recomandations |RPA | Customer Feedback | Emotinal AI | Supply Chain AI"
        },
        {
            img:"/tensax/photo 16.png",
            title: "Security & Defence AI ",
            content:"Real Life Search Engine(RLSE) | AI instant Camouflafe | Intruder Detection | AI Object Tracking"
        },
        {
            img:"/tensax/photo 17.png",
            title: "BlockChain",
            content:"Intellectual Property | Security Tokens | Data Integrity | Immutable Data Chain"
        },
        {
            img:"/tensax/photo 18.png",
            title: "Space AI",
            content:"AI Powered Ephemeris | Ai Exoplanet Descovery | AI Vision"
        },
        {
            img:"/tensax/photo 19.png",
            title: "AI for Good-Humanitarian",
            content:"AI in Remote Areas | Embendded AI | CSR REdistribution Management AI"
        },
    ]
</script>
<div class="">
    
    <Heading>
        Explore Tensa<span class="text-black">X AI Industries</span>
    </Heading>
<div class="rounded mx-28 relative">
    <div class="h-full absolute z-10 bg-gradient-to-r from-white to-transparent w-8"></div>
    {#if browser}
        <Carousel
            bind:this={carousel}
            particlesToShow={3}
            duration={1000}
            autoplay
            dots={false}
            arrows={false}
        >
            {#each industries1 as ind}
                <Industry img={ind.img} title={ind.title} content = {ind.content}/>
            {/each}
        </Carousel>
        <Carousel
        bind:this={carousel}
        particlesToShow={3}
        duration={1000}
        autoplay
        dots={false}
        arrows={false}
        >
        {#each industries2 as ind}
        <Industry img={ind.img} title={ind.title} content = {ind.content}/>
        {/each}
        </Carousel>
    {/if}
    <div class="h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-transparent w-8"></div>
</div>
</div>