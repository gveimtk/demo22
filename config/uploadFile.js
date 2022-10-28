//文件上传配置
const  multer= require('multer')

const storage = multer.diskStorage({
    //存放路径
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    //重命名
    
    filename: function (req, file, cb) {
        console.log(file);
        let arr = file.originalname.split('.')
        console.log(arr);
      const uniqueSuffix = arr[0]+'-'+Date.now()+'.'+arr[1]
      cb(null, uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports= upload