const gradeRules = [
  { cutoff: 90, grade: 'A'},
  { cutoff: 80, grade: 'B'},
  { cutoff: 70, grade: 'C'},
  { cutoff: 60, grade: 'D'},
  { cutoff: 0, grade: 'F'},
];

function calculateGrade(score) {
  for (const rule of gradeRules) {
    if (score >= rule.cutoff) {
      return rule.grade;
    }
  }
  return 'Unknown';
}

module.exports = { calculateGrade };
