<template>
    <div class="max-w-3xl mx-auto my-12 bg-white px-8" style="margin-top:5%;border-radius:30px;">
    <div class="relative block md:flex items-center">
      <div class="w-full relative z-0 md:px-0 md:py-10 text-center">
            <p style="text-align: center;font: normal normal bold 35px/40px Neuzeit Grotesk;letter-spacing: -1.05px;color: #2E304E;">License</p>
            <div class="p-10">
                <div class="grid gap-3">
                    <form @submit="formSubmit" enctype="multipart/form-data">
                        <div class="form-control">
                            <label class="font-bold mb-2 text-black">Full / Provisional Driving License <span class="text-red-500">*</span> </label>
                            <input type="file" ref="fileInput" @input="pickFile" class="input input-bordered" v-on:change="onImageChange">
                        </div>
                        <div class="mt-2">
                            <button style="background-color:#2E304E;color:white;border-radius:25px;" class="block flex items-center justify-center w-full hover:bg-blue-700 p-2 text-md font-semibold text-gray-300 uppercase mt-8">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '../../../api/business/requests';
export default {
    name: "License",
    data () {
        return {
            image: '',
        }
    },
    methods : {
        onImageChange(e){
        console.log(e.target.files[0]);
            this.image = e.target.files[0];
        },
        formSubmit(e) {
            var obj = JSON.parse(sessionStorage.getItem('profile'));
            e.preventDefault();
            let formData = new FormData();
            formData.append('image', this.image);
            formData.append('email', obj.email);
            request.saveLicense(formData)
            .then((res) => {
                if (res.data == 1) {
                    this.$router.push({name : "UploadPermits"});
                }
                else {
                    alert(res.data)
                }
            })
            .catch(function (error) {
            });
        },
    },
    mounted() {
      if (! sessionStorage.getItem('profile')) {
          this.$router.push({name : "Details"});
      }
    }
}
</script>