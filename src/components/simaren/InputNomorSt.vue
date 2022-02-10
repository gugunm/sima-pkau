<template>
  <CModal
    :visible="statVisible"
    backdrop="static"
    @close="
      () => {
        confirmCancel()
      }
    "
  >
    <CModalBody class="p-0"
      ><div class="flex flex-col">
        <div class="flex flex-row w-full p-4">
          <div
            class="mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mr-4 sm:h-10 sm:w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgba(220, 184, 24)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>

          <div class="w-full">
            <p class="text-lg font-semibold mt-1 mb-8">
              {{ title || 'Input Nomor ST' }}
            </p>
            <CForm @submit.prevent="submit">
              <CFormInput
                type="text"
                v-model="nomorSt"
                @keyup.enter="confirmOk"
              />
            </CForm>
          </div>
        </div>
        <div
          class="bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="confirmOk"
          >
            <div v-if="loading">
              <CSpinner color="white" size="sm" class="mr-2" />
            </div>
            Simpan
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="confirmCancel()"
          >
            Cancel
          </button>
        </div>
      </div></CModalBody
    >
  </CModal>
</template>
<script>
export default {
  props: ['statVisible', 'title', 'msg'],
  emits: ['close-modal', 'confirm-ok'],
  computed: {},
  watch: {
    value(val) {
      if (val == false) {
        this.confirmCancel()
      }
    },
  },
  data() {
    return {
      nomorSt: '',
      loading: false,
    }
  },
  methods: {
    confirmCancel() {
      this.$emit('close-modal', false)
    },
    confirmOk() {
      if (this.nomorSt != '') {
        this.loading = true
        setTimeout(() => {
          this.$emit('confirm-ok', this.nomorSt)
          this.nomorSt = null
          this.loading = false
        }, 500)
      }
    },
  },
}
</script>
