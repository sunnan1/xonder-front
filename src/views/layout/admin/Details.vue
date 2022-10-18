<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Your Details</p>

            <div class="p-10">
                <div class="grid gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">First name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="firstName">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Email Address <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered" v-model="email">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Last name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="lastName ">
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
          request.saveDetails(JSON.parse(sessionStorage.getItem('profile'))).then(function(res) {
            if (res.data == 1) {
              this.router.push({name : "BusinessDetails"});
            } else {
              alert(res.data);
            }
          });
      }
    },
    mounted() {
      if (sessionStorage.getItem('accountType') != 'business' && sessionStorage.getItem('accountType') != 'sole') {
          this.$router.push({name : "Home"});
      }
    }
}
</script>

<style>
</style>