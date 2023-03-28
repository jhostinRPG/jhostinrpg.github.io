const inputHora = document.getElementById('inputHora');
const btnTransformar = document.getElementById('btnTransformar');
const resultado = document.getElementById('resultado');

function transformarHora() {
  const hora = inputHora.value;
  const horaTransformada = transformar(hora);
  resultado.textContent = horaTransformada;
}

function transformar(hora) {
  const horaArray = hora.split(':');
  const horas = parseInt(horaArray[0], 10);
  const minutos = parseInt(horaArray[1], 10);
  let horaTransformada = '';

  if (horas >= 0 && horas <= 11) {
    horaTransformada = horas === 0 ? '12' : horas.toString();
    horaTransformada += ':' + (minutos < 10 ? '0' + minutos : minutos);
    horaTransformada += ' a.m.';
  } else if (horas >= 12 && horas <= 23) {
    horaTransformada = horas === 12 ? '12' : (horas - 12).toString();
    horaTransformada += ':' + (minutos < 10 ? '0' + minutos : minutos);
    horaTransformada += ' p.m.';
  } else {
    horaTransformada = 'Hora inválida';
  }

  return horaTransformada;
}

btnTransformar.addEventListener('click', transformarHora);

inputHora.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    transformarHora();
  }
});