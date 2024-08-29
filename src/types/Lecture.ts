import LectureType from "./LectureType";

export default interface Lecture {
  title: string;
  lecturer: string | null;
  type: LectureType;
  order: "1" | "2" | "3" | "4" | "5";
}
