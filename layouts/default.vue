<template>
  <div>
    <div class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <span class="logo-text has-text-primary is-bold">Uranus</span>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end" v-if="this.user.role == 'IV'">
            <a class="navbar-item" href="/dashboard">
              Dashboard
            </a>
            <a class="navbar-item" href="/dashboard/investor/teman">
              Teman
            </a>
            <a class="navbar-item" href="/dashboard/investor/investasiku/proyek">
              Proyek Investasiku
            </a>
            <a class="navbar-item" href="/dashboard/investor/investasiku/saham">
              Saham Investasiku
            </a>
            <a class="navbar-item" href="/dashboard/investor/proyek">
              List Proyek
            </a>
            <a class="navbar-item" href="/dashboard/investor/saham">
              List Saham
            </a>
            <a class="navbar-item" href="/dashboard/investor/laporan">
              Laporan
            </a>
            <div class="navbar-item">
              <a href="/dashboard/profile" class="button is-primary is-rounded is-outlined">
                <span class="icon">
                  <i class="far fa-user" />
                </span>
                <span>Profile</span>
              </a>
            </div>

            <a class="navbar-item" @click="logout">
              Logout
            </a>
          </div>
          <div class="navbar-end" v-else>

            <a class="navbar-item" href="/dashboard/company">
              Dashboard
            </a>
            <a class="navbar-item" href="/dashboard/company/proyek">
              Semua Proyek Saya
            </a>

            <a class="navbar-item" href="/dashboard/company/proyek/create">
              Buat Proyek Baru
            </a>
            <a class="navbar-item" href="/dashboard/company/saham">
              Semua Bursa UKM Saya
            </a>
            <a class="navbar-item" href="/dashboard/company/saham/create">
              Tambah Bursa UKM
            </a>

            <div class="navbar-item">
              <a href="/dashboard/profile" class="button is-primary is-rounded is-outlined">
                <span class="icon">
                  <i class="far fa-user" />
                </span>
                <span>Profile</span>
              </a>
            </div>

            <a class="navbar-item" @click="logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-top: 72px" />

    <nuxt />

    <!-- Back To Top Button -->
    <div id="backtotop">
      <a><i class="fas fa-angle-up" /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.user = this.$auth.user
    console.log(this.user)
  },
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
