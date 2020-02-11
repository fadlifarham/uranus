<template>
  <div>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" :src="user.image">
                    </figure>
                  </div>
                </div>
                <div class="column is-10">
                  <p class="subtitle">
                    Halo, {{ user.firstName }} {{ user.lastName }}
                  </p>
                  <p>Saldo Anda</p>
                  <p class="subtitle">
                    {{ user.balance | currency }}
                  </p>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <div class="control">
                      <a href=""
                         class="button is-primary is-fullwidth">
                                            <span class="icon">
                                                <i class="fas fa-coins"></i>
                                            </span>
                        <span>Tarik Saldo</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <div class="control">
                      <a href="" class="button is-primary is-fullwidth">
                        <span class="icon">
                          <i class="fas fa-money-check-alt"></i>
                        </span>
                        <span>Deposit Saldo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="notification is-warning">
          <p>
            Sebagai member Uranus, Anda harus menjalani proses verifikasi data untuk memastikan bahwa
            identitas Anda adalah benar dan sah. <br>
            Berdasarkan peraturan perundang-undangan yang berlaku, institusi jasa keuangan wajib melakukan proses KYC
            terhadap para calon nasabahnya dan informasi yang terkumpul dari nasabah harus dijaga kerahasiaannya.
            <br>
          </p>
          Dasar kebijakan<br>
          <ul>
            <li>Undang-Undang Republik Indonesia No. 8 Tahun 2010 tentang Pencegahan dan Pemberantasan Tindak Pidana
              Pencucian Uang
            </li>
            <li>Peraturan Menteri Keuangan Nomor 30/PMK.010/2010 tentang Penerapan Prinsip Mengenal Nasabah bagi Lembaga
              Keuangan Non-Bank
            </li>
            <li>POJK Nomor 12-POJK.01-2017 tentang Penerapan Program APU PPT di Sektor Jasa Keuangan</li>
          </ul>
          <p>
            Atas dasar hukum diatas, kami mewajibkan member yang mendaftar untuk melampirkan foto ktp dan foto dengan
            memegang ktp.
          </p>
        </div>
        <div class="box">
          <h3 class="subtitle is-4">Verifikasi Akun</h3>
          <div class="columns">
            <div class="column is-4">

              <div class="field">
                <label class="label">Name Lengkap</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Text input">
                  <span class="icon is-small is-left">
                              <i class="fas fa-user"></i>
                            </span>
                </div>
              </div>

              <div class="field">
                <label class="label">No Telepon</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Text input">
                  <span class="icon is-small is-left">
                              <i class="fas fa-phone"></i>
                            </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Text input" value="bulma">
                  <span class="icon is-small is-left">
                              <i class="fas fa-user-secret"></i>
                            </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email input" value="hello@">
                  <span class="icon is-small is-left">
                              <i class="fas fa-envelope"></i>
                            </span>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Warga Negara</label>
                <div class="control has-icons-left">
                  <div class="select is-fullwidth">
                    <select>
                      <option selected>Warga Negara</option>
                      <option>Indonesia</option>
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Provinsi</label>
                <div class="control has-icons-left">
                  <div class="select is-fullwidth">
                    <select>
                      <option selected>Provinsi</option>
                      <option>Jawa Etan</option>
                      <option>Jawa Kulon</option>
                      <option>Jawa Tengah</option>
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Kota</label>
                <div class="control has-icons-left">
                  <div class="select is-fullwidth">
                    <select>
                      <option selected>Provinsi</option>
                      <option>Jawa Etan</option>
                      <option>Jawa Kulon</option>
                      <option>Jawa Tengah</option>
                    </select>
                  </div>
                  <div class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Kode Pos</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Text input" value="bulma">
                  <span class="icon is-small is-left">
                              <i class="fas fa-user-secret"></i>
                            </span>
                </div>
              </div>
            </div>
            <div class="column is-4">

              <div class="field">
                <label class="label">Alamat lengkap</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>


              <div class="field">
                <label class="label">Tentang Saya (Bio)</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Foto Profile</label>
                <div class="file has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                    <span class="file-name">
                                      No file uploaded
                                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Upload Foto KTP</label>
                <div class="file has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                    <span class="file-name">
                                      No file uploaded
                                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Upload Foto Selfie dengan KTP</label>
                <div class="file has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                    <span class="file-name">
                                      No file uploaded
                                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-primary is-fullwidth">Verifikasi Data</button>
            </div>
          </div>
        </div>
      </div>
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
    },

    methods: {
        
    },
}
</script>