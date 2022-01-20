"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[586],{7578:function(e,t,s){s.d(t,{Z:function(){return g}});var o=s(3396),i=s(7139);const a={class:"flex flex-col"},n={class:"flex flex-row p-4"},l=(0,o._)("div",{class:"mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mr-4 sm:h-10 sm:w-10"},[(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"rgba(220, 38, 38)"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),r={class:"text-lg font-semibold mb-2"},u={class:"bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},d={key:0},m=(0,o.Uk)(" Hapus ");function c(e,t,s,c,p,f){const h=(0,o.up)("CSpinner"),g=(0,o.up)("CModalBody"),w=(0,o.up)("CModal");return(0,o.wg)(),(0,o.j4)(w,{visible:s.statVisible,onClose:t[2]||(t[2]=()=>{f.confirmCancel()})},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"p-0"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",n,[l,(0,o._)("div",null,[(0,o._)("p",r,(0,i.zw)(s.title||"Meninggalkan halaman"),1),(0,o._)("p",null,(0,i.zw)(s.msg||"Meniggalkan halaman tanpa melakukan submit data akan menghilangkan data yang telah diinput."),1)])]),(0,o._)("div",u,[(0,o._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=(...e)=>f.confirmOk&&f.confirmOk(...e))},[p.loading?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(h,{color:"white",size:"sm",class:"mr-2"})])):(0,o.kq)("",!0),m]),(0,o._)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=e=>f.confirmCancel())}," Cancel ")])])])),_:1})])),_:1},8,["visible"])}var p={props:["statVisible","title","msg"],emits:["close-modal","confirm-ok"],computed:{},watch:{value(e){0==e&&this.confirmCancel()}},data(){return{loading:!1}},methods:{confirmCancel(){this.$emit("close-modal",!1)},confirmOk(){this.loading=!0,setTimeout((()=>{this.$emit("confirm-ok")}),500)}}},f=s(89);const h=(0,f.Z)(p,[["render",c]]);var g=h},586:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var o=s(3396),i=s(9242),a=s(7139);const n=(0,o._)("div",{class:"mb-4"},[(0,o._)("h4",{class:"h4"},"Kontributor")],-1),l={class:"flex flex-wrap lg:flex-row-reverse"},r={class:"flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"},u={class:"mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start"},d=(0,o._)("span",{class:"inline-block w-2/12 lg:w-1/12 pt-2"},"Search",-1),m=(0,o.Uk)("Edit"),c=(0,o.Uk)("Hapus"),p={key:1};function f(e,t,s,f,h,g){const w=(0,o.up)("Loading"),b=(0,o.up)("CButton"),k=(0,o.up)("vue-good-table"),x=(0,o.up)("ConfirmDelete");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(w,{active:h.loading,"onUpdate:active":t[0]||(t[0]=e=>h.loading=e),"is-full-page":!0},null,8,["active"]),n,(0,o._)("div",null,[(0,o._)("div",l,[(0,o._)("div",r,[h.isShowForNipKhusus?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none",onClick:t[1]||(t[1]=t=>e.$router.push("/kontributor/create"))}," Tambah ")):(0,o.kq)("",!0)]),(0,o._)("div",u,[d,(0,o.wy)((0,o._)("input",{class:"border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm",type:"text",name:"search",placeholder:"Teks..","onUpdate:modelValue":t[2]||(t[2]=e=>h.searchTerm=e)},null,512),[[i.nr,h.searchTerm]])])]),h.rows?((0,o.wg)(),(0,o.j4)(k,{key:0,class:"mb-4",theme:"polar-bear",styleClass:"vgt-table striped condensed",columns:h.columns,rows:h.rows,"line-numbers":!0,"search-options":{enabled:!0,externalQuery:h.searchTerm},"pagination-options":{enabled:!0,mode:"records"}},{"table-row":(0,o.w5)((t=>["actions"==t.column.field?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[h.isShowForNipKhusus?((0,o.wg)(),(0,o.j4)(b,{key:0,color:"warning",size:"sm",variant:"outline",onClick:s=>e.$router.push({name:"Update Kontributor",params:{idKontributor:t.row.idKontributor}}),class:"mx-1"},{default:(0,o.w5)((()=>[m])),_:2},1032,["onClick"])):(0,o.kq)("",!0),h.isShowForNipKhusus?((0,o.wg)(),(0,o.j4)(b,{key:1,color:"danger",size:"sm",variant:"outline",onClick:e=>g.resDelAction(t.row.idKontributor),class:"mx-1"},{default:(0,o.w5)((()=>[c])),_:2},1032,["onClick"])):(0,o.kq)("",!0)],64)):((0,o.wg)(),(0,o.iD)("span",p,(0,a.zw)(t.formattedRow[t.column.field]),1))])),_:1},8,["columns","rows","search-options"])):(0,o.kq)("",!0)]),(0,o.Wm)(x,{statVisible:h.isDeleteConfirm,title:"Hapus data",msg:"Apakah anda yakin akan menghapus data ini?",onCloseModal:t[3]||(t[3]=e=>h.isDeleteConfirm=!1),onConfirmOk:g.actionDelete},null,8,["statVisible","onConfirmOk"])],64)}var h=s(6265),g=s.n(h),w=s(6216),b=s(7578);const k=[{label:"Id",field:"idKontributor"},{label:"Nama Topik",field:"namaTopik",thClass:"text-sm",tdClass:"text-sm"},{label:"Unit Kerja Kontributor",field:"unitKontributor",thClass:"text-sm",tdClass:"text-sm"},{label:"Informasi Kontributor Yang Diharapkan",field:"deskripsi",thClass:"text-sm",tdClass:"text-sm"},{label:"Kedeputian Koord Topik",field:"pjDeputi",thClass:"text-sm",tdClass:"text-sm"},{label:"Unit Kerja PJ Topik",field:"unitKerja",thClass:"text-sm",tdClass:"text-sm"},{label:"TW Pelaporan Kontributor",field:"triwulan",thClass:"text-sm",tdClass:"text-sm"},{label:"Actions",field:"actions",width:"150px",globalSearchDisabled:!0}];var x={name:"my-component",components:{Loading:w.Z,ConfirmDelete:b.Z},data(){return{searchTerm:"",columns:k,rows:null,loading:!1,isDeleteConfirm:!1,idToDel:null,isShowForNipKhusus:!1}},async mounted(){this.loadKontributor(),this.isShowForNipKhusus=await this.$func.isNipAllowToAdd()},methods:{async loadKontributor(){this.loading=!0;const e=await g()({method:"GET",baseURL:this.$apiAddress,url:"/api/kontributor",params:{token:localStorage.getItem("token")}}),t=await e.data;if(200!=e.status){const e=new Error(t.message||"Failed to fetch data");throw e}this.rows=t,this.loading=!1},resDelAction(e){this.idToDel=e,this.isDeleteConfirm=!0},async actionDelete(){try{const e=await g()({method:"DELETE",baseURL:this.$apiAddress,url:`/api/kontributor/${this.idToDel}`,params:{token:localStorage.getItem("token"),nip:localStorage.getItem("nip")}});this.isDeleteConfirm=!1,200==e.status&&(this.loadKontributor(),this.toastSuccess("Berhasil menghapus data"))}catch(e){this.toastError(e.message)}},toastSuccess(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})}}},C=s(89);const v=(0,C.Z)(x,[["render",f]]);var y=v}}]);
//# sourceMappingURL=586.7d3aaaf0.js.map