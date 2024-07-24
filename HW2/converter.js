function ftInchesToCm(feet, inches) {
    console.log('Внимание! Значение дюймов должно быть не больше 12! 1 фут = 12 дюймов');
    let ftToCm = +feet * 12 * 2.54;
    let inchesToCm = +inches * 2.54;
    if (feet >= 0 && inches >= 0) {
        if (inches <= 12) {
            return ftToCm + inchesToCm;
        } else {
            console.log('Ошибка! Значение дюймов больше 12. Переведите дюймы в футы (1 фут = 12 дюймов)');
        }
    } else {
        console.log('Ошибка! Введено некорректное значпние футов и (или) дюймов');
    }
}

export default ftInchesToCm;