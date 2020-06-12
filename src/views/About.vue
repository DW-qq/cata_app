<template>
  <div id="about">
    <form action="http://localhost:8080/userController/addUser" method="post" enctype="multipart/form-data">
      <input placeholder="用户名" name="name" v-model="uname"><br>
      <input placeholder="密码" name="pwd" v-model="pwd"><br>
      头像:<input type="file" name="file" ><br>
      <input type="submit" value="提交" >
    </form>
    <h2>{{uname}}</h2>
  </div>
</template>
  <script>
    import {getLogin} from "../network/login";

    export default {
      name:"about",
      data(){
        return{
          uname:'',
          pwd:'',
          file:'',
        }
      },
      methods:{
        Login(){
          const pwd = this.pwd;
          const uname = this.uname;
          const file = this.file;
          console.log(pwd);
          getLogin("张三","ss","aa").then(res =>{
            console.log(uname);
            console.log("aa"+res)
          })
        }
      }
    }
  </script>

