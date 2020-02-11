<template>
	<div>
		<div class="hero is-white">
        <div class="hero-body has-text-centered">
            <p class="title is-3 has-text-primary">{{ company.name }}</p>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4">
                    <div class="box">
                        <div class="field">
                            <div class='is-flex is-horizontal-center'>
                                <img style="height: 128px; max-width: 100%;" class="is-rounded" :src="company.image">
                                <!-- <figure class="image is-128x128 has-text-centered">
                                    <img class="is-rounded" :src="company.image">
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
                            <textarea v-model="company.address" class="textarea" disabled></textarea>
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
                                        {{ company.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="columns">
                            <div class="column is-6">
                                <p>
                                    Jumlah Lembar Saham<br>
                                    <strong>{{ company.nShares }} Lembar</strong>
                                </p><br>
                            </div>
                            <div class="column is-6">
                                <p>
                                    Total Pendapatan Anda Dari Dividen<br>
                                    <span class="has-text-weight-bold">Rp 60.000</span>
                                </p>
                            </div>
                        </div>
                        <p style="margin-top: -40px;" class="has-text-weight-light">Rincian Dividen</p>
                        <table class="table is-fullwidth">
                            <tr>
                                <td>Waktu</td>
                                <td>Total Dividen</td>
                                <td>Dividen Anda</td>
                                <td>Keterangan</td>
                            </tr>
                            <tr>
                                <td>21-01-2020</td>
                                <td>Rp 200.000.000</td>
                                <td>Rp 20.000</td>
                                <td>Hasil untuk bulan Januari</td>
                            </tr>
                            <tr>
                                <td>21-02-2020</td>
                                <td>Rp 200.000.000</td>
                                <td>Rp 20.000</td>
                                <td>Hasil untuk Bulan Februari</td>
                            </tr>
                            <tr>
                                <td>21-03-2020</td>
                                <td>Rp 200.000.000</td>
                                <td>Rp 20.000</td>
                                <td>Hasil untuk Bulan Maret</td>
                            </tr>
                        </table>
                        <p>* ) Dividen yang anda miliki akan langsung dimasukan kedalam saldo Uranus.</p>
                    </div>

                    <div class="box">
                        <p>
                            <strong>Dana Terkumpul</strong><br>
                            {{ company.sharePrice | currency }} (<span class="has-text-danger">{{ company.nShares }} Lembar Saham Tersedia</span>)<br>
                            <progress class="progress is-success" value="50" max="100">50%</progress>
                        </p> <br>
                        <!-- <div class="columns">
                            <div class="column is-6">
                                <p>
                                    <strong>Dana yang dibutuhkan</strong><br>
                                    Rp 1.000.000.000,00
                                </p><br>
                                <p>
                                    <strong>Saham Dalam Lembar</strong><br>
                                    1000
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
                        </div> -->
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
    data() {
        return {
            company: {},
            owner: {},
        }
    },

    mounted() {
        this.getCompany()
    },

    methods: {
        getCompany() {
            let id = this.$route.params.id
            this.$axios.get('core/companies/' + id + '?expand=owners').then(response => {
                this.company = response.data
                this.owner = response.data.owners[0]

                console.log(response.data)
            })
        },
    },
}
</script>