import React from 'react';
import { QuestionList } from './components/questionList';


function App() {
	const [chelTotal, setChelTotal] = React.useState(0)//обычная переменная (мы с тобой проходили стейты)
	const calculate = () => {//функция которая считает сумму на одного человека и хаписывает ее в стейт
		const answeres = new QuestionList();
		const random = (Math.floor(Math.random() * (200 - 100)) + 100)
		const ApartmentsFull = answeres.entranceMeating.count * answeres.Apartments.count - random;
		const ApartmentsFor2 = ApartmentsFull - answeres.ApartmentFor5.count - answeres.ApartmentFor3.count;
		const ApartmentsFor3 = ApartmentsFull - answeres.ApartmentFor5.count - ApartmentsFor2;
		const ApartmentsFor5 = ApartmentsFull - ApartmentsFor2 - ApartmentsFor3;
		const summForOnePerson = (answeres.summTotal.count / (ApartmentsFor2 * 2 + ApartmentsFor3 * 3 + ApartmentsFor5 * 5));
		setChelTotal(summForOnePerson);
	}
	return (
		<div className="App">
			<div className="">
				<p>Сумма на одного человека: <span>{Math.floor(chelTotal)}</span> рублей</p>
				<p>Сумма на квартиру с 2 людьми <span>{Math.floor(chelTotal * 2)}</span> рублей</p>
				<p>Сумма на квартиру с 3 людьми <span>{Math.floor(chelTotal * 3)}</span> рублей</p>
				<p>Сумма на квартиру с 5 людьми <span>{Math.floor(chelTotal * 5)}</span> рублей</p>
			</div>
			<button onClick={() => calculate()}>Рассчитать</button>
		</div>
	);
}

export default App;
//дальше я думаю ты поймешь

