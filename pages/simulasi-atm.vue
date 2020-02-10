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
              <div class="column is-6">
                <div class="field">
                  <label>Kode Perusahaan</label>
                  <input type="number" class="input">
                </div>
              </div>
              <div class="column is-6">
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
          <div v-if="showNotificationSection == true">
            <h1>ijkashajkshjaks</h1>
            <div class="notification is-danger">
              Nomor pembayaran tidak ditemukan atau sudah tidak berlaku.
            </div>
          </div>

          <div class="notification is-success" v-if="showNotificationSuccessPayment">
            <p>Pembayaran sukses.</p>
          </div>

          <div class="box content" v-if="showPaymentSection">
            <p>Jumlah yang harus anda bayar adalah: </p>
            <h3 class="subtitle is-4">Rp {{ bankPaymentInformation.amount}}</h3>
            <hr>
            <div class="field">
              <button class="button is-primary is-fullwidth" v-on:click="verificationPayment">Bayar</button>
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
        bankPaymentInformation: {amount: ''},
        showNotificationSuccessPayment: false
      }
    },
    methods: {
      showPaymentDetail() {
        this.$axios.get('/core/users/check_order/?customer_code=' + this.kodePembayaran).then( response => {
          this.bankPaymentInformation = response.data
          console.log(this.bankPaymentInformation)
          this.showPaymentSection = true
        }).catch(error => function () {
          this.showNotificationSection = true
          this.showPaymentSection = false;
          return ''
        })
      },
      verificationPayment() {
        this.$axios.post('/core/users/finish_order/', {customer_code: this.kodePembayaran}).then(response => {
          this.showNotificationSuccessPayment = true;
          console.log(response.data)
        })
      }
    }
  }
</script>

<style scoped>

</style>
