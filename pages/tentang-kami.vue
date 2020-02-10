<template>
  <div>
    <div class="hero is-white">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title">Tentang Kami</h2>
          <h3 class="subtitle">Mimpi kami dan tujuan yang ingin kami capai</h3>
        </div>
      </div>
    </div>

    <div class="section is-medium">
      <div class="container">
        <div class="columns is-vcentered side-feature">
          <div class="column is-5 is-hidden-desktop is-hidden-tablet">
            <figure class="image is-1by1">
              <img src="@/assets/images/undraw_having_fun_iais.svg" alt="">
            </figure>
          </div>
          <div class="column is-7">
            <h3 class="title is-2 is-bold is-title-reveal has-text-primary">Tentang Kami</h3>
            <p class="subtitle">Uranus Adalah Platform Urun Dana untuk Ekspansi Bisnis UMKM di Indonesia.
              Bermula dari sekelompok manusia penghuni Lab Big Data PENS yang berkeinginan membuat sebuah platform urun dana.
              Dengan tujuan membantu para UMKM di Indonesia untuk lebih mudah dalam mendapatkan pendanaan dan agar bisa naik level yang lebih tinggi. Serta menumbuhkan jiwa berinvestasi dan gotong royong.
            </p>
          </div>
          <div class="column is-5 is-hidden-mobile">
            <figure class="image is-5by4">
              <img src="@/assets/images/undraw_having_fun_iais.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tentang-kami",
    auth: false,
    layout: 'landing'
  }
</script>
