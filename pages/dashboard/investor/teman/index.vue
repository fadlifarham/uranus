<template>
  <div>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">

            <div class="field">
              <label class="label">Pencarian Teman</label>
              <div class="columns">
                <div class="column is-8">
                  <input type="text" class="input">
                </div>
                <div class="column is-4">
                  <button class="button is-primary is-outlined is-fullwidth">Search</button>
                </div>
              </div>
            </div>
            <div class="tabs is-centered is-boxed is-fullwidth">
              <ul>
                <li class="is-active">
                  <a>
                    <span class="icon is-small"><i class="fas fa-user" aria-hidden="true"></i></span>
                    <span>Cari Teman</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-user-friends" aria-hidden="true"></i></span>
                    <span>Teman Saya</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="notification is-success">
              <p>Permintaan pertemanan berhasil di tambahkan.</p>
            </div>
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                </div>
                <div class="column is-7">
                  <span class="subtitle">Fatkul Nur Koirudin</span>
                  <br><span>Tinggal di Lamongan</span>
                </div>
                <div class="column is-3">
                  <div class="container">
                    <button class="button is-rounded is-small is-primary">Tambah Teman</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                </div>
                <div class="column is-7">
                  <span class="subtitle">Fatkul Nur Koirudin</span>
                  <br><span>Tinggal di Lamongan</span>
                </div>
                <div class="column is-3">
                  <div class="container">
                    <button class="button is-rounded is-small is-primary">Tambah Teman</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                </div>
                <div class="column is-7">
                  <span class="subtitle">Fatkul Nur Koirudin</span>
                  <br><span>Tinggal di Lamongan</span>
                </div>
                <div class="column is-3">
                  <div class="container">
                    <button class="button is-rounded is-small is-primary">Tambah Teman</button>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <h1>KETIKA TAB TEMAN DI KLIK MUNCUL SEPERTI DIBAWAH INI</h1>
            <br>
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                </div>
                <div class="column is-7">
                  <span class="subtitle">Fatkul Nur Koirudin</span>
                  <br><span>Tinggal di Lamongan</span>
                </div>
                <div class="column is-3">
                  <div class="container">
                    <button class="button is-rounded is-small is-outlined is-primary">Lihat Investasi</button>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <h1>KETIKA BUTTON LIHAT INVESTASI DI KLIK</h1>
            <br>
            <div class="box">
              <div class="columns">
                <div class="column is-2 has-text-centered is-horizontal-center">
                  <div class='is-flex is-horizontal-center'>
                    <figure class="image is-64x64 has-text-centered">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  </div>
                </div>
                <div class="column is-10">
                  <span class="subtitle">Fatkul Nur Koirudin</span>
                  <br><span>Tinggal di Lamongan</span>
                </div>
              </div>
            </div>
            <div class="box">
              <h2 class="subtitle">Informasi Investasi Terbaru</h2>
              <table class="table is-bordered is-fullwidth">
                <thead>
                <th>No</th>
                <th>Judul Investasi</th>
                <th>Jenis Investasi</th>
                <th>Tanggal</th>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Pembukaan Soto Ayam</td>
                  <td>Proyek</td>
                  <td>25 Februari 2018</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sate Sapi dan Kelinci pak Gendut</td>
                  <td>Saham</td>
                  <td>01 Maret 2018</td>
                </tr>
                </tbody>
              </table>
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
      }
    },
    mounted() {
    },
    methods: {
    },
  }
</script>
