<template>
  <div class="container">
    <span id="logo">Xchat</span>
    <span id="info">
      <span class="info-content">
        <div class="text-head">Xchat</div>
        <div class="text">API</div>
        <div class="text">Team</div>
        <div class="text">Pricing</div>
        <div class="text">Research</div>
        <div class="text">Company</div>
        <div class="text">Customers</div>
      </span>
      <span class="info-content">
        <div class="text-head">Press Inquiries</div>
        <div class="text">Support</div>
        <div class="text">Status</div>
        <div class="text">Availability</div>
        <div class="text">Twitter</div>
        <div class="text">LinkedIn</div>
        <div class="text">YouTube</div>
      </span>
      <span class="info-content">
        <div class="text-head">Terms of Service – Consumer</div>
        <div class="text">Terms of Service – Commercial</div>
        <div class="text">Privacy Policy</div>
        <div class="text">Usage Policy</div>
        <div class="text">Compliance</div>
        <div class="text">Privacy Choices</div>
      </span>
      <span class="info-content">
        <div id="infos">© 2025 Anthropic PBC</div>
      </span>
    </span>
  </div>
</template>

<style scoped>
.info-content{
  padding-left: 80px;
  width: 140px;
}
#infos{
  padding-top: 50px;
}
.text-head{
  padding-top: 50px;
  margin-bottom: 15px;
}
.text-head:hover{
  color:white;
}
.text{
  margin-bottom: 15px;
}
.text:hover{
  color:white;
}
#info{
  padding-left: 150px;
  display: flex;
}
#logo{
  padding: 50px 20px 30px 50px;
  font-size: 30px;
  color: white;
  font-weight: bold;
}
.container { 
  width: 100%;
  background-color:#141413;
  height: 100%;
  color: #b0aea5;
  display: flex;
  /* justify-content:last baseline */
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

  export default defineComponent({
    name: "HomeFooter",
  })
</script>