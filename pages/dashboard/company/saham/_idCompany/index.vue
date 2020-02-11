<template>
    <div>

      <div class="hero is-white">
        <div class="hero-body has-text-centered">
          <p class="title is-3 has-text-primary">Proyek Investasiku</p>
          <p class="subtitle">Semua proyek yang anda terlibat di dalamnya</p>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <div class="box">
                <div class="field">
                  <label class="label">Cari Bisnis</label>

                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Text input">
                    <span class="icon is-small is-left">
                                        <i class="fas fa-search"></i>
                                    </span>
                  </p>

                </div>
                <div class="field">
                  <label class="label">Kategori Bisnis</label>
                  <p class="control has-icons-left">
                                    <span class="select is-fullwidth">
                                          <select>
                                            <option selected>Kategori</option>
                                              <!-- @for ($i = 0; $i < 10; $i++) -->
                                              <option v-for="item in 10" :key="item">Select dropdown</option>
                                              <!-- @endfor -->
                                          </select>
                                    </span>
                    <span class="icon is-small is-left">
                                        <i class="fas fa-globe"></i>
                                    </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label">Status Pendanaan</label>
                  <p class="control has-icons-left">
                                    <span class="select is-fullwidth">
                                        <select>
                                            <option selected>status</option>
                                            <option>Tersedia</option>
                                            <option>Selesai</option>
                                            <option>Dihentikan</option>
                                            <option>Melanggar Aturan</option>
                                         </select>
                                    </span>
                    <span class="icon is-small is-left">
                                        <i class="fas fa-globe"></i>
                                    </span>
                  </p>
                </div>
                <div class="field">
                  <div class="control">
                    <a href="" class="button is-primary is-fullwidth">Filter Data</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-9">
              <div class="">
                <a v-for="item in projects" :key="item.id" :href="'/dashboard/company/saham/' + id_company + '/proyek/' + item.id" class="box" >
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <a class="has-text-weight-bold has-text-black">{{ item.name }}</a>
                          <br>
                          Dibutuhkan {{ item.target | currency }} - Imbal Balik 2%
                          <br>
                          <span class="has-text-weight-light">{{ item.company.name }} - {{ $moment(item.createdAt).add(2, 'M').format('DD MMMM YYYY') }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <div class="field">
                  <div class="control">
                    <a href="" class="button is-primary is-fullwidth">Selanjutnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",

        data() {
          return {
            id_company: "",
            projects: []
          }
        },

        mounted() {
          this.getAllMyProject()
        },

        methods: {
          getAllMyProject() {
            let id = this.$route.params.idCompany
            this.id_company = this.$route.params.idCompany
            this.$axios.get('/core/projects/?company=' + id + '&expand=company').then(response => {
              console.log(response.data.results)
              this.projects = response.data.results
            })
          }
        },
    }
</script>

<style scoped>

</style>
