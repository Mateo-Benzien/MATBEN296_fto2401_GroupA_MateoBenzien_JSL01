function validateSyntax() {
  let input = document.getElementById('petInput').value;
  let result = ''; // Placeholder for validation result

  // Regular expression to match the desired syntax
  let regex = /^pet_(?=.[a-zA-Z])(?=.\d)[a-zA-Z0-9]+$/;

  // Check if the input matches the regex pattern
  if (regex.test(input)) {
      result = 'Valid Syntax';
  } else {
      result = 'Invalid Syntax';
  }

  // Display the validation result
  document.getElementById('result').innerText = result;
}
// - "^pet" makes sure that the string starts with "pet".
// - "(?=.*[a-zA-Z])" is to make sure that at least one letter is present after "pet".
// - "(?=.*\d)" is another part of the code so that at least one numbers is present after "pet".
// - "[a-zA-Z0-9]+" to match one or more letters and numbers after "pet".
// - "$" makes sure that the pattern matches the entire string.
// - This the function will only return as 'Valid Syntax' if the input string starts with "pet_" and has numbers and letters in the input.

