import { Question } from "./question.model";

export class Exam {
    constructor(
        public examId: string,
        public questions: Question[]
    ) {
        this.examId = examId;
        this.questions = questions;
    }
}