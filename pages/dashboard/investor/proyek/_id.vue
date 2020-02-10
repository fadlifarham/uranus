<template>
  <div>
		<div class="hero is-white">
        <div class="hero-body has-text-centered">
            <p class="title is-3 has-text-primary">{{ project_name }}</p>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4">
                    <div class="box">
                        <div class="field">
                            <div class='is-flex is-horizontal-center'>
                                <img style="height: 128px; max-width: 100%;" class="is-rounded" :src="company_dp">
                                <!-- <figure class="image is-128x128 has-text-centered">
                                    <img class="is-rounded" :src="company_dp">
                                </figure> -->
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Nama Bisnis</label>
                            <p class="control has-icons-left">
                                <input v-model="company_name" class="input" type="text" value="PT. Exatera Mega Sentosa" disabled>
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
                            <textarea v-model="company_address" class="textarea" disabled></textarea>
                        </div>
                        <div class="field">
                            <label class="label">Prospektus Bisnis</label>
                            <div class="field">
                                <div class="control has-icons-left">
                                    <a :href="company_prospectus" target="_blank" class="button is-primary is-fullwidth is-outlined">Download
                                        Prospektus</a>
                                    <span class="icon is-small is-left">
                                        <i class="far fa-file-word"></i>
                                    </span>
                                </div>
                            </div>
                            <p class="is-small">
                                Prospektus adalah gabungan antara profil perusahaan dan laporan tahunan yang
                                menjadikannya sebuah dokumen resmi yang digunakan oleh suatu lembaga/ perusahaan untuk
                                memberikan gambaran mengenai saham yang ditawarkannya untuk dijual kepada publik
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
                                        <strong>Deskripsi Proyek</strong><br>
                                        {{ project_description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <p>
                            <strong>Dana Terkumpul</strong><br>
                            {{ funded | currency }} (Dibutuhkan {{ target | currency }})<br>
                            <progress class="progress is-success" value="50" max="100">50%</progress>
                        </p>
                        <br>
                        <div class="columns">
                            <div class="column is-6">
                                <p>
                                    <strong>Lama Waktu Pengembalian</strong><br>
                                    36 Bulan
                                </p><br>
                                <p>
                                    <strong>Bagi Hasil (Pertahun)</strong><br>
                                    13,4 %
                                </p><br>
                            </div>
                            <div class="column is-6">
                                <p>
                                    Ekspetasi Keuntungan (Pertahun)<br>
                                    <span class="has-text-weight-bold">Rp 80.000.000 - Rp 160.000.000</span>
                                </p><br>
                                <p>
                                    <strong>Jumlah Investor Saat Ini</strong><br>
                                    65
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary is-fullwidth" v-on:click="modalFormInvestasi = true">Investasi Sekarang</button>
                        </div>
                    </div>

                    <div v-if="modalFormInvestasi" class="modal is-active">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <section class="modal-card-body">
                                <div class="box">
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
                        <button v-on:click="modalFormInvestasi = false" class="modal-close is-large" aria-label="close"></button>
                    </div>

                    <hr>
                    <p class="subtitle">Pemilik Bisnis</p>
                    <div class="box">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="owner_dp" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ owner_name }}</strong>
                                        <br>
                                        saya merupakan lulusan dari Fakultas Ekonomi Universitas Indonesia dan telah
                                        berpengalaman sebagai GM keuangan salah satu perusahaan konstruksi. Beliau
                                        memiliki andil besar dalam jalannya operasional perusahaan baik dari sisi
                                        operasional terkait supply bahan baku, pemenuhan kebutuhan customer dan
                                        memperluas jaringan bisnis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr>
                    <p class="subtitle">Simulasi Investasi</p>
                    <div class="box">
                        <div class="columns">
                            <div class="column is-6">
                                <div class="field">
                                    <label>Nilai Investasi</label>
                                    <p class="control has-icons-left">
                                        <input class="input" type="number" placeholder="Text input">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                </span>
                                    </p>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="field">
                                    <label>Perkiraan keuntungan</label>
                                    <p class="control has-icons-left">
                                        <input class="input" type="text" placeholder="Text input">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-user-alt"></i>
                                </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <!-- <p class="subtitle">Kegiatan Perusahaan</p>
                    <div class="box has-text-centered">
                        <img
                            src="https://api.bizhare.id/base/commonFile/getFile?fileName=a219b00a9332403e9d124a4a84fe8d01.png">
                        <img
                            src="https://api.bizhare.id/base/commonFile/getFile?fileName=9f9064e5a82f4e57b6f4f0f89e25271b.png">
                    </div> -->
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
            modalFormInvestasi: false,

            owner_name          : "",
            owner_dp            : "",
            owner_about         : "",
            company_name        : "",
            company_dp          : "",
            company_prospectus  : "",
            project_description : "",
            project_name        : "",
            company_address     : "",
            funded              : "",
            target              : ""
        }
    },
    mounted() {
        this.getDataProyek()
    },

    methods: {
        getDataProyek() {
            let id = this.$route.params.id;

            this.$axios.get('core/projects/' + id + '/?expand=company.owners').then(response => {
                // console.log(response.data)
                this.owner_name = response.data.company.owners[0].firstName + " " + response.data.company.owners[0].lastName
                this.owner_dp = response.data.company.owners[0].image

                this.project_name = response.data.name
                this.project_description = response.data.description

                this.company_name = response.data.company.name
                this.company_address = response.data.company.address
                this.company_dp = response.data.company.image
                this.company_prospectus = response.data.company.prospectus

                this.funded = response.data.funded
                this.target = response.data.target
            });
      },
    },
}
</script>