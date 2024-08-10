import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import site_data_default from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function api(id?: number) {
  let url = process.env.API_URL + "/site_versions/";

  if (id) {
    url += id;
  }

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Api-Key ${process.env.API_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Erro na requisição: " + error);
    return site_data_default
  }
}