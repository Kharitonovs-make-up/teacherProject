
export const generateGuidelines = () =>{
	const guidelinesHTML = `
		<div class="content">
			<div class="container">
				<h2 class="content-title">Методическая копилка</h2>
				<div class="guideline">
					<div class="guideline-block">
						<div class="guideline-block__book">
							<a href="https://yadi.sk/i/8x4DT4qzkrWPE">Б. Екимов. "Говори, мама, говори".</a>
						</div>
						<div class="guideline-block__book">
							<a href="https://yadi.sk/i/51ysaahDmDk8G">В. Быков "Сотников"</a>
						</div>
						<div class="guideline-block__book">
							<a href="https://yadi.sk/i/2GED2Xy1mFS3Z">В. Астафьев. "Тот, кто не растет, умирает"</a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
						<div class="guideline-block__book">
							<a href="#"></a>
						</div>
					</div>
					<div class="guideline-img">
						<img class="guideline-img__props" src="./assets/images/book.jpg" alt="книга">
					</div>
				</div>
			</div>
		</div>
	`
	const main = document.querySelector('main')
	main.textContent = ''
	main.insertAdjacentHTML('afterbegin', guidelinesHTML)
}