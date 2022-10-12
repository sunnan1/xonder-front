<template>
   <nav 
      class="flex flex-wrap items-center justify-between z-50 px-2 py-3 bg-white mb-7 shadow"
      :class="{'fixed top-0 w-full':isHomePage}"
      id="topNavbar"
      style="background-color: #2F3451;"
    >
     <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
       <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
           <div style="display:flex">
              <router-link :to="{name:'Home'}">
                <img :src="$store.state.logo" alt="Business Logo">
              </router-link>
            </div>
       </div>
       <div class="lg:flex lg:flex-grow items-center">
         <ul class="flex flex-col lg:items-center lg:flex-row list-none ml-auto">
           <li class="nav-item">
             <a 
                class="px-4 py-2 flex items-center mr-2 font-sm"
              >
               Business Account
            </a>
           </li>
           <li class="nav-item">
             <a 
                class="px-4 py-2 flex items-center mr-2 font-sm"
              >
               FAQ
              </a>
           </li>
           <li class="nav-item">
             <router-link :to="{name:'Contact-Us'}" class="px-4 py-2 flex items-center mr-2 font-sm  text-slate-800 hover:text-orange-500">
              <button class="btn rounded-full " disabled="" data-v-c7f7d2ce="" style="background-color: white;color: #2F3451;"> OPEN AN ACCOUNT </button>
             </router-link>
           </li>
          </ul>
       </div>
     </div>
   </nav>
</template>

<script>
export default {
  name: "TopNavbar",
   data() {
    return {
      showMenu: false,
    }
  },
  mounted() {
  },
  methods: {
    toggleNavbar(){
      this.showMenu = !this.showMenu;
    },
    scrollToSection(id){
      document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
    },
    scrollTop(){
      window.scroll({
        top: 0,
      });
    }
  },
  computed: {
    isSignedIn(){
      let check = false;
      switch (this.$route.name) {
        case 'Login':
          check = false;
          break;
        case 'Signup':
          check = false;
          break;
        case 'ForgotPassword':
          check = false;
          break;      
        case 'ResetPassword':
          check = false;
          break;      
        default:
          check = true;
          break;
      }
      return check;
    },
    isMyAccountSection(){
      let check = false;
      switch (this.$route.name) {
        case 'MyAccount':
          check = true;
          break;
        case 'MyOrders':
          check = true;
          break;
        case 'SavedCards':
          check = true;
          break;      
        case 'AddressBook':
          check = true;
          break;      
        case 'RedeemAVoucher':
          check = true;
          break;      
        case 'RedeemAGiftCard':
          check = true;
          break;      
        case 'ContactPreferences':
          check = true;
          break;
      }
      return check;
    },
    isLoginPage(){
      return this.$route.name == 'Login' ? true : false
    },
    isSignUpPage(){
      return this.$route.name == 'Signup' ? true : false
    },
    isForgotPasswordPage(){
      return this.$route.name == 'ForgotPassword' ? true : false
    },
    isResetPasswordPage(){
      return this.$route.name == 'ResetPassword' ? true : false
    },
    isMenuPage(){
      return this.$route.name == 'Menu' ? true : false
    },
    isHomePage(){
      return this.$route.name == 'Home' ? true : false
    },
  },
};
</script>