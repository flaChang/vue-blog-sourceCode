<template>
    <Header id="header"></Header>
    <main id="main">
      <router-view/>       <!--使用vue router的地方-->
    </main>
    <Footer id="footer"></Footer>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name:'App',
  components: {Footer, Header}
}
</script>

<style lang="less">
@import "./assets/common";
html, body, #app{
  height:100%;
}
#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header header header'
                       '.      main   .'
                       'footer footer footer';
  #header {
    grid-area:header;
    padding-left:12%;
    padding-right: 12%;
  }
  #main {
    grid-area:main;
  }
  #footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media(max-width:768px) {
  #app{
    grid-template-columns: 10px auto 10px;
    #header,#footer{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

@media(max-width:500px) {
  #app{display: flex;flex-direction: column;overflow-x: hidden;
    justify-content: space-between;
    #main{padding:20px;
      }
  #footer{width:100%;}
    #header.no-login{display: flex;flex-direction: column;
      justify-content: center;align-items: center;
    h1{text-align: center;}
    }
  }
}
</style>