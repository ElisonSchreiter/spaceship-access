alert('Seja bem vindo à central de reconhecimento!')

createSpaceship()

do {
  chosen = prompt(
    'O que deseja fazer?' +
      '\n1 - Acelerar sua nave' +
      '\n2 - Cadastrar outra nave' +
      '\n3 - Detalhar e sair do console'
  )
  switch (chosen) {
    case '1':
      accelerate()
      break
    case '2':
      switchSpaceship()
      break
    case '3':
      printAndExit()
      break
    default:
      alert('Opção Inexistente')
      break
  }
} while (chosen != 3)

function createSpaceship() {
  alert(
    'Central de cadastramento:' + '\nPor favor informe os dados da sua nave.'
  )
  let shipName = onlyString('Qual o nome da sua nave?')
  console.log(shipName)
  let crewQuantity = onlyNumber('Qual a quantidade de tripulantes?')
  console.log(crewQuantity)

  do {
    type = prompt(
      'Qual o propósito da sua nave?' + '\n1 - Transporte' + '\n2 - Batalha'
    )
    switch (type) {
      case '1':
        gearQuantity = onlyNumber('Qual a quantidade de asentos em sua nave?')
        spaceship = new TransportSpaceship(shipName, crewQuantity, gearQuantity)
        break
      case '2':
        gearQuantity = onlyNumber('Qual a quantidade de asentos em sua nave?')
        spaceship = new BattleSpaceship(shipName, crewQuantity, gearQuantity)
        break
      default:
        alert('Opção inexistente')
        break
    }
  } while (type != 1 && type != 2)
}
function onlyString(string) {
  do {
    ask = prompt(string)
    k = isNaN(ask) ? (k = true) : (k = false) & alert('Use apenas letras!')
    k == true ? (i = true) : (i = false)
  } while (i != true)
  return ask
}
function onlyNumber(number) {
  do {
    ask = prompt(number)
    k = isNaN(ask) ? (k = false) & alert('Use apenas números!') : (k = true)
    k == true ? (i = true) : (i = false)
  } while (i != true)
  return ask
}
function accelerate() {
  let newVelocity = onlyNumber(
    'Quanto gostaria de acelerar, em km/s?' +
      '\nLembre-se que existe uma taxa de desaceleração.'
  )
  spaceship.speedUp(newVelocity)
}
function switchSpaceship() {
  alert('Alternando Nave...')
  createSpaceship()
}
function printAndExit() {
  alert(
    'Nome: ' +
      spaceship.name +
      '\nQuantidade de tripulantes: ' +
      spaceship.crewQuantity +
      '\nVelocidade atual: ' +
      spaceship.currentVelocity +
      'km/s'
  )
  alert('Tenha uma ótima viagem.')
}
