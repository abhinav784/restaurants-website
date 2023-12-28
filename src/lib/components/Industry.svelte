<script>
    export let img, title, content;
  </script>
  
  <div class="flex flex-col w-72 pt-8">
    <img src={img} alt="" class="w-60 mx-auto" />
    <span class="text-center text-gray-800 "><b>{title}</b></span>
    <p class="text-center text-gray-600 text-sm font-semibold px-14">
      {content}
    </p>
  </div>
  