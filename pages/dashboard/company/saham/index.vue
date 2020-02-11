<template>
<div>

  <div class="hero is-white">
    <div class="hero-body has-text-centered">
      <p class="title is-3 has-text-primary">Saham Investasiku</p>
      <p class="subtitle">Daftar perusahaan yang anda memiliki saham di dalamnya</p>
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
                                              <option>Select dropdown</option>
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

            <div class="box" v-for="item in companies" :key="item.id">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="item.image" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <a :href="'/dashboard/company/saham/' + item.id" class="has-text-weight-bold has-text-black">{{ item.name }}</a>
                      <br>
                      {{ subString(item.description) }}
                      <br>
                      <!-- <span class="has-text-weight-light">{{ item }} - Sampai 23 Juni 2019</span> -->
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            companies: []
          }
        },

        mounted() {
          this.getCompany()
        },

        methods: {
          subString(dataString) {
              var data, lengthString;
              lengthString = 100
              if (dataString == undefined) {
                  return dataString
              }

              if (dataString.length < lengthString) {
                  data = dataString
              } else {
                  data = dataString.substr(1, lengthString)
              }
              return data;
          },

          getCompany() {
            this.getUser().then(response => {
              this.$axios.get('core/companies/').then(response => {
                console.log(response.data.results)
                this.companies = response.data.results
              })
            })
          },

          async getUser() {
            this.user = this.$auth.user
            return this.$auth.user
          },

        },
    }
</script>

<style scoped>

</style>
