<script>
  export var name, country, comment, img;
</script>

<div
  class="w-[370px] h-[300px] rounded-md hover:shadow-2xl relative bg-white text-center"
>
  <img
    class="rounded-full h-28 absolute -top-14 left-1/2 -translate-x-1/2 w-28"
    src={img}
    alt=""
  />
  <h3 class="text-[#01126C] font-semibold text-xl pt-12">{name}</h3>
  <h4 class="text-gray-700">{country}</h4>
  <div class="text-[#0A7BC9] py-4">
    <i class="fa-solid fa-star" />
    <i class="fa-solid fa-star" />
    <i class="fa-solid fa-star" />
    <i class="fa-solid fa-star" />
    <i class="fa-solid fa-star text-blue-200" />
  </div>
  <p
    class=" px-8 text-gray-600
        "
  >
    {comment}
  </p>
</div>
