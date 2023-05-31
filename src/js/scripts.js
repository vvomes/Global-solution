function contatar() {
	if (document.getElementById('name').value == '')
		return alert('Por favor, insira um nome')

	if (document.getElementById('email').value == '' && document.getElementById('phoneNumber').value == '')
		return alert('Por favor, insira um e-mail ou número de telefone')

	if (document.getElementById('message').value == '')
		return alert('Por favor insira uma mensagem')

	alert('Mensagem enviada com sucesso. Obrgiado por entrar em contato conosco!')

}
