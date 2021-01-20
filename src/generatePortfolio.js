
export const generatePortfolio = () =>{
	const guidePortfolio = `
		<div class="portfolio">
		<div class="container">
			<h2 class="content-title">Результаты педогогической деятельности</h2>
			<div class="portfolio__info">
				Здесь размещены свидетельства, дипломы и сертификаты моего участия в различных конкурсах,
				вебинарах и моих публикаций, а также материалы моих выступлений на педсоветах, ШМО, РМО, ОМО .
			</div>
			<div class="portfolio-block">
				<h3 class="portfolio-block-subtitle">2019 учебный год.</h3>
				<div class="portfolio-block__img-descr">(можете добавить дополнительные комментарии)</div>
				<div class="portfolio-block__year">
					<div class="portfolio-block__img">
						<img src="./assets/images/portfolio/certificate-2019.jpg" alt="ошибка загрузки">
					</div>
					
					<div class="portfolio-block__img">
						<img src="./assets/images/portfolio/diploma-2019.jpg" alt="ошибка загрузки">
					</div>
					
					<div class="portfolio-block__img">
						<img src="./assets/images/portfolio/thanks-2019.jpg" alt="ошибка загрузки">
					</div>
				</div>
				
				<h3 class="portfolio-block-subtitle">2018 учебный год.</h3>
				<div class="portfolio-block__img-descr">(можете добавить дополнительные комментарии)</div>
				<div class="portfolio-block__year">
					<div class="portfolio-block__img">
						<img src="./assets/images/portfolio/diploma-2018.jpg" alt="ошибка загрузки">
					</div>
					
					<div class="portfolio-block__img">
						<img src="./assets/images/portfolio/thanks-2018.jpg" alt="ошибка загрузки">
					</div>
				</div>
			</div>
		</div>
	</div>
	`
	const main = document.querySelector('main')
	main.textContent = ''
	main.insertAdjacentHTML('afterbegin', guidePortfolio)
}