<template>
  <div>
    <div class="hero is-white">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title">Simulasi ATM</h2>
          <h3 class="subtitle">Hanya untuk silumasi pembayaran dengan BRI Api</h3>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <h3 class="subtitle is-5">Simulasi ATM</h3>
            <div class="columns">
              <div class="column is-12">
                <div class="field">
                  <label>Nomor Pembayaran</label>
                  <input type="number" class="input" v-model="kodePembayaran">
                </div>
              </div>
            </div>
            <div class="field">
              <button class="button is-primary is-fullwidth" v-on:click="showPaymentDetail">Cek Transaksi</button>
            </div>
          </div>
          <div class="notification is-danger" v-if="showNotificationSection">
            Nomor pembayaran tidak ditemukan atau sudah tidak berlaku.
          </div>

          <div class="box content" v-if="showPaymentSection">
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
                <td>Nomor Pembayaran</td>
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
              <button class="button is-primary is-fullwidth">Bayar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from "./dashboard/company/saham/index";
  export default {
    components: {Index},
    auth: false,
    layout: 'landing',
    data() {
      return {
        showPaymentSection: false,
        showNotificationSection: false,
        kodePembayaran: 0,
        amount: 0
      }
    },
    methods: {
      showPaymentDetail() {
        this.showPaymentSection = true
        this.showNotificationSection = true
      }
    }
  }
</script>

<style scoped>

</style>
