"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[468],{72468:function(e,t,a){a.d(t,{Z:function(){return G}});var n=a(73396),r=a(49242),o={key:0,class:"h4 mb-4"},i={key:1,class:"h4 mb-4"},l=(0,n.Uk)("ID "),s={class:"col-sm-2"},u=(0,n.Uk)("Tahun "),d=(0,n._)("span",{class:"text-red-500"},"*",-1),m={class:"col-sm-2"},c=(0,n.Uk)("Nama Sektor "),p=(0,n._)("span",{class:"text-red-500"},"*",-1),f={class:"col-sm-9"},k=(0,n.Uk)("Nama Tema "),h=(0,n._)("span",{class:"text-red-500"},"*",-1),w={class:"col-sm-9"},b=(0,n.Uk)("Informasi Tema Yang Diharapkan "),g=(0,n._)("span",{class:"text-red-500"},"*",-1),_={class:"col-sm-9"},v=(0,n._)("p",{class:"text-sm mt-2 text-red-500"}," note : pisahkan informasi tema dengan titik koma ';' ",-1),S=(0,n.Uk)("Kedeputian Koord Tema "),x=(0,n._)("span",{class:"text-red-500"},"*",-1),T={class:"col-sm-9"},W=(0,n.Uk)("Unit Kerja PJ Tema "),U=(0,n._)("span",{class:"text-red-500"},"*",-1),y={class:"col-sm-9"},D=(0,n.Uk)("Triwulan Pelaporan Tema "),V=(0,n._)("span",{class:"text-red-500"},"*",-1),R={class:"col-sm-4"},C=(0,n.Uk)(" Batal "),j=(0,n.Uk)(" Reset "),K={key:0},I=(0,n.Uk)(" Simpan "),$={key:1};function F(e,t,a,F,P,E){var L=(0,n.up)("Loading"),B=(0,n.up)("CFormLabel"),q=(0,n.up)("CFormInput"),Z=(0,n.up)("CRow"),A=(0,n.up)("VueMultiselect"),O=(0,n.up)("CFormTextarea"),G=(0,n.up)("CButton"),M=(0,n.up)("CCol"),N=(0,n.up)("CSpinner"),H=(0,n.up)("CForm"),Y=(0,n.up)("CCardBody"),z=(0,n.up)("CCard");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(L,{active:P.loading,"onUpdate:active":t[0]||(t[0]=function(e){return P.loading=e}),"is-full-page":!0},null,8,["active"]),(0,n.Wm)(z,{class:"mb-4"},{default:(0,n.w5)((function(){return[(0,n.Wm)(Y,{class:"p-4"},{default:(0,n.w5)((function(){return["create"==a.mode?((0,n.wg)(),(0,n.iD)("h4",o,"Tambah Tema")):"update"==a.mode?((0,n.wg)(),(0,n.iD)("h4",i,"Edit Tema")):(0,n.kq)("",!0),"update"==a.mode?((0,n.wg)(),(0,n.j4)(Z,{key:2,class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[l]})),_:1}),(0,n._)("div",s,[(0,n.Wm)(q,{modelValue:P.editData.idTema,"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.editData.idTema=e}),readonly:""},null,8,["modelValue"])])]})),_:1})):(0,n.kq)("",!0),(0,n.Wm)(H,{onSubmit:(0,r.iM)(E.submit,["prevent"])},{default:(0,n.w5)((function(){return[(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"tahun",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[u,d]})),_:1}),(0,n._)("div",m,[(0,n.Wm)(q,{type:"number",id:"tahun",modelValue:P.form.tahun,"onUpdate:modelValue":t[2]||(t[2]=function(e){return P.form.tahun=e}),readonly:"",required:""},null,8,["modelValue"])])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"nama-sektor",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[c,p]})),_:1}),(0,n._)("div",f,[(0,n.Wm)(A,{id:"nama-sektor",modelValue:P.selectedSektor,"onUpdate:modelValue":t[3]||(t[3]=function(e){return P.selectedSektor=e}),options:P.optionsSektor,placeholder:"Pilih Sektor",label:"deskripsi","track-by":"deskripsi","custom-label":E.viewSelectSektor},null,8,["modelValue","options","custom-label"])])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"nama-tema",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[k,h]})),_:1}),(0,n._)("div",w,[(0,n.Wm)(q,{type:"text",id:"nama-tema",modelValue:P.form.namaTema,"onUpdate:modelValue":t[4]||(t[4]=function(e){return P.form.namaTema=e}),required:""},null,8,["modelValue"])])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"info-tema",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[b,g]})),_:1}),(0,n._)("div",_,[(0,n.Wm)(O,{id:"info-tema",rows:"3",modelValue:P.form.deskripsi,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.form.deskripsi=e}),required:"",placeholder:"Info A; Info B; Info C;"},null,8,["modelValue"]),v])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"deputi-tema",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[S,x]})),_:1}),(0,n._)("div",T,[(0,n.Wm)(q,{type:"text",id:"dep-tema",value:P.viewDeputi,readonly:""},null,8,["value"])])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"pj-tema",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[W,U]})),_:1}),(0,n._)("div",y,[(0,n.Wm)(A,{id:"pj-tema",modelValue:P.selectedRendal,"onUpdate:modelValue":t[6]||(t[6]=function(e){return P.selectedRendal=e}),options:P.optionsRendal,placeholder:"Pilih Unit Kerja Penanggungjawab",label:"deskripsi","track-by":"deskripsi","custom-label":E.viewSelectSearch},null,8,["modelValue","options","custom-label"])])]})),_:1}),(0,n.Wm)(Z,{class:"mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(B,{for:"tw-tema",class:"col-sm-3 col-form-label"},{default:(0,n.w5)((function(){return[D,V]})),_:1}),(0,n._)("div",R,[(0,n.Wm)(A,{id:"tw-tema",modelValue:P.form.triwulan,"onUpdate:modelValue":t[7]||(t[7]=function(e){return P.form.triwulan=e}),options:P.optionsTriwulan,multiple:!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih Triwulan"},null,8,["modelValue","options"])])]})),_:1}),(0,n.Wm)(Z,{class:"mt-8 view-form"},{default:(0,n.w5)((function(){return[(0,n.Wm)(M,{sm:"12",lg:"6",class:"mb-3"},{default:(0,n.w5)((function(){return["view"!=a.mode?((0,n.wg)(),(0,n.j4)(G,{key:0,variant:"outline",color:"dark",onClick:t[8]||(t[8]=function(t){return e.$router.push("/tema")}),class:"px-5"},{default:(0,n.w5)((function(){return[C]})),_:1})):(0,n.kq)("",!0)]})),_:1}),"create"==a.mode||"update"==a.mode?((0,n.wg)(),(0,n.j4)(M,{key:0,sm:"12",md:"6",class:"flex content-center justify-end pr-3 mb-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(G,{type:"button",class:"ml-1 px-5 text-white",color:"danger",onClick:E.reset},{default:(0,n.w5)((function(){return[j]})),_:1},8,["onClick"]),(0,n.Wm)(G,{type:"submit",color:"info",class:"px-5 ml-2 text-white"},{default:(0,n.w5)((function(){return[P.loading?((0,n.wg)(),(0,n.iD)("div",K,[(0,n.Wm)(N,{color:"white",size:"sm",class:"mr-2"}),I])):((0,n.wg)(),(0,n.iD)("p",$,"Simpan"))]})),_:1})]})),_:1})):(0,n.kq)("",!0)]})),_:1})]})),_:1},8,["onSubmit"])]})),_:1})]})),_:1})],64)}var P=a(48534),E=(a(36133),a(92222),a(57327),a(41539),a(56265)),L=a.n(E),B=a(16368),q=a(6216),Z={components:{VueMultiselect:B.ZP,Loading:q.Z},props:["mode","idTema"],data:function(){return{form:this.getEmptyForm(),submitted:!1,loading:!1,selectedSektor:null,optionsSektor:[],viewDeputi:null,selectedRendal:null,optionsRendal:[],optionsTriwulan:[1,2,3,4],editData:{}}},watch:{selectedSektor:function(e){e&&(this.form.idSektor=e.idSektor)},selectedRendal:function(e){e&&(this.form.idUnitKerja=e.id,this.form.idKedeputian=e.parentId,this.viewDeputi="".concat(e.deputi," - ").concat(e.namaDeputi))}},mounted:function(){var e=this;return(0,P.Z)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.tahun=localStorage.tahun,t.next=3,e.$store.dispatch("loadListSektor");case 3:return e.optionsSektor=t.sent,t.next=6,e.$store.dispatch("loadListRendal");case 6:if(e.optionsRendal=t.sent,"update"!=e.mode){t.next=15;break}return e.loading=!0,t.next=11,e.loadTemaById();case 11:a=e.optionsSektor.filter((function(t){return t.idSektor==e.form.idSektor})),e.selectedSektor=a[0],n=e.optionsRendal.filter((function(t){return t.id==e.form.idUnitKerja})),e.selectedRendal=n[0];case 15:case"end":return t.stop()}}),t)})))()},methods:{viewSelectSektor:function(e){var t=e.namaSektor;return"".concat(t)},viewSelectSearch:function(e){var t=e.alias,a=e.deskripsi;return"".concat(t," - ").concat(a)},submit:function(){var e=this;return(0,P.Z)(regeneratorRuntime.mark((function t(){var a,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$func.isNullOfObjElement(e.form),!a){t.next=26;break}if(e.submitted=!0,n=e.appendToFormData(),t.prev=4,"create"!=e.mode){t.next=13;break}return e.loading=!0,t.next=9,L()({method:"POST",baseURL:e.$apiAddress,url:"/api/tema",data:n,params:{token:localStorage.getItem("token")}});case 9:r=t.sent,200!=r.status?e.error="Gagal menyimpan data":(e.loading=!1,e.$router.push("/tema"),e.toastSuccess("Berhasil menyimpan data")),t.next=19;break;case 13:if("update"!=e.mode){t.next=19;break}return e.loading=!0,t.next=17,L()({method:"POST",baseURL:e.$apiAddress,url:"/api/tema/".concat(e.idTema),data:n,params:{token:localStorage.getItem("token")}});case 17:o=t.sent,200!=o.status?e.error="Gagal merubah data":(e.loading=!1,e.$router.push("/tema"),e.toastSuccess("Berhasil merubah data"));case 19:t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](4),setTimeout((function(){e.loading=!1,e.toastError("Terjadi kesalahan saat submit data")}),500);case 24:t.next=27;break;case 26:e.toastWarning("Lengkapi data sebelum submit!");case 27:case"end":return t.stop()}}),t,null,[[4,21]])})))()},reset:function(){this.form=this.getEmptyForm(),this.submitted=!1,this.selectedSektor=null,this.viewDeputi=null,this.selectedRendal=null},getEmptyForm:function(){return{tahun:null,idSektor:null,namaTema:null,deskripsi:null,idKedeputian:null,idUnitKerja:null,triwulan:null}},appendToFormData:function(){var e=new FormData;return"update"==this.mode&&e.append("_method","PATCH"),e.append("idSektor",this.form.idSektor),e.append("namaTema",this.form.namaTema),e.append("deskripsi",this.form.deskripsi),e.append("idKedeputian",this.form.idKedeputian),e.append("idUnitKerja",this.form.idUnitKerja),e.append("tahun",this.form.tahun),e.append("triwulan",this.form.triwulan),e.append("nip",localStorage.getItem("nip")),e},loadTemaById:function(){var e=this;return(0,P.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L()({method:"GET",baseURL:e.$apiAddress,url:"/api/tema/".concat(e.idTema),params:{token:localStorage.getItem("token")}});case 3:return a=t.sent,t.next=6,a.data;case 6:e.editData=t.sent,200==a.status&&(e.form={tahun:e.editData.tahun,idSektor:e.editData.idSektor,namaTema:e.editData.namaTema,deskripsi:e.editData.deskripsi,idKedeputian:e.editData.idKedeputian,idUnitKerja:e.editData.idUnitKerja,triwulan:e.editData.triwulan}),e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),e.toastError(t.t0.message),e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},toastSuccess:function(e){this.$toast.open({message:e,type:"success",position:"top-right",duration:3e3})},toastError:function(e){this.$toast.open({message:e,type:"error",position:"top-right",duration:3e3})},toastWarning:function(e){this.$toast.open({message:e,type:"warning",position:"top-right",duration:3e3})}}},A=a(40089);const O=(0,A.Z)(Z,[["render",F]]);var G=O}}]);
//# sourceMappingURL=468-legacy.0622167d.js.map