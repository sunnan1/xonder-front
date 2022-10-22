<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:10%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">Your Details</p>

            <div class="p-10">
                <div class="grid gap-3">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black text-left">Email Address <span class="text-red-500">*</span> </label>
                            <input type="email" class="input input-bordered" v-model="email" v-on:blur="getDetails" maxlength="30">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black text-left">First name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="firstName" maxlength="50">
                        </div>
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black text-left">Last name <span class="text-red-500">*</span> </label>
                            <input type="text" class="input input-bordered" v-model="lastName" maxlength="50">
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
            "email" : this.email,
            'accountType' : sessionStorage.getItem('accountType'),
          }));
          request.saveDetails({
            email : this.email,
            firstName : this.firstName,
            lastName : this.lastName,
            accountType : sessionStorage.getItem('accountType')
          }).then((res) => {
            if (res.data == 1) {
              this.$router.push({name : "BusinessDetails"});
            } else {
              alert(res.data);
            }
          });
      },
      getDetails() {
        request.getDetails({
          email : this.email
        })
        .then((res) => {
          this.firstName = res.data.firstName;
          this.lastName = res.data.lastName;
        })
      }
    },
    mounted() {
      if (! sessionStorage.getItem('accountType')) {
          this.$router.push({name : "Home"});
      }
    }
}
</script>

<style>
</style>