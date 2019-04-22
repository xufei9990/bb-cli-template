const path=require('path')
module.exports={
  helpers:{
    toLowercase:function(name) {
      return name.toLocaleLowerCase();
    }
  },
  page: {
    output: path.join(__dirname,'pages'),
    templates: [
      {
        name:'PageSample',
        src:path.join(__dirname,'templates/pages/PageSample'),
        prompts:[]
      }
    ]
  }
}