let list=[
  {
    title:"这周学会vue！",
    isCompleted:false,
    isEditing:false
  },
  {
    title:"我想去嵩山少林寺学武功",
    isCompleted:true,
    isEditing:false
  }
];

var app = new Vue({
  el:"#todolist",
  data:{
    addInp:"",
    listItems:[]
  },
  methods:{
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false,isEditing:false});
      this.addInp="";
    },
    del:function(index){
      this.listItems.splice(index,1);
    },
    spl:function(){
      this.isEditing=!this.isEditing;
    },
    en:function(){
      this.isEditing=!this.isEditing;
    }
  }
})
