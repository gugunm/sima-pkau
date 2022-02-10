<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <div class="mb-8">
    <h4 class="h4">Approval Surat Tugas</h4>
  </div>
  <div class="mb-8">
    <CForm @submit.prevent="submit">
      <CRow class="mb-3">
        <CFormLabel for="unit" class="col-sm-1 col-form-label"
          >Unit Kerja</CFormLabel
        >
        <div class="col-sm-6">
          <VueMultiselect
            id="unit"
            v-model="selectedUnit"
            :options="optionsUnit"
            placeholder="Pilih Unit Kerja "
            label="alias"
            track-by="alias"
            :custom-label="viewSelectSearch"
          >
          </VueMultiselect>
        </div>
        <CButton
          :disabled="selectedUnit == null"
          type="submit"
          color="success"
          size="sm"
          variant=""
          @click="selectUnit"
          class="col-sm-1 h-10 text-white"
          >Pilih</CButton
        >
        <CButton
          :disabled="selectedUnit == null"
          type="button"
          color="danger"
          size="sm"
          variant=""
          @click="selectedUnit = null"
          class="mx-1 col-sm-1 h-10 text-white"
          >Reset</CButton
        >
      </CRow>
    </CForm>
  </div>
  <!-- <p>{{ selectedUnit != null && selectedUnit.namaJabatan }}</p> -->
  <!-- <pre>{{ selectedUnit }}</pre> -->
  <!-- <pre>{{ this.rows }}</pre> -->
  <!-- <div v-if="rows && selectedUnit != null"> -->
  <div>
    <p class="italic text-yellow-500 mb-2 text-sm blink-animation">
      <span>::: press enter untuk mencari</span>
    </p>
    <vue-good-table
      v-if="rows"
      class="mb-4"
      theme="polar-bear"
      styleClass="vgt-table striped condensed"
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
      }"
    >
      <template #table-row="props">
        <template v-if="props.column.field == 'actions'">
          <CButton
            v-if="isShowForNipKhusus && !props.row.nomorSt"
            color="warning"
            size="sm"
            variant="outline"
            @click="resInputNomorAction(props.row.idSt)"
            class="mx-1 my-1"
            >Input Nomor</CButton
          >
          <CButton
            v-if="isShowForNipKhusus"
            color="success"
            size="sm"
            variant="outline"
            @click="resInputNomorAction(props.row.idSt)"
            class="mx-1 my-1"
            >Preview</CButton
          >
          <CButton
            v-if="isShowForNipKhusus"
            color="primary"
            size="sm"
            variant="outline"
            @click="resDelAction(props.row.idSektor)"
            class="mx-1 my-1"
            >E-SIGN</CButton
          >
        </template>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
  <!-- <p
    v-else
    class="text-center mt-12 italic text-red-500 mb-2 text-lg blink-animation"
  >
    <span>: : : &emsp; belum ada data &emsp; : : :</span>
  </p> -->
  <!-- <p v-else class="text-center mt-12 italic">::: belum ada data :::</p> -->
  <ConfirmDelete
    :statVisible="isDeleteConfirm"
    title="Hapus data"
    msg="Apakah anda yakin akan menghapus data ini?"
    @close-modal="isDeleteConfirm = false"
    @confirm-ok="actionDelete"
  />
  <InputNomorSt
    :statVisible="isInputNomorSt"
    title="Input Nomor ST"
    msg="Apakah anda yakin akan menghapus data ini?"
    @close-modal="isInputNomorSt = false"
    @confirm-ok="actionInputNomorSt"
  />
</template>

<script>
import axios from 'axios'
import Loading from 'vue3-loading-overlay'
import ConfirmDelete from '@/components/simaren/ConfirmDelete.vue'
import InputNomorSt from '@/components/simaren/InputNomorSt.vue'
import VueMultiselect from 'vue-multiselect'

const columns = [
  {
    label: 'ID ST',
    field: 'idSt',
    // hidden: true,
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nomor ST',
    field: 'nomorSt',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama Unit',
    field: 'namaUnitKerja',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama Penugasan',
    field: 'namaPenugasan',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Tgl Mulai',
    field: 'tanggalMulai',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Tgl Selesai',
    field: 'tanggalSelesai',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Lokasi',
    field: 'lokasiProvinsi',
    thClass: 'text-base',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Actions',
    field: 'actions',
    width: '180px',
    globalSearchDisabled: true,
  },
]

export default {
  name: 'my-component',
  components: {
    Loading,
    ConfirmDelete,
    VueMultiselect,
    InputNomorSt,
  },
  data() {
    return {
      selectedUnit: {
        // ::: NULL KALO UDAH BERES :::
        id: 7,
        parentId: 1,
        idWilayahDati1: 71,
        alias: 'SESMA',
        deskripsi: 'Sekretariat Utama',
        kodeStrukturOrganisasi: 'SU00',
        namaKepala: 'Sekretaris Utama',
        namaJabatan: 'Sekretaris Utama',
      },
      optionsUnit: [],
      searchTerm: '',
      columns,
      rows: null,
      loading: false,
      isDeleteConfirm: false,
      idToDel: null,
      isInputNomorSt: false,
      idToInput: null,
      isShowForNipKhusus: false,
    }
  },
  async mounted() {
    this.isShowForNipKhusus = await this.$func.isNipAllowToAdd()
    this.optionsUnit = await this.$store.dispatch('loadListDeputi')
    // ::: HAPUS KALO UDAH BERES :::
    this.selectUnit()
  },
  watch: {
    selectedUnit(val, oldVal) {
      if (oldVal != null) {
        this.rows = null
      }
    },
  },
  methods: {
    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },

    selectUnit() {
      // alert(this.selectedUnit.namaUnit)
      this.loadSektor()
    },

    async loadSektor() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: this.$apiAddress,
        url: '/api/persetujuanstes1',
        params: {
          token: localStorage.getItem('token'),
          namaJabatan: this.selectedUnit.namaJabatan,
        },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }

      this.rows = responseData
      this.loading = false
    },

    resDelAction(id) {
      this.idToDel = id
      this.isDeleteConfirm = true
    },

    async actionDelete() {
      try {
        const response = await axios({
          method: 'DELETE',
          baseURL: this.$apiAddress,
          // url: `/api/sektor/${this.idToDel}`,
          params: {
            token: localStorage.getItem('token'),
            nip: localStorage.getItem('nip'),
          },
        })

        this.isDeleteConfirm = false

        if (response.status == 200) {
          this.loadSektor()

          this.toastSuccess(`Berhasil menghapus data`)
        }
      } catch (error) {
        this.toastError(error.message)
      }
    },

    resInputNomorAction(id) {
      this.idToInput = id
      this.isInputNomorSt = true
    },

    async actionInputNomorSt(nomorSt) {
      try {
        const formData = this.appendToFormData(nomorSt)

        const response = await axios({
          method: 'POST',
          baseURL: this.$apiAddress,
          url: `/api/persetujuanstes1/${this.idToInput}`,
          data: formData,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.isInputNomorSt = false

        if (response.status == 200) {
          this.loadSektor()

          this.toastSuccess(`Berhasil Input Nomor ST`)
        }
      } catch (error) {
        this.toastError(error.message)
      }
    },

    appendToFormData(nomorSt) {
      const fd = new FormData()
      fd.append('_method', 'PATCH')
      fd.append('nomorSt', nomorSt)
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    toastSuccess(msg) {
      this.$toast.open({
        message: msg,
        type: 'success',
        position: 'top-right',
        duration: 3000,
      })
    },

    toastError(msg) {
      this.$toast.open({
        message: msg,
        type: 'error',
        position: 'top-right',
        duration: 3000,
      })
    },
  },
}
</script>
