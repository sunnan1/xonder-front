<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Complete Profile</p>

            <div class="p-10">
                <div class="grid gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">First name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="firstName" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Email Address <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered" v-model="email" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Last name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="lastName " readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Business name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="businessName" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Trading Name <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered" v-model="tradingName" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Trading Address <span class="text-red-500">*</span> </label>
                            <textarea cols="30" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="tradingAddress" readonly></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Business Description <span class="text-red-500">*</span> </label>
                            <textarea cols="30" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="businessDescription" readonly></textarea>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Web Address <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="webAddress" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Expected annual turnover (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="expectedTurnOver" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average single payment incoming (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="singlePaymentIncome" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average single payment outgoing (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="singlePaymentOutgoing" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Typical large payment you would receive into account (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="largePaymentReceiveAccount" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Typical large payment you would transfer out the account (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="largePaymentTransferAccount" readonly>
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average payment volume per week (number of payments in total in/out the account): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="averageAmountWeek" readonly>
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
    name: "Details",
    data () {
        return {
            firstName : '',
            lastName : '',
            email : '',
        }
    },
    methods : {
      saveDetails() {
          sessionStorage.setItem("profile" , JSON.stringify({
            "firstName" : this.firstName,
            "lastName" : this.lastName,
            "email" : this.email,
            'accountType' : sessionStorage.getItem('accountType'),
          }));
          request.saveDetails(JSON.parse(sessionStorage.getItem('profile'))).then((res) => {
            if (res.data == 1) {
              this.$router.push({name : "BusinessDetails"});
            } else {
              alert(res.data);
            }
          });
      }
    },
    mounted() {
      if (! sessionStorage.getItem('profile')) {
          this.$router.push({name : "Details"});
      } else {
        var obj = JSON.parse(sessionStorage.getItem("profile"));
        request.getDetails({
            email : obj.email
        }).then((res) => {
            console.log(res.data)
        });
      }
    }
}
</script>

<style>
</style>