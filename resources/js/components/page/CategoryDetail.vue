<template>
<div>
    <a  href="javascript:history.go(-1)">
    <i class="fas fa-arrow-left back-icon mt-3" ></i>
    </a>
    <div v-if="documents.length > 0" class="row mt-5">
        <div class="col-md-4" v-for="(document) in documents" :key="document.id_document">
            <div class="card border-rounded" style="width: 18rem;">
                <img class="card-img-top" :src="'/userdata/'+user.id_akun+'/'+document.file_name"
                    alt="Card image cap" v-if="user.name != null">
                     <img class="card-img-top" :src="'/userdata/'+document.id_akun+'/'+document.file_name"
                    alt="Card image cap" v-else>
                <div class="card-body border-top">
                    <h5 class="card-title">{{document.file_name}}</h5>
                    <div class="row">
                        <div class="col-12 col-md-6">
                             <a v-if="user.name != null" @click.prevent="download(user.id_akun,document.file_name)" class="btn btn-success mx-auto d-block">Download</a>
                                <a v-else @click.prevent="download(document.id_akun,document.file_name)" class="btn btn-success mx-auto d-block">Download</a>
                        </div>
                           <div class="col-12 col-md-6">
                             <a @click.prevent="deletefile(document.id_document)" class="btn mt-2 mt-md-0 btn-danger mx-auto d-block">Delete</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <div v-else class="row mt-5">
        <div class="col-md-4">
             
        </div>
         <div class="col-md-4">
             <img :src="'/images/not found.png'" class="w-100 d-block ml-auto mr-auto" alt="">
             <h4 class="text-center mt-3">Tidak Ada dokumen di folder ini</h4>
               <!-- <button  class="btn btn-primary ml-auto mr-auto d-block rounded-pill text-white py-2"> <i class="fas fa-plus"></i> Tambah Sekarang</button> -->
        </div>
         <div class="col-md-4">
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        file: null,
        user: '',
        documents: [],
    }),
    methods: {
        getfile(){
             if(this.$route.name== 'admineditcategory'){
              axios.get(`/api/category/detailname/${this.$route.params.id}`,{params:{categoryid:this.$route.params.categoryname}}).then((res) => {
                this.documents = res.data;      
            })
        }else{
           axios.get('/api/user').then((res) => {
            this.user = res.data
        }).then(() => {
            axios.get(`/api/category/detail/${this.$route.params.id}`,{params : {iduser: this.user.id_akun}}).then((res) => {
                this.documents = res.data;  
            })
        })  
        }
        },
         download(user,filename) {
              axios({
                    url: `http://127.0.0.1:8000/userdata/${user}/${filename}`,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', filename);
                     document.body.appendChild(fileLink);

                     fileLink.click();
                });
          },
          deletefile(id){
                 this.$swal.fire({
                title: 'Apakah kamu yakin?',
                text: "Jika kamu hapus, maka data tidak akan kembali lagi.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Hapus',
                cancelButtonText: 'Kembali'
                }).then((result) => {
                if (result.value) {
                    this.$swal.fire({
                        title: 'Success!',
                        text: 'Gambar Berhasil Dihapus',
                        icon: 'success',
                        timer: 1000
                    });
                    let uri = `/api/document/delete/${id}`;
                    this.axios.delete(uri).then(response => {
                       this.getfile();
                    });                    
                }
            })
          }
      
           },
    mounted() {
       this.getfile();
       
    }

}
</script>
<style  scoped>
.back-icon{
    font-size: 3rem;
    color: #3490dc;
}
</style>