
export const generatePupil = () => {
	const generatePupil = `
		<div class="pupil">
			<div class="container">
				<h2 class="pupil-title">Для ученика</h2>
				<div class="pupil-block">
					<div class="pupil-block__img">
						<img src="./assets/images/pupilBlock.jpg" alt="картинка не загружена">
					</div>
					<div class="pupil-block__descr">Эта страница будет полезна не только для учителя, но и для ученика.
						Здесь Вы найдете планы различных творческих  работ,
						материалы для зачетов, контрольных работ, рекомендации для выполнения домашних заданий.</div>
				</div>
			</div>
		</div>
	`
	const main = document.querySelector('main')
	main.textContent = ''
	main.insertAdjacentHTML('afterbegin', generatePupil)
}