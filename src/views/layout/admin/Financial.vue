<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:5%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Financial Details</p>

            <div class="p-10">
                <div class="grid gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Expected annual turnover (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="expectedTurnOver">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average single payment incoming (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="singlePaymentIncome">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average single payment outgoing (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="singlePaymentOutgoing">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Typical large payment you would receive into account (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="largePaymentReceiveAccount">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Typical large payment you would transfer out the account (£): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="largePaymentTransferAccount">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Average payment volume per week (number of payments in total in/out the account): <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="averageAmountWeek">
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
    name: "FinancialDetails",
    data () {
        return {
            expectedTurnOver : 0,
            singlePaymentIncome : 0,
            singlePaymentOutgoing : 0,
            largePaymentReceiveAccount : 0,
            largePaymentTransferAccount : 0,
            averageAmountWeek : 0,
        }
    },
    methods : {
        saveDetails() {
            var obj = JSON.parse(sessionStorage.getItem("profile"));
            obj.expectedTurnOver = this.expectedTurnOver;
            obj.singlePaymentIncome = this.singlePaymentIncome;
            obj.singlePaymentOutgoing = this.singlePaymentOutgoing;
            obj.largePaymentReceiveAccount = this.largePaymentReceiveAccount;
            obj.largePaymentTransferAccount = this.largePaymentTransferAccount;
            obj.averageAmountWeek = this.averageAmountWeek;
            sessionStorage.setItem('profile' , JSON.stringify(obj));

            this.$router.push({name : "UploadPhoto"});
      }
    },
    mounted() {
      if (sessionStorage.getItem('accountType') != 'business' && sessionStorage.getItem('accountType') != 'sole') {
          this.$router.push({name : "Home"});
      }
      if (! sessionStorage.getItem('profile')) {
          this.$router.push({name : "Details"});
      }
    }
}
</script>