<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:5%;border-radius:30px;">
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
                            <textarea cols="30" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="tradingAddress"></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Business Description <span class="text-red-500">*</span> </label>
                            <textarea cols="30" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="businessDescription"></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Web Address <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="webAddress">
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
import request from '../../../api/business/requests';
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
            obj.businessName = this.businessName;
            obj.tradingName = this.tradingName;
            obj.tradingAddress = this.tradingAddress;
            obj.businessDescription = this.businessDescription;
            obj.webAddress = this.webAddress;
            sessionStorage.setItem('profile' , JSON.stringify(obj));
            request.saveDetails(JSON.parse(sessionStorage.getItem('profile'))).then((res) => {
                if (res.data == 1) {
                    this.$router.push({name : "FinancialDetails"});
                } else {
                alert(res.data);
                }
            });
      }
    },
    mounted() {
      if (! sessionStorage.getItem('profile')) {
          this.$router.push({name : "Details"});
      }
    }
}
</script>

<style>
</style>