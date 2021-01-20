
export const generateCertification = () =>{
	const guidelinesHTML = `
		<div class="certification">
			<div class="container">
				<h2 class="certification-title">Итоговая аттестация</h2>
				<div class="certification-block">
					<div class="certification-block__img">
						<img src="assets/images/certificationBlock.jpg" alt="картинка не загружена">
					</div>
					<div class="certification-block__descr">Здесь расположены материалы, касающиеся аттестации учащихся:
						по ЕГЭ, сочинение ЕГЭ (задание 25), ОГЭ, ВПР, выпускному сочинению.
						Чтобы найти нужную информацию, пройдите по ссылке в данный раздел. Информация будет постепенно
						пополняться.(редактируйте)
					</div>
				</div>
			</div>
		</div>
	`
	const main = document.querySelector('main')
	main.textContent = ''
	main.insertAdjacentHTML('afterbegin', guidelinesHTML)
}