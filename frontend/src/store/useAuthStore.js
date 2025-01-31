import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  task: null,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      console.log(data);
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  data: async () => {
    try {
      const res = await axiosInstance.get("/auth/data");
      set({ authUser: res.data });
      set({ task: res.data.todos });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
 addtask: async (data) => {
   try {
     const res = await axiosInstance.post("/auth/addtask", data);
    //  console.log(data)
    //  console.log()
      set({ task: res.data.activeUser.todos });
      toast.success("Task added successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
 },
 edittask: async (data) => {
   try {
    const res = await axiosInstance.post("/auth/edittask",data);
    set({ task: res.data.activeUser.todos });
    toast.success("Task edited successfully");
   } catch (error) {
     console.log("error in editing task", error);
     toast.error(error.response.data.message);
   }
 },
 deletetask: async (data) => {
   try {
    const res = await axiosInstance.post("/auth/deletetask",data);
    set({ task: res.data.activeUser.todos });
    toast.success("Task deleted successfully");
   } catch (error) {
     console.log("error in deleting task", error);
     toast.error(error.response.data.message);
   }
 },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
