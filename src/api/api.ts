import apiClient from "./apiClient";

import { Lecture } from "@/types";

export async function getSchedule(number: 1 | 2): Promise<Lecture[][]> {
  try {
    const response = await apiClient.get(`/schedule${number}.json`);

    return response.data;
  } catch (error) {
    console.error('Error getting schedule:', error);
    throw error;
  }
}
