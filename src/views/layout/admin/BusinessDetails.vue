<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Business Details</p>

            <div class="p-10">
                <div class="grid gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Business name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="businessName">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Trading Name <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered" v-model="tradingName">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Trading Address <span class="text-red-500">*</span> </label>
                            <textarea class="input" cols="30" rows="20" v-model="tradingAddress"></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Business Description <span class="text-red-500">*</span> </label>
                            <textarea class="input" cols="30" rows="20" v-model="businessDescription"></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Web Address <span class="text-red-500">*</span> </label>
                            <input type="url" class="input input-bordered" v-model="webAddress">
                        </div>
                </div>
            </div>
          <div class="mt-2">
            <a v-on:click="saveDetails" class="block flex items-center justify-center w-full hover:bg-blue-700 p-2 text-md font-semibold text-gray-300 uppercase mt-8" style="background-color:#2E304E;color:white;border-radius:25px;" href="#">
              <span>Continue</span>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "BusinessDetails",
    data () {
        return {
            businessName : '',
            tradingName : '',
            tradingAddress : '',
            businessDescription : '',
            webAddress : '',
        }
    },
    methods : {
        saveDetails() {
            var obj = JSON.parse(sessionStorage.getItem("profile"));
            console.log(obj);
            obj.businessName = this.businessName;
            obj.tradingName = this.tradingName;
            obj.tradingAddress = this.tradingAddress;
            obj.businessDescription = this.businessDescription;
            obj.webAddress = this.webAddress;
            sessionStorage.setItem('profile' , JSON.stringify(obj));
            this.$router.push({name : "BusinessDetails"})
      }
    }
}
</script>

<style>
</style>