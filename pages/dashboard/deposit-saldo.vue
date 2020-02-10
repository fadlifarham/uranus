<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
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
                <p class="subtitle">
                  Halo, Fatkul Nur Koirudin
                </p>
                <p>Saldo Anda</p>
                <p class="subtitle">
                  Rp 8.032.032
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <div class="control">
                    <a href="/dashboard/tarik-saldo"
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
                    <a href="/dashboard/deposit-saldo"
                       class="button is-primary is-fullwidth">
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

          <div class="notification is-light">
            <button class="delete"></button>
            Saat ini kami baru mendukung deposit melalu bank BRI.
          </div>

          <div class="notification is-success">
            <button class="delete"></button>
            Pengajuan deposit anda akan segera di proses.
          </div>

          <div class="notification is-danger">
            <button class="delete"></button>
            Mohon maaf, pengajuan deposit anda tidak dapat di proses.
          </div>

          <div class="box">
            <h3 class="subtitle is-4">Pengajuan Deposit</h3>

            <div class="field">
              <label>Jumlah Uang (Rp)</label>
              <p class="control has-icons-left">
                <input class="input" type="number" placeholder="Text input">
                <span class="icon is-small is-left">
                                      <i class="fas fa-money-bill-alt"></i>
                              </span>
              </p>
            </div>

            <div class="field">
              <label>Nomor Rekening</label>

              <p class="control has-icons-left">
                                  <span class="select is-fullwidth">
                                        <select>
                                            <option>Bank Bri</option>
                                        </select>
                                  </span>
                <span class="icon is-small is-left">
                                      <i class="fas fa-piggy-bank"></i>
                                  </span>
              </p>
            </div>

            <div class="field">
              <button class="button is-primary is-fullwidth">
                                          <span class="icon">
                                              <i class="fas fa-coins"></i>
                                          </span>
                <span>Bayar</span>
              </button>
            </div>
          </div>


          <div class="box content">
            <h3 class="subtitle is-4">Pembayaran</h3>
            <p>Silakan lakukan pembayaran ke Rekening Bank BRI di bawah ini:</p>
            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png" style="max-width: 128px"></p>
            <table class="table is-fullwidth">
              <tr>
                <td>Kode Perusahaan</td>
                <td>:</td>
                <td></td>
              </tr>
              <tr>
                <td>Kode Bayar</td>
                <td>:</td>
                <td></td>
              </tr>
              <tr>
                <td>Jumlah / Nominal</td>
                <td>:</td>
                <td></td>
              </tr>
            </table>

            <div class="field">
              <h3 class="subtitle">Cara Pembayaran</h3>
            </div>
            <div class="field content">
              <span class="has-text-weight-bold">Melalui Transfer ATM BRI</span>
              <ol>
                <li>Pilih menu Transaksi Lain, kemudian pilih menu Pembayaran</li>
                <li>Setelah itu klik Menu Lainnya, lalu pilih menu Briva</li>
                <li>Masukkan nomor rekening dengan nomor Virtual Account Anda (contoh: 01234567890) dan pilih Benar</li>
                <li>Ketika muncul konfirmasi pembayaran, silahkan pilih Ya</li>
                <li>Voila! Transaksi telah selesai dan silahkan ambil bukti pembayaran anda</li>
              </ol>
              <span class="has-text-weight-bold">Melalui Internet Banking</span>
              <ol>
                <li>Silahkan login Internet Banking, kemudian pilih Menu Pembayaran</li>
                <li>Lalu pilih menu Brivia</li>
                <li>Masukkan nomor rekening dengan nomor Virtual Account Anda (contoh: 01234567890) kemudian klik
                  Kirim
                </li>
                <li>Setelah itu, masukkan password serta mToken internet banking</li>
              </ol>
              <span class="has-text-weight-bold">Melalui Mobile Banking</span>
              <ol>
                <li>Silahkan login Mobile Banking, lalu pilih menu Pembayaran</li>
                <li>Setelah itu klik menu Brivia</li>
                <li>Masukkan nomor rekening dengan nomor Virtual Account Anda (contoh: 01234567890) dan jangan lupa
                  tuliskan jumlah nominal tagihan yang ada di invoice
                </li>
                <li>Lalu masukkan PIN Mobile Banking dan klik Kirim</li>
                <li>Transaksi sudah selesai. Bukti pembayaran anda akan dikirimkan melalui notifikasi SMS</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
