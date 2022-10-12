<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Your Details</p>

            <div class="p-10">
                <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-sm text-gray-500">First name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-sm text-gray-500">Email Address <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-sm text-gray-500">Last name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-sm text-gray-500">Phone Number <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered">
                        </div>
                </div>
            </div>
          <div class="mt-8 mx-8 lg:mx-15 flex flex-wrap">
            <a class="block flex items-center justify-center w-full hover:bg-blue-700 p-2 text-md font-semibold text-gray-300 uppercase mt-8" style="background-color:#2E304E;color:white;border-radius:25px;" href="#">
            <span>Continue</span>
            <span class="font-medium text-gray-300 ml-2">➔</span>
          </a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Details",
}
</script>

<style>
</style>