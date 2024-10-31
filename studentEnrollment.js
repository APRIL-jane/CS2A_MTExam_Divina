let DSA = {};
let OOP = {};
let SIPP = {};

function displayStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled.");
    } else {
        console.log("Enrolled students:", subjectArray.join (", "));
    }
}
function main() {
    let subjectArray;
    let subjectName;

    while (true) {
        let subjectChoice = prompt("Select the subject:\n(A) DSA\n(B) OOP\n(C) SIPP\n(D) Exit").toUpperCase();

        if (subjectChoice === 'A') {
            subjectArray = DSA;
            subjectName = "DSA";
        } else if (subjectChoice === 'B') {
            subjectArray = OOP;
            subjectName = "OOP";
        } else if (subjectChoice === 'C') {
            subjectArray = SIPP;
            subjectName = "SIPP";
        } else if (subjectChoice === 'D') {
            console.log("Exiting program");
            console.log("Enrolled students per subject:");
            console.log("DSA:", DSA);
            console.log("OOP:", OOP);
            console.log("SIPP:", SIPP);
            return;
        } else {
            console.log("Invalid Choice. Try again.");
        }
    }
}
main();