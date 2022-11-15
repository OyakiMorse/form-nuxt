<template>
  <div class="home">
    <PresentBlock />
    <Form />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Montserrat+Alternates:wght@500&display=swap");
body,
h1,
p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  font-family: 'Montserrat Alternates', sans-serif;
  min-height: 100vh;
}
</style>
