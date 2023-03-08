import fs from 'fs'
import path from 'path'
const homeapi = (req,res) => {
    const getdata=()=>{
        const filepath=path.join(process.cwd(),'data','db.json')
        const readfile=fs.readFileSync(filepath)
        const data=JSON.parse(readfile)
        return data.data2
    }
  if(req.method==="GET"){
    const data=getdata()
    return res.status(200).json(data)
  }
}

export default homeapi