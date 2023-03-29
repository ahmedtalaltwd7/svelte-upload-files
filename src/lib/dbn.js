
import mongoose from 'mongoose';


const MONGO_URL="mongodb://127.0.0.1/sveltemo";

const mongoConnection = {
  isConnected: 0,
};

export const dbConnect = async () => {
    console.log('MONGO_URL', MONGO_URL);
    if (mongoConnection.isConnected === 1) {
      console.log('ya estabamos conectados');
      return;
    }
  
    if (mongoose.connections.length > 0) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;
      if (mongoConnection.isConnected === 1) {
        console.log('usando conexion existente');
        return;
      }
  
      await mongoose.disconnect();
    }
    await mongoose.connect(MONGO_URL ?? '');
    mongoConnection.isConnected = 1;
    console.log('conectado a mongodb', MONGO_URL ?? '');
  };