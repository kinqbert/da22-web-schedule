"use client";

import { useEffect, useState } from "react";

import { getSchedule } from "@/api/api";

import { Lecture } from "@/types";

import "./page.scss";

export default function Home() {
  const [lectures, setLectures] = useState<Lecture[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSchedule(1)
      .then(response => {
        setLectures(response as Lecture[][]);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <main className="main"></main>;
}
