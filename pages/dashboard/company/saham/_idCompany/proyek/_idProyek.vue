<template>
  <div>
    <div class="hero is-white">
      <div class="hero-body has-text-centered">
        <p class="title is-3 has-text-primary">{{ proyek.name }}</p>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="box">
              <div class="field">
                <div class='is-flex is-horizontal-center'>
                  <img style="height: 128px; max-width: 100%;" class="is-rounded" :src="proyek.image">
                  <!-- <figure class="image is-128x128 has-text-centered">
                    <img class="is-rounded" :src="proyek.image">
                  </figure> -->
                </div>
              </div>
              <div class="field">
                <label class="label">Nama Bisnis</label>
                <p class="control has-icons-left">
                  <input v-model="company.name" class="input" type="text" placeholder="Text input" disabled>
                  <span class="icon is-small is-left">
                                        <i class="fas fa-user-alt"></i>
                                </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Kategori Bisnis</label>
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Text input" value="Umum" disabled>
                  <span class="icon is-small is-left">
                                        <i class="fas fa-user-alt"></i>
                                </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Alamat Bisnis</label>
                <textarea  class="textarea" disabled></textarea>
              </div>
              <div class="field">
                <label class="label">Prospektus Bisnis</label>
                <div class="field">
                  <div class="control has-icons-left">
                    <a :href="company.prospectus" target="_blank" class="button is-primary is-fullwidth is-outlined">Download Prospektus</a>
                    <span class="icon is-small is-left">
                                        <i class="far fa-file-word"></i>
                                    </span>
                  </div>
                </div>
                <p class="is-small">
                  Prospektus adalah gabungan antara profil perusahaan dan laporan tahunan yang menjadikannya sebuah dokumen resmi yang digunakan oleh suatu lembaga/ perusahaan untuk memberikan gambaran mengenai saham yang ditawarkannya untuk dijual kepada publik
                </p>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <a href="" class="button is-primary is-fullwidth is-outlined">Profile Perusahaan</a>
                  <span class="icon is-small is-left">
                                        <i class="fab fa-youtube"></i>
                                    </span>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-8">
            <div class="box">
              <div class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Deskripsi Bisnis</strong><br>
                      {{ proyek.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Laporan Dividen</strong><br>
                    </p>
                    <p>
                      <button class="button is-primary is-rounded" v-on:click="modalFormTambahLaporan = true">Tambah Laporan</button>
                    </p>
                    <table class="table is-fullwidth">
                      <tr>
                        <td>Waktu</td>
                        <td>Informasi</td>
                      </tr>
                      <!-- <tr>
                        <td>21-03-2020</td>
                        <td>Memulai aktifitas pengeboran.</td>
                      </tr>
                      <tr>
                        <td>21-02-2020</td>
                        <td>Pembangunan kebutuhan dan pemasangan alat.</td>
                      </tr>
                      <tr>
                        <td>21-01-2020</td>
                        <td>Pembebasan tanah sudah dilakukan.</td>
                      </tr> -->
                      <tr>
                        <td>11-01-2020</td>
                        <td>Proyek sudah mulai dikerjakan.</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="modalFormTambahLaporan" class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-card">
                <section class="modal-card-body">
                  <div>
                    <p class="subtitle">Masukan Jumlah Investasi</p>
                    <div class="columns">
                      <div class="column is-6">
                        <div class="field">
                          <label>Jumlah Uang</label>
                          <p class="control has-icons-left">
                            <input class="input" type="number" placeholder="Dalam Rupiah">
                            <span class="icon is-small is-left">
                                  <i class="fas fa-money-bill"></i>
                                </span>
                          </p>
                        </div>
                      </div>
                      <div class="column is-6">
                        <div class="field">
                          <label>Metode Pembayaran</label>
                          <div class="control has-icons-left">
                            <div class="select is-fullwidth">
                              <select>
                                <option selected>Saldo Uranus</option>
                              </select>
                            </div>
                            <div class="icon is-small is-left">
                              <i class="fas fa-money-check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="field">
                      <div class="control">
                        <a href="" class="button is-primary is-fullwidth">Mulai Investasi</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <button v-on:click="modalFormTambahLaporan = false" class="modal-close is-large" aria-label="close"></button>
            </div>

            <div class="box">
              <p>
                <strong>Dana Terkumpul</strong><br>
                {{ proyek.funded | currency }} (<span class="has-text-danger">{{ proyek.nInvests }} Lembar Saham Tersedia</span>)<br>
                <progress class="progress is-success" :value="proyek.funded / proyek.target * 100" max="100">50%</progress>
              </p> <br>
              <div class="columns">
                <div class="column is-6">
                  <p>
                    <strong>Dana yang dibutuhkan</strong><br>
                    {{ proyek.target | currency }}
                  </p><br>
                  <p>
                    <strong>Saham Dalam Lembar</strong><br>
                    {{ proyek.nInvests }}
                  </p><br>
                  <p>
                    <strong>Harga Saham Perlembar</strong><br>
                    Rp 1.000.000, 00
                  </p><br>
                </div>
                <div class="column is-6">
                  <p>
                    Total saham yang dibagikan ke investor<br>
                    <span class="has-text-weight-bold">80%</span>
                  </p><br>
                  <p>
                    Total keuntungan pertahun berdasarkan historis<br>
                    <span class="has-text-weight-bold">Rp 100.000.000 - 300.000.000</span>
                  </p><br>
                  <p>
                    <strong>Jumlah Investor Saat Ini</strong><br>
                    65
                  </p>
                </div>
              </div>
            </div>
            <hr>
            <p class="subtitle">Pemilik Bisnis</p>
            <div class="box">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="owner.image" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ owner.firstName }} {{ owner.lastName }}</strong>
                      <br>
                      saya merupakan lulusan dari Fakultas Ekonomi Universitas Indonesia dan telah berpengalaman sebagai GM keuangan salah satu perusahaan konstruksi. Beliau memiliki andil besar dalam jalannya operasional perusahaan baik dari sisi operasional terkait supply bahan baku, pemenuhan kebutuhan customer dan memperluas jaringan bisnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr>
            <!-- <p class="subtitle">Kegiatan Perusahaan</p>
            <div class="box has-text-centered">
              <img src="https://api.bizhare.id/base/commonFile/getFile?fileName=a219b00a9332403e9d124a4a84fe8d01.png">
              <img src="https://api.bizhare.id/base/commonFile/getFile?fileName=9f9064e5a82f4e57b6f4f0f89e25271b.png">
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "_id",
    data() {
      return {
        modalFormTambahLaporan: false,

        proyek: {},
        company: {},
        owner: {}
      }
    },

    mounted() {
      this.getDetailProject()
    },

    methods: {
      getDetailProject() {
        let id = this.$route.params.idProyek
        this.$axios.get('core/projects/' + id + '/?expand=company.owners').then(response => {
          this.proyek = response.data
          this.company = response.data.company
          this.owner = response.data.company.owners[0]
          console.log("response ", response.data)
        })
      },
    },

  }
</script>

<style scoped>

</style>
