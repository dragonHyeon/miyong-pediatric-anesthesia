function add(age, weight) {

    let tubeSize = (age / 4 + 3.5).toFixed(2)
    let Robi = (weight / 300).toFixed(2)
    let PFOL = (weight * 2).toFixed(2)
    let Rocu = (weight / 2).toFixed(2)
    let Reverse = [(weight / 150).toFixed(2), (weight / 4).toFixed(2)]

    alert('Tube size: ' + tubeSize + '\nRobi: ' + Robi + '\nPFOL: ' + PFOL + '\nRocu: ' + Rocu + '\nReverse(Robi/PSTG): ' + Reverse[0] + '/' + Reverse[1])
}