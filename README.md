The algorithm decides if a word is phonetically equivalent.
This follow this steps:
1 - Every non alphabetical character is ignored
2 - It must not differ upper to lower cases;
3 - After the first letter, any of the following letter must be ignored: A, E, I, H, O, U, W, Y.
4 - The following groups of letter are considered equivalent:
  - AEIOU
  - CGJKQSXYZ
  - BFPVW
  - DT
  - M
  - There's no equivalent for any other character
5 - Any consecutive equivalent letter (after be ignored on the step 3) are considered as a single occurance.
