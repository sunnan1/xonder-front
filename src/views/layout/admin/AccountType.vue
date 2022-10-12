<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Start your application</p>
            <p class="mt-2" style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">for a Xonder account</p>

            <p class="mt-5" style="text-align: center;font: normal normal normal 19px/28px Neuzeit Grotesk;letter-spacing: -0.38px;color: #2E304E;opacity: 1;">Select the type of account you would like to open</p>
          <div class="mt-8 mx-8 lg:mx-15 flex flex-wrap">
            <div class="flex items-center justify-center w-1/2 text-center p-4" style="border-radius:100px;background-color: #E8E8E8">
                <router-link :to="{name:'Details'}"><button class="btn" style="border:0px;background-color: #E8E8E8;color: #2E304E;" v-on:click="saveType('sole')"> SOLE TRADER ACCOUNT </button></router-link>
            </div>
            <div class="flex items-center justify-center w-1/2 text-center p-4" style="border-radius:100px;background-color: #E8E8E8">
              <router-link :to="{name:'Details'}"><button class="btn" style="border:0px;background-color: #E8E8E8;color: #2E304E;" v-on:click="saveType('business')"> BUSINESS ACCOUNT </button></router-link>
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
    name: "AccountType",

    methods : {
      saveType(type) {
        sessionStorage.setItem('accountType' , type);
      }
    }
}
</script>

<style>
</style>