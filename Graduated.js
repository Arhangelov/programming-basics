function graduated(input) {

    let student = input.shift();
    let grade = Number(input.shift());

    let totalSumOfAllGrades = 0;
    let totalGrades = 1;

    while (!isNaN(grade) && totalGrades <= 12) {

        if (grade < 4) {
            grade = Number(input.shift());
            continue;
        }

        totalSumOfAllGrades += grade;
        grade = Number(input.shift());
        totalGrades++;
    }
    let averageResult = (totalSumOfAllGrades / 12);
    console.log(`${student} graduated. Average grade: ${averageResult.toFixed(2)}`);


}