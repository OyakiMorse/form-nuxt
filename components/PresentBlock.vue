<template>
  <div class="present">
    <div class="present__darkest"></div>

    <div class="present__abs">
      <h1>Do you want to reborn in ISEKAI?</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.present {
  position: relative;
  overflow: hidden;
  width: 50%;

  &__darkest {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/img/bg.jpg");
    background-position: center;
    background-size: auto;
  }

  &__abs {
    color: #dfa143;
    position: absolute;
    top: 136px;
    left: 70px;
    height: 100%;
    width: 100%;
    padding: 50px;
    border: 5px solid #dfa143;

    h1 {
      max-width: 623px;
      font-weight: 700;
      font-size: 80px;
      font-family: "Josefin Sans", sans-serif;
      white-space: break-all;
    }
  }
}
</style>
