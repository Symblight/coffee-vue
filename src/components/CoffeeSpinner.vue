<template>
    <div class="wrap-spinner">
        <div class="coffee"></div>
    </div>
</template>

<script>
export default {
    name: 'CoffeeSpinner'
}
</script>

<style lang="scss" scoped>

.wrap-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
}
.coffee{
  
  height: 50px;
  width: 40px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #f0ba5c;
  position: absolute;
  top: 50%;
  z-index: 999;
  &:before{
    position: absolute;
    content:"";
    right: -15px;
    top: 5px;
    height: 25px;
    width: 10px;
    background: transparent;
    border: 5px solid #f0ba5c;
    border-left: 5px solid transparent;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;
  }
  &:after{
    position: absolute;
    content:"";
    width: 5px;
    height: 30px; 
    background: #e1e1e1;
    border-radius: 4px;
    top: -30px;
    box-shadow: 35px 0px 0 #e1e1e1,
                17.5px -15px 0 #e1e1e1;
    animation: steam 3s ease infinite;
    opacity: 1;
  }
}

@keyframes steam{
  
  100%{
    top: -40px;
    background: #eeeeee;
    box-shadow: 35px 0px 0 #eeeeee,
                17.5px -15px 0 #eeeeee;
    opacity: 0.25;
  }
}
</style>


