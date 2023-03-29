// export const actions = {
//     add: async ({ request, files }) => {
//       const data = await request.formData()



    
//       const file = data.get('file')
  
//       let filename
  
//       try {
  
//         if (file) {
  
//           const ext = file.name.split('.').pop()
//           filename ="11111111111111"
          
//           let ab = await file.arrayBuffer()
//           console.log(Array.from(ab));
  
//           writeFileSync(`static/img/${filename}`, Buffer.from(ab, (e) => {
//             console.log(e)
//           }))
//         }
  
  
//         return { success: true }
  
  
//       } catch (e) {
//         console.log(e);
//         return { success: false };
  
//       }
//     }
//   }



import  sharp from 'sharp';


export const actions = {
    add: async ({ request }) => {
    const data = await request.formData()
    let file = data.getAll('file')
    console.log(file);
    const names = file.map(user => user.name);
    console.log(names);
    if (!file) return next();
  

    await Promise.all(
      file.map(async (file,i) => {
  
     let filename   = `tour-${"file.originalname"}-${Date.now()}-${i + 1}.jpeg`;

        if (file) {
            
        //   const ext = file.name.split('.').pop()
        //   filename = "userName" + '-' +Date.now().toString() + '.' + ext
          
          let ab = await file.arrayBuffer()
        //  console.log(Array.from(ab));
  

          await sharp(ab)
          .resize(500, 500)
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toFile(`static/img2/${filename}`);
          return { success: true }     
        }
    })
    
    );}
  };


 