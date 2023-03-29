import { UserModel } from "$lib/Todo";
import { dbConnect } from '$lib/dbn';
import bcrypt from 'bcrypt';

export const actions = {
  reg: async ({ request }) => {
    console.time('Handle')
    const formData = await request.formData();
    const fname = formData.get('fname');
    const lname = await bcrypt.hash(formData.get('lname'), 12);
    console.timeEnd('Handle')
    // const encryptPw = async (password) => { 
    //   return await bcrypt.hash(password, 12);
    // };


    const newTodo = {
      email: fname,
      password: lname,
    };


    
    await dbConnect();
    await UserModel.create(newTodo);
   
    console.log("444"+request.body.fname);
    console.log('New todo added: ', newTodo);
    return {
      success: true,
      fname,
    };
  }
}