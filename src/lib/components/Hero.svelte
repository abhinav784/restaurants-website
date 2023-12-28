<script>
    var show = false;
</script>

<nav class="flex justify-between ">
    <div class="mt-5 w-1/2">
        <img src="tensax/logo.jpg" class="w-40 ml-20 inline-block" alt="">
        <div class="mt-28 ml-20">
            <h1 class="text-7xl text-orange-400">Build AI & Emerging Technologies</h1>
            <p class="mt-5 text-2xl">Revolutionizing the AI & Emeging Technology Development process</p>
            <button class="rounded-md text-white font-semibold hover:bg-orange-600 hover:shadow mt-5 bg-orange-500 px-8 py-4 ">Contact Us</button>
        </div>
    </div>

    <div class="w-1/2">
        <div class="flex absolute  space-x-10 mt-10 font-medium ml-10 text-lg">
            <ul class="flex space-x-10"> 
                <li class="cursor-pointer hover:underline">Home</li>
                <li class="cursor-pointer hover:underline">Products</li>
                <li class="cursor-pointer hover:underline">Industries</li>
                <li on:click={()=>{show = !show}} class="cursor-pointer hover:underline">More</li>
                <div class="w-60 h-60 bg-orange-600 rounded-lg shadow-orange-400 shadow-lg absolute top-8 -right-4 {show? "":"hidden"} "></div>
            </ul>
            <button class="bg-white rounded-full px-5">Contact us</button>
        </div >
        <div class="flex justify-end">
            <img class="w- " src="tensax/bg.png" alt="">
        </div>
    </div>
    
</nav>