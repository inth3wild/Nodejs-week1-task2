// 3. Write a function that checks if a person is eligible to vote based on their age.

function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
console.log(isEligibleToVote(17));
