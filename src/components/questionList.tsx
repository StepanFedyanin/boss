import { Question } from "./question";

export class QuestionList {
	entranceMeating: Question;
	Apartments: Question;
	ApartmentFor5: Question;
	ApartmentFor3: Question;
	summTotal: Question;
	constructor() {
		this.entranceMeating = new Question("Kоличество подьездов: ", 5);
		this.Apartments = new Question("Kоличество квартир: ", 100);
		this.ApartmentFor5 = new Question("Kоличество квартир по 5 человек: ", 50);
		this.ApartmentFor3 = new Question("Kоличество квартир по 3 человек: ", 10);
		this.summTotal = new Question("Сумма содержания домма", 200000);
	}
}
//просто создание классов с передачей параметров (какие данные требуется ввести и 
//в случае если не пройдет проверку какое число будет)
// также запоняются переменные с типом класса, которй создается 