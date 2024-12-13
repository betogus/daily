import { authFirebase } from "@/config/firebase.config";
import { User } from "@/models/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as auth from "firebase/auth";


export const authThunk = createAsyncThunk(
  'firebase/auth',
  async (user: User, { rejectWithValue }) => {
    try {
      const authGenerate = await auth.signInWithEmailAndPassword(
        authFirebase,
        user.email,
        user.password
      );
      const { email, uid } = authGenerate.user;

      const idTokenResult = await authGenerate.user.getIdTokenResult();
      const accessToken = idTokenResult.token;
      const expirationTime = idTokenResult.expirationTime;

      return { accessToken, expirationTime, userData: { email, uid } };
    } catch (err: any) {
      console.error("Error en authThunk:", err);
      return rejectWithValue(err.message || "Error inesperado");
    }
  }
);
