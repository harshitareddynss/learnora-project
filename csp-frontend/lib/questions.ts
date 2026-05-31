type Question = {
  id: number;
  title: string;
  statement: string;
  logic?: string;
  sampleInput?: string;
  sampleOutput?: string;
}
const questions = {
  "Basic C Syntax": [
    {
      id: 1,
      title: "Hello World",
      statement: "Write a C program to print Hello World."
    },
    {
      id: 2,
      title: "Sum of Two Numbers",
      statement: "Take two integers as input and print their sum."
    },
    {
      id: 3,
      title: "Area of Circle",
      statement: "Find area of circle using radius input."
    },
    {
      id: 4,
      title: "Swap Two Numbers",
      statement: "Swap two numbers using third variable."
    },
    {
      id: 5,
      title: "Even or Odd",
      statement: "Check whether number is even or odd."
    },
    {
      id: 6,
      title: "Positive Negative",
      statement: "Check whether a number is positive, negative or zero."
    },
    {
      id: 7,
      title: "ASCII Value",
      statement: "Print ASCII value of a character."
    },
    {
      id: 8,
      title: "Simple Interest",
      statement: "Calculate simple interest."
    },
    {
      id: 9,
      title: "Temperature Conversion",
      statement: "Convert Celsius to Fahrenheit."
    },
    {
      id: 10,
      title: "Calculator",
      statement: "Perform + - * / operations using two numbers."
    },
    {
      id: 11,
      title: "Square and Cube",
      statement: "Find square and cube of a number."
    },
    {
      id: 12,
      title: "Character Input",
      statement: "Take a character input and print it."
    },
    {
      id: 13,
      title: "Multiple Inputs",
      statement: "Take name and age and print formatted output."
    },
    {
      id: 14,
      title: "Increment Operator",
      statement: "Demonstrate ++ operator."
    },
    {
      id: 15,
      title: "Decrement Operator",
      statement: "Demonstrate -- operator."
    },
    {
      id: 16,
      title: "Type Casting",
      statement: "Show integer to float type casting."
    },
    {
      id: 17,
      title: "Remainder",
      statement: "Find remainder using modulus operator."
    },
    {
      id: 18,
      title: "Average",
      statement: "Calculate average of 3 numbers."
    },
    {
      id: 19,
      title: "Salary Bonus",
      statement: "Calculate salary after bonus percentage."
    },
    {
      id: 20,
      title: "Mini Bill",
      statement: "Create simple electricity bill calculation."
    }
  ],

  "Loops in C": [
  {
    id: 1,
    title: "Print Numbers",
    statement: "Print numbers from 1 to 10 using for loop.",
    logic: "Use for loop from 1 to 10.",
    sampleInput: "User input",
    sampleOutput: "1 2 3 4 5 6 7 8 9 10"
  },
  {
    id: 2,
    title: "Reverse Numbers",
    statement: "Print numbers from 10 to 1 using while loop.",
    logic: "Use loop in decreasing order.",
    sampleInput: "User input",
    sampleOutput: "10 9 8 7 6 5 4 3 2 1"
  },
  {
    id: 3,
    title: "Even Numbers",
    statement: "Print even numbers from 1 to 50 using do-while loop.",
    logic: "Check number divisible by 2.",
    sampleInput: "User input",
    sampleOutput: "2 4 6 ... 50"
  },
  {
    id: 4,
    title: "Odd Numbers",
    statement: "Print odd numbers from 1 to 50 using for loop.",
    logic: "Check number not divisible by 2.",
    sampleInput: "User input",
    sampleOutput: "1 3 5 ... 49"
  },
  {
    id: 5,
    title: "Sum of N Numbers",
    statement: "Find sum of first N natural numbers.",
    logic: "Use loop and accumulate sum.",
    sampleInput: "5",
    sampleOutput: "15"
  },
  {
    id: 6,
    title: "Factorial",
    statement: "Find factorial of a number.",
    logic: "Multiply numbers from 1 to n.",
    sampleInput: "5",
    sampleOutput: "120"
  },
  {
    id: 7,
    title: "Multiplication Table",
    statement: "Print multiplication table of a number.",
    logic: "Loop from 1 to 10 and multiply.",
    sampleInput: "5",
    sampleOutput: "5 10 15 ... 50"
  },
  {
    id: 8,
    title: "Count Digits",
    statement: "Count digits in a number.",
    logic: "Repeatedly divide by 10.",
    sampleInput: "1234",
    sampleOutput: "4"
  },
  {
    id: 9,
    title: "Reverse Number",
    statement: "Reverse a given number.",
    logic: "Use modulus and division.",
    sampleInput: "123",
    sampleOutput: "321"
  },
  {
    id: 10,
    title: "Palindrome Number",
    statement: "Check if number is palindrome.",
    logic: "Reverse and compare.",
    sampleInput: "121",
    sampleOutput: "Palindrome"
  },
  {
    id: 11,
    title: "Armstrong Number",
    statement: "Check Armstrong number.",
    logic: "Sum powers of digits and compare.",
    sampleInput: "153",
    sampleOutput: "Armstrong"
  },
  {
    id: 12,
    title: "Prime Number",
    statement: "Check whether number is prime.",
    logic: "Check divisibility from 2 to n-1.",
    sampleInput: "7",
    sampleOutput: "Prime"
  },
  {
    id: 13,
    title: "Prime Numbers Range",
    statement: "Print prime numbers between 1 and N.",
    logic: "Use nested loops.",
    sampleInput: "20",
    sampleOutput: "2 3 5 7 11 13 17 19"
  },
  {
    id: 14,
    title: "Fibonacci Series",
    statement: "Print Fibonacci series upto N terms.",
    logic: "Use previous two numbers.",
    sampleInput: "6",
    sampleOutput: "0 1 1 2 3 5"
  },
  {
    id: 15,
    title: "Sum of Digits",
    statement: "Find sum of digits of a number.",
    logic: "Use modulus and division.",
    sampleInput: "123",
    sampleOutput: "6"
  },
  {
    id: 16,
    title: "Product of Digits",
    statement: "Find product of digits.",
    logic: "Multiply digits using loop.",
    sampleInput: "123",
    sampleOutput: "6"
  },
  {
    id: 17,
    title: "Pattern Star",
    statement: "Print right triangle star pattern.",
    logic: "Use nested loops.",
    sampleInput: "4",
    sampleOutput: "*\n**\n***\n****"
  },
  {
    id: 18,
    title: "Number Pattern",
    statement: "Print increasing number pattern.",
    logic: "Use nested loops.",
    sampleInput: "4",
    sampleOutput: "1\n12\n123\n1234"
  },
  {
    id: 19,
    title: "GCD of Two Numbers",
    statement: "Find GCD using loops.",
    logic: "Check common divisors.",
    sampleInput: "12 18",
    sampleOutput: "6"
  },
  {
    id: 20,
    title: "LCM of Two Numbers",
    statement: "Find LCM using loops.",
    logic: "Find smallest common multiple.",
    sampleInput: "12 18",
    sampleOutput: "36"
  }
],
  "Functions in C": [
  {
    id: 1,
    title: "Simple Function",
    statement: "Create a function to print Hello World.",
    logic: "Create function and call it from main.",
    sampleInput: "User input",
    sampleOutput: "Hello World"
  },
  {
    id: 2,
    title: "Addition Function",
    statement: "Create function to add two numbers.",
    logic: "Pass two values and return sum.",
    sampleInput: "5 3",
    sampleOutput: "8"
  },
  {
    id: 3,
    title: "Maximum of Two Numbers",
    statement: "Find larger of two numbers using function.",
    logic: "Compare and return maximum.",
    sampleInput: "10 25",
    sampleOutput: "25"
  },
  {
    id: 4,
    title: "Even or Odd Function",
    statement: "Check whether number is even or odd using function.",
    logic: "Use modulus operator.",
    sampleInput: "6",
    sampleOutput: "Even"
  },
  {
    id: 5,
    title: "Square Function",
    statement: "Find square of a number using function.",
    logic: "Multiply number by itself.",
    sampleInput: "4",
    sampleOutput: "16"
  },
  {
    id: 6,
    title: "Cube Function",
    statement: "Find cube of a number using function.",
    logic: "Multiply number three times.",
    sampleInput: "3",
    sampleOutput: "27"
  },
  {
    id: 7,
    title: "Factorial Function",
    statement: "Find factorial using function.",
    logic: "Use loop inside function.",
    sampleInput: "5",
    sampleOutput: "120"
  },
  {
    id: 8,
    title: "Prime Check Function",
    statement: "Check whether a number is prime using function.",
    logic: "Check divisibility inside function.",
    sampleInput: "7",
    sampleOutput: "Prime"
  },
  {
    id: 9,
    title: "Palindrome Number",
    statement: "Check palindrome using function.",
    logic: "Reverse and compare.",
    sampleInput: "121",
    sampleOutput: "Palindrome"
  },
  {
    id: 10,
    title: "Reverse Number",
    statement: "Reverse a number using function.",
    logic: "Use modulus and division.",
    sampleInput: "123",
    sampleOutput: "321"
  },
  {
    id: 11,
    title: "Sum of Digits",
    statement: "Find sum of digits using function.",
    logic: "Extract digits and add.",
    sampleInput: "123",
    sampleOutput: "6"
  },
  {
    id: 12,
    title: "Average Function",
    statement: "Find average of 3 numbers using function.",
    logic: "Return average value.",
    sampleInput: "10 20 30",
    sampleOutput: "20"
  },
  {
    id: 13,
    title: "Swap Numbers",
    statement: "Swap two numbers using function.",
    logic: "Use third variable or call by reference.",
    sampleInput: "10 20",
    sampleOutput: "20 10"
  },
  {
    id: 14,
    title: "Power Function",
    statement: "Find power of a number using function.",
    logic: "Multiply repeatedly.",
    sampleInput: "2 3",
    sampleOutput: "8"
  },
  {
    id: 15,
    title: "Fibonacci Function",
    statement: "Print Fibonacci series using function.",
    logic: "Use loop or recursion.",
    sampleInput: "6",
    sampleOutput: "0 1 1 2 3 5"
  },
  {
    id: 16,
    title: "Armstrong Number",
    statement: "Check Armstrong number using function.",
    logic: "Cube digits and compare.",
    sampleInput: "153",
    sampleOutput: "Armstrong"
  },
  {
    id: 17,
    title: "GCD Function",
    statement: "Find GCD of two numbers using function.",
    logic: "Check common divisor or Euclid method.",
    sampleInput: "12 18",
    sampleOutput: "6"
  },
  {
    id: 18,
    title: "LCM Function",
    statement: "Find LCM using function.",
    logic: "Use GCD or multiples.",
    sampleInput: "12 18",
    sampleOutput: "36"
  },
  {
    id: 19,
    title: "Area of Circle",
    statement: "Find area of circle using function.",
    logic: "Use formula pi*r*r.",
    sampleInput: "5",
    sampleOutput: "78.5"
  },
  {
    id: 20,
    title: "Temperature Conversion",
    statement: "Convert Celsius to Fahrenheit using function.",
    logic: "Apply conversion formula.",
    sampleInput: "25",
    sampleOutput: "77"
  }
],
  "Arrays": [
  {
    id: 1,
    title: "Array Input Output",
    statement: "Take N elements in array and print them.",
    logic: "Use loop for input and output.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 2,
    title: "Array Sum",
    statement: "Find sum of array elements.",
    logic: "Traverse array and add all elements.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "15"
  },
  {
    id: 3,
    title: "Array Average",
    statement: "Find average of array elements.",
    logic: "Calculate sum and divide by size.",
    sampleInput: "5\n2 4 6 8 10",
    sampleOutput: "6"
  },
  {
    id: 4,
    title: "Largest Element",
    statement: "Find largest element in array.",
    logic: "Compare each element with max.",
    sampleInput: "5\n2 8 1 10 4",
    sampleOutput: "10"
  },
  {
    id: 5,
    title: "Smallest Element",
    statement: "Find smallest element in array.",
    logic: "Compare each element with min.",
    sampleInput: "5\n2 8 1 10 4",
    sampleOutput: "1"
  },
  {
    id: 6,
    title: "Search Element",
    statement: "Search element in array.",
    logic: "Use linear search.",
    sampleInput: "5\n1 2 3 4 5\n4",
    sampleOutput: "Found"
  },
  {
    id: 7,
    title: "Count Even Numbers",
    statement: "Count even numbers in array.",
    logic: "Check divisibility by 2.",
    sampleInput: "5\n1 2 4 5 6",
    sampleOutput: "3"
  },
  {
    id: 8,
    title: "Count Odd Numbers",
    statement: "Count odd numbers in array.",
    logic: "Check odd condition.",
    sampleInput: "5\n1 2 4 5 7",
    sampleOutput: "3"
  },
  {
    id: 9,
    title: "Reverse Array",
    statement: "Print array in reverse order.",
    logic: "Traverse from end to start.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "5 4 3 2 1"
  },
  {
    id: 10,
    title: "Second Largest",
    statement: "Find second largest element.",
    logic: "Track largest and second largest.",
    sampleInput: "5\n10 5 20 8 15",
    sampleOutput: "15"
  },
  {
    id: 11,
    title: "Array Sort Ascending",
    statement: "Sort array in ascending order.",
    logic: "Use nested loops and swapping.",
    sampleInput: "5\n5 2 4 1 3",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 12,
    title: "Array Sort Descending",
    statement: "Sort array in descending order.",
    logic: "Swap larger elements first.",
    sampleInput: "5\n5 2 4 1 3",
    sampleOutput: "5 4 3 2 1"
  },
  {
    id: 13,
    title: "Copy Array",
    statement: "Copy elements from one array to another.",
    logic: "Use loop and assign values.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 14,
    title: "Merge Arrays",
    statement: "Merge two arrays into one.",
    logic: "Store both arrays in third array.",
    sampleInput: "3\n1 2 3\n3\n4 5 6",
    sampleOutput: "1 2 3 4 5 6"
  },
  {
    id: 15,
    title: "Duplicate Elements",
    statement: "Count duplicate elements in array.",
    logic: "Compare using nested loops.",
    sampleInput: "5\n1 2 2 3 1",
    sampleOutput: "2"
  },
  {
    id: 16,
    title: "Frequency of Element",
    statement: "Find frequency of an element.",
    logic: "Count matching values.",
    sampleInput: "5\n1 2 2 3 2\n2",
    sampleOutput: "3"
  },
  {
    id: 17,
    title: "Array Rotation",
    statement: "Rotate array left by one position.",
    logic: "Store first element and shift.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "2 3 4 5 1"
  },
  {
    id: 18,
    title: "Insert Element",
    statement: "Insert element at given position.",
    logic: "Shift elements right.",
    sampleInput: "5\n1 2 4 5 6\n3 3",
    sampleOutput: "1 2 3 4 5 6"
  },
  {
    id: 19,
    title: "Delete Element",
    statement: "Delete element from given position.",
    logic: "Shift elements left.",
    sampleInput: "5\n1 2 3 4 5\n3",
    sampleOutput: "1 2 4 5"
  },
  {
    id: 20,
    title: "Binary Search",
    statement: "Search element using binary search.",
    logic: "Divide sorted array repeatedly.",
    sampleInput: "5\n1 2 3 4 5\n4",
    sampleOutput: "Found"
  }
],
  "Pointers": [
  {
    id: 1,
    title: "Pointer Basics",
    statement: "Create a pointer and print value and address.",
    logic: "Use * and & operators.",
    sampleInput: "10",
    sampleOutput: "Value:10 Address:xxxx"
  },
  {
    id: 2,
    title: "Dereference Pointer",
    statement: "Access variable value using pointer.",
    logic: "Dereference using * operator.",
    sampleInput: "25",
    sampleOutput: "25"
  },
  {
    id: 3,
    title: "Pointer Addition",
    statement: "Add two numbers using pointers.",
    logic: "Use pointers to access variables.",
    sampleInput: "5 3",
    sampleOutput: "8"
  },
  {
    id: 4,
    title: "Swap Using Pointers",
    statement: "Swap two numbers using pointers.",
    logic: "Pass addresses and swap values.",
    sampleInput: "10 20",
    sampleOutput: "20 10"
  },
  {
    id: 5,
    title: "Pointer Arithmetic Increment",
    statement: "Demonstrate pointer increment.",
    logic: "Increment pointer and observe address change.",
    sampleInput: "Array",
    sampleOutput: "Address changes"
  },
  {
    id: 6,
    title: "Pointer Arithmetic Decrement",
    statement: "Demonstrate pointer decrement.",
    logic: "Decrease pointer position.",
    sampleInput: "Array",
    sampleOutput: "Previous address"
  },
  {
    id: 7,
    title: "Array Using Pointer",
    statement: "Print array elements using pointers.",
    logic: "Traverse array using pointer.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 8,
    title: "Pointer to Array",
    statement: "Access array using pointer notation.",
    logic: "Use pointer indexing.",
    sampleInput: "3\n10 20 30",
    sampleOutput: "10 20 30"
  },
  {
    id: 9,
    title: "Sum Array Using Pointer",
    statement: "Find sum of array using pointer.",
    logic: "Traverse and accumulate sum.",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "15"
  },
  {
    id: 10,
    title: "Largest Using Pointer",
    statement: "Find largest element using pointers.",
    logic: "Compare through pointer traversal.",
    sampleInput: "5\n3 7 2 9 1",
    sampleOutput: "9"
  },
  {
    id: 11,
    title: "String Using Pointer",
    statement: "Print string using pointer.",
    logic: "Traverse character by character.",
    sampleInput: "Hello",
    sampleOutput: "Hello"
  },
  {
    id: 12,
    title: "String Length Pointer",
    statement: "Find string length using pointer.",
    logic: "Count till null character.",
    sampleInput: "Hello",
    sampleOutput: "5"
  },
  {
    id: 13,
    title: "Copy String Pointer",
    statement: "Copy one string to another using pointers.",
    logic: "Use pointer traversal.",
    sampleInput: "Hello",
    sampleOutput: "Hello"
  },
  {
    id: 14,
    title: "Reverse String Pointer",
    statement: "Reverse string using pointers.",
    logic: "Swap characters using pointers.",
    sampleInput: "hello",
    sampleOutput: "olleh"
  },
  {
    id: 15,
    title: "Function with Pointer",
    statement: "Pass variable to function using pointer.",
    logic: "Use call by reference.",
    sampleInput: "10",
    sampleOutput: "Updated value"
  },
  {
    id: 16,
    title: "Pointer to Pointer",
    statement: "Demonstrate double pointer.",
    logic: "Use pointer storing another pointer address.",
    sampleInput: "5",
    sampleOutput: "5"
  },
  {
    id: 17,
    title: "Dynamic Memory Basics",
    statement: "Allocate memory using malloc.",
    logic: "Use malloc and pointer.",
    sampleInput: "5",
    sampleOutput: "Memory allocated"
  },
  {
    id: 18,
    title: "Free Memory",
    statement: "Allocate and free memory.",
    logic: "Use malloc and free.",
    sampleInput: "No input",
    sampleOutput: "Memory released"
  },
  {
    id: 19,
    title: "Pointer Comparison",
    statement: "Compare two pointers.",
    logic: "Compare addresses.",
    sampleInput: "Two pointers",
    sampleOutput: "Equal/Not Equal"
  },
  {
    id: 20,
    title: "Sum Using Call by Reference",
    statement: "Find sum using call by reference and pointers.",
    logic: "Pass addresses to function.",
    sampleInput: "4 6",
    sampleOutput: "10"
  }
],
  "Strings": [
  {
    id: 1,
    title: "String Input Output",
    statement: "Take a string as input and print it.",
    logic: "Use gets/fgets or scanf.",
    sampleInput: "Hello",
    sampleOutput: "Hello"
  },
  {
    id: 2,
    title: "String Length",
    statement: "Find length of a string.",
    logic: "Count characters until null character.",
    sampleInput: "Hello",
    sampleOutput: "5"
  },
  {
    id: 3,
    title: "String Copy",
    statement: "Copy one string into another.",
    logic: "Use strcpy or loop.",
    sampleInput: "Hello",
    sampleOutput: "Hello"
  },
  {
    id: 4,
    title: "String Concatenation",
    statement: "Concatenate two strings.",
    logic: "Use strcat or manual joining.",
    sampleInput: "Hello\nWorld",
    sampleOutput: "HelloWorld"
  },
  {
    id: 5,
    title: "String Compare",
    statement: "Compare two strings.",
    logic: "Use strcmp or compare character by character.",
    sampleInput: "abc\nabc",
    sampleOutput: "Equal"
  },
  {
    id: 6,
    title: "Reverse String",
    statement: "Reverse a string.",
    logic: "Swap characters from both ends.",
    sampleInput: "hello",
    sampleOutput: "olleh"
  },
  {
    id: 7,
    title: "Palindrome String",
    statement: "Check whether string is palindrome.",
    logic: "Compare original and reversed string.",
    sampleInput: "madam",
    sampleOutput: "Palindrome"
  },
  {
    id: 8,
    title: "Count Vowels",
    statement: "Count vowels in a string.",
    logic: "Check for a,e,i,o,u.",
    sampleInput: "education",
    sampleOutput: "5"
  },
  {
    id: 9,
    title: "Count Consonants",
    statement: "Count consonants in a string.",
    logic: "Check alphabet excluding vowels.",
    sampleInput: "hello",
    sampleOutput: "3"
  },
  {
    id: 10,
    title: "Count Spaces",
    statement: "Count spaces in a string.",
    logic: "Check for blank spaces.",
    sampleInput: "Hello World",
    sampleOutput: "1"
  },
  {
    id: 11,
    title: "Uppercase Conversion",
    statement: "Convert string to uppercase.",
    logic: "Use toupper or ASCII logic.",
    sampleInput: "hello",
    sampleOutput: "HELLO"
  },
  {
    id: 12,
    title: "Lowercase Conversion",
    statement: "Convert string to lowercase.",
    logic: "Use tolower or ASCII logic.",
    sampleInput: "HELLO",
    sampleOutput: "hello"
  },
  {
    id: 13,
    title: "Count Words",
    statement: "Count words in a sentence.",
    logic: "Count spaces + 1.",
    sampleInput: "I love coding",
    sampleOutput: "3"
  },
  {
    id: 14,
    title: "Remove Spaces",
    statement: "Remove spaces from a string.",
    logic: "Skip blank spaces while copying.",
    sampleInput: "H e l l o",
    sampleOutput: "Hello"
  },
  {
    id: 15,
    title: "Frequency of Character",
    statement: "Find frequency of a character in string.",
    logic: "Count matching characters.",
    sampleInput: "banana\na",
    sampleOutput: "3"
  },
  {
    id: 16,
    title: "First Occurrence",
    statement: "Find first occurrence of character.",
    logic: "Traverse and stop at first match.",
    sampleInput: "hello\nl",
    sampleOutput: "2"
  },
  {
    id: 17,
    title: "Last Occurrence",
    statement: "Find last occurrence of character.",
    logic: "Traverse entire string.",
    sampleInput: "hello\nl",
    sampleOutput: "3"
  },
  {
    id: 18,
    title: "Substring Check",
    statement: "Check whether substring exists.",
    logic: "Use strstr or manual checking.",
    sampleInput: "hello world\nworld",
    sampleOutput: "Found"
  },
  {
    id: 19,
    title: "Anagram Check",
    statement: "Check whether two strings are anagrams.",
    logic: "Sort or count characters.",
    sampleInput: "listen\nsilent",
    sampleOutput: "Anagram"
  },
  {
    id: 20,
    title: "Character Count",
    statement: "Count total characters excluding spaces.",
    logic: "Ignore spaces and count remaining.",
    sampleInput: "Hello World",
    sampleOutput: "10"
  }
],
  "Structures": [
  {
    id: 1,
    title: "Basic Structure",
    statement: "Create a structure for student and print details.",
    logic: "Define structure and access members.",
    sampleInput: "John 20",
    sampleOutput: "John 20"
  },
  {
    id: 2,
    title: "Employee Details",
    statement: "Store and display employee details using structure.",
    logic: "Create employee structure.",
    sampleInput: "101 Ravi 25000",
    sampleOutput: "101 Ravi 25000"
  },
  {
    id: 3,
    title: "Book Information",
    statement: "Store book name, author and price.",
    logic: "Use structure members.",
    sampleInput: "CBook John 500",
    sampleOutput: "CBook John 500"
  },
  {
    id: 4,
    title: "Student Marks",
    statement: "Calculate total and average using structure.",
    logic: "Store marks and compute.",
    sampleInput: "80 90 70",
    sampleOutput: "Total:240 Average:80"
  },
  {
    id: 5,
    title: "Area of Rectangle",
    statement: "Store length and breadth in structure and find area.",
    logic: "Multiply members.",
    sampleInput: "5 4",
    sampleOutput: "20"
  },
  {
    id: 6,
    title: "Complex Number Addition",
    statement: "Add two complex numbers using structure.",
    logic: "Add real and imaginary parts.",
    sampleInput: "2 3\n4 5",
    sampleOutput: "6 + 8i"
  },
  {
    id: 7,
    title: "Date Structure",
    statement: "Store and print date using structure.",
    logic: "Use day month year members.",
    sampleInput: "10 5 2025",
    sampleOutput: "10/5/2025"
  },
  {
    id: 8,
    title: "Distance Addition",
    statement: "Add two distances using structure.",
    logic: "Add km and meter values.",
    sampleInput: "5 300\n3 200",
    sampleOutput: "8 km 500 m"
  },
  {
    id: 9,
    title: "Array of Structures",
    statement: "Store details of multiple students.",
    logic: "Use array of structures.",
    sampleInput: "2\nRam 20\nSam 21",
    sampleOutput: "Ram 20\nSam 21"
  },
  {
    id: 10,
    title: "Highest Marks",
    statement: "Find student with highest marks using structures.",
    logic: "Compare marks in array of structures.",
    sampleInput: "3 students",
    sampleOutput: "Highest scorer"
  },
  {
    id: 11,
    title: "Structure Comparison",
    statement: "Compare ages of two students.",
    logic: "Compare structure members.",
    sampleInput: "20 25",
    sampleOutput: "25"
  },
  {
    id: 12,
    title: "Structure with Function",
    statement: "Pass structure to function and display values.",
    logic: "Pass structure argument.",
    sampleInput: "Ravi 22",
    sampleOutput: "Ravi 22"
  },
  {
    id: 13,
    title: "Pointer to Structure",
    statement: "Access structure members using pointer.",
    logic: "Use -> operator.",
    sampleInput: "101",
    sampleOutput: "101"
  },
  {
    id: 14,
    title: "Nested Structure",
    statement: "Create nested structure and print values.",
    logic: "Structure inside another structure.",
    sampleInput: "Address data",
    sampleOutput: "Printed details"
  },
  {
    id: 15,
    title: "Bank Account",
    statement: "Store account details and balance.",
    logic: "Use structure fields.",
    sampleInput: "1234 Ravi 10000",
    sampleOutput: "1234 Ravi 10000"
  },
  {
    id: 16,
    title: "Product Details",
    statement: "Store product id, name and price.",
    logic: "Use structure members.",
    sampleInput: "1 Pen 10",
    sampleOutput: "1 Pen 10"
  },
  {
    id: 17,
    title: "Library Records",
    statement: "Store library book records using structures.",
    logic: "Use array of structures.",
    sampleInput: "Book records",
    sampleOutput: "Displayed"
  },
  {
    id: 18,
    title: "Salary Calculation",
    statement: "Calculate employee salary using structure.",
    logic: "Store salary and bonus.",
    sampleInput: "20000 5000",
    sampleOutput: "25000"
  },
  {
    id: 19,
    title: "Store and Sort Students",
    statement: "Sort student records by marks.",
    logic: "Use array of structures and swapping.",
    sampleInput: "Students list",
    sampleOutput: "Sorted list"
  },
  {
    id: 20,
    title: "Structure Size",
    statement: "Find size of structure using sizeof.",
    logic: "Use sizeof operator.",
    sampleInput: "No input",
    sampleOutput: "Structure size"
  }
],
"Sorting Algorithms": [
    {
        
  id: 1,
  title: "Bubble Sort",
  statement: "Sort array using Bubble Sort.",
  explanation:
    "Bubble sort repeatedly compares adjacent elements and swaps them if they are in wrong order. After every pass, the largest element reaches its correct position.",
  logic:
    "1. Compare adjacent elements\n2. Swap if left > right\n3. Repeat for n−1 passes\n4. Array becomes sorted",
  sampleInput: "5\n5 2 4 1 3",
  sampleOutput: "1 2 3 4 5"
},
    {
  id: 2,
  title: "Selection Sort",
  statement: "Sort array using Selection Sort.",
  explanation:
    "Selection sort finds the minimum element and places it at the correct position in every pass.",
  logic:
    "1. Find minimum element\n2. Swap with current position\n3. Repeat for remaining array\n4. Array becomes sorted",
  sampleInput: "5\n64 25 12 22 11",
  sampleOutput: "11 12 22 25 64"
},
{
  id: 3,
  title: "Insertion Sort",
  statement: "Sort array using Insertion Sort.",
  explanation:
    "Insertion sort inserts each element into its proper position in the already sorted part of array.",
  logic:
    "1. Pick next element\n2. Compare with previous elements\n3. Shift larger elements\n4. Insert at correct place",
  sampleInput: "5\n5 2 4 6 1",
  sampleOutput: "1 2 4 5 6"
},
{
  id: 4,
  title: "Merge Sort",
  statement: "Sort array using Merge Sort.",
  explanation:
    "Merge sort divides the array into smaller parts, sorts them recursively and merges sorted arrays.",
  logic:
    "1. Divide array into halves\n2. Sort both halves recursively\n3. Merge sorted halves\n4. Continue till fully sorted",
  sampleInput: "5\n38 27 43 3 9",
  sampleOutput: "3 9 27 38 43"
},
{
  id: 5,
  title: "Quick Sort",
  statement: "Sort array using Quick Sort.",
  explanation:
    "Quick sort selects a pivot element and partitions array into smaller and larger elements around pivot.",
  logic:
    "1. Select pivot\n2. Partition array\n3. Place pivot correctly\n4. Recursively sort partitions",
  sampleInput: "5\n10 7 8 9 1",
  sampleOutput: "1 7 8 9 10"
},
{
  id: 6,
  title: "Quick Sort",
  statement: "Sort array using Quick Sort.",
  explanation:
    "Quick sort selects a pivot element and partitions array into smaller and larger elements around pivot.",
  logic:
    "1. Select pivot\n2. Partition array\n3. Place pivot correctly\n4. Recursively sort partitions",
  sampleInput: "5\n10 7 8 9 1",
  sampleOutput: "1 7 8 9 10"
},

{
  id: 7,
  title: "Radix Sort",
  statement: "Sort numbers using Radix Sort.",
  explanation:
    "Radix sort sorts numbers digit by digit starting from least significant digit to most significant digit.",
  logic:
    "1. Find maximum digits\n2. Sort by each digit\n3. Use counting sort internally\n4. Repeat till all digits processed",
  sampleInput: "5\n170 45 75 90 802",
  sampleOutput: "45 75 90 170 802"
},
{
  id: 8,
  title: "Bucket Sort",
  statement: "Sort array using Bucket Sort.",
  explanation:
    "Bucket sort distributes elements into buckets, sorts each bucket separately and merges them.",
  logic:
    "1. Create buckets\n2. Distribute elements\n3. Sort each bucket\n4. Merge buckets",
  sampleInput: "5\n42 32 33 52 37",
  sampleOutput: "32 33 37 42 52"
},
{
  id: 9,
  title: "Counting Sort",
  statement: "Sort array using Counting Sort.",
  explanation:
    "Counting sort counts frequency of elements and places them according to occurrence count.",
  logic:
    "1. Find maximum value\n2. Create count array\n3. Store frequency\n4. Build sorted output",
  sampleInput: "5\n4 2 2 8 3",
  sampleOutput: "2 2 3 4 8"
},
],
"Searching": [
  {
    id: 1,
    title: "Linear Search",
    statement: "Search an element in array using Linear Search.",
    explanation:
      "Linear search checks each element one by one until the target element is found or the array ends. It works on both sorted and unsorted arrays.",
    logic:
      "1. Start from first element\n2. Compare with target\n3. If match found → return index\n4. Else continue till end\n5. If not found → return not found",
    sampleInput: "5\n10 20 30 40 50\n30",
    sampleOutput: "Element found at position 3"
  },

  {
    id: 2,
    title: "Binary Search",
    statement: "Search an element in sorted array using Binary Search.",
    explanation:
      "Binary search works only on sorted arrays. It repeatedly divides the search space into halves and checks the middle element.",
    logic:
      "1. Set low and high\n2. Find middle element\n3. If middle = target → found\n4. If target < middle → search left half\n5. Else search right half\n6. Repeat until found or range ends",
    sampleInput: "5\n10 20 30 40 50\n40",
    sampleOutput: "Element found at position 4"
  }
],
"Recursion": [
  {
    id: 1,
    title: "Print Numbers 1 to N",
    statement: "Print numbers from 1 to N using recursion.",
    explanation: "Recursion repeatedly calls the same function until base condition is reached.",
    logic: "1. Define base case\n2. Print current number\n3. Call function with n-1",
    sampleInput: "5",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 2,
    title: "Print N to 1",
    statement: "Print numbers from N to 1 using recursion.",
    explanation: "Print first then recursively decrease value.",
    logic: "1. Print n\n2. Call recursion with n-1\n3. Stop at 1",
    sampleInput: "5",
    sampleOutput: "5 4 3 2 1"
  },
  {
    id: 3,
    title: "Factorial Using Recursion",
    statement: "Find factorial of a number using recursion.",
    explanation: "Factorial multiplies number with factorial of previous number.",
    logic: "1. Base case factorial(0)=1\n2. Return n * factorial(n-1)",
    sampleInput: "5",
    sampleOutput: "120"
  },
  {
    id: 4,
    title: "Fibonacci Using Recursion",
    statement: "Print Fibonacci series using recursion.",
    explanation: "Each Fibonacci term is sum of previous two terms.",
    logic: "1. Base cases 0 and 1\n2. Return fib(n-1)+fib(n-2)",
    sampleInput: "6",
    sampleOutput: "0 1 1 2 3 5"
  },
  {
    id: 5,
    title: "Sum of N Numbers",
    statement: "Find sum of first N natural numbers using recursion.",
    explanation: "Add current number and recursive sum.",
    logic: "1. Base case n=0\n2. Return n + sum(n-1)",
    sampleInput: "5",
    sampleOutput: "15"
  },
  {
    id: 6,
    title: "Power Using Recursion",
    statement: "Find power of a number using recursion.",
    explanation: "Multiply base recursively exponent times.",
    logic: "1. Base power=0\n2. Return a * power(a,b-1)",
    sampleInput: "2 3",
    sampleOutput: "8"
  },
  {
    id: 7,
    title: "Reverse Number",
    statement: "Reverse a number using recursion.",
    explanation: "Extract digits recursively and build reverse.",
    logic: "1. Extract digit\n2. Recursive call\n3. Build reverse",
    sampleInput: "123",
    sampleOutput: "321"
  },
  {
    id: 8,
    title: "Palindrome Number",
    statement: "Check palindrome using recursion.",
    explanation: "Reverse recursively and compare.",
    logic: "1. Reverse recursively\n2. Compare with original",
    sampleInput: "121",
    sampleOutput: "Palindrome"
  },
  {
    id: 9,
    title: "Sum of Digits",
    statement: "Find sum of digits using recursion.",
    explanation: "Add last digit and recurse.",
    logic: "1. Base n=0\n2. Return digit + recursive sum",
    sampleInput: "123",
    sampleOutput: "6"
  },
  {
    id: 10,
    title: "Count Digits",
    statement: "Count digits using recursion.",
    explanation: "Remove one digit each recursive call.",
    logic: "1. Base single digit\n2. Return 1 + recursion",
    sampleInput: "1234",
    sampleOutput: "4"
  },
  {
    id: 11,
    title: "GCD Using Recursion",
    statement: "Find GCD using recursion.",
    explanation: "Use Euclidean algorithm recursively.",
    logic: "1. Base b=0\n2. gcd(a,b)=gcd(b,a%b)",
    sampleInput: "12 18",
    sampleOutput: "6"
  },
  {
    id: 12,
    title: "LCM Using Recursion",
    statement: "Find LCM using recursion and GCD.",
    explanation: "LCM uses GCD formula.",
    logic: "1. Find GCD\n2. Use (a*b)/gcd",
    sampleInput: "12 18",
    sampleOutput: "36"
  },
  {
    id: 13,
    title: "Binary Conversion",
    statement: "Convert decimal to binary using recursion.",
    explanation: "Divide by 2 recursively.",
    logic: "1. Divide by 2\n2. Print remainder recursively",
    sampleInput: "10",
    sampleOutput: "1010"
  },
  {
    id: 14,
    title: "Decimal to Octal",
    statement: "Convert decimal to octal using recursion.",
    explanation: "Divide by 8 recursively.",
    logic: "1. Divide by 8\n2. Print remainders",
    sampleInput: "10",
    sampleOutput: "12"
  },
  {
    id: 15,
    title: "String Length",
    statement: "Find string length using recursion.",
    explanation: "Count characters recursively.",
    logic: "1. Base null character\n2. Return 1 + recursion",
    sampleInput: "hello",
    sampleOutput: "5"
  },
  {
    id: 16,
    title: "Reverse String",
    statement: "Reverse string using recursion.",
    explanation: "Swap characters recursively.",
    logic: "1. Swap start/end\n2. Recursive call inward",
    sampleInput: "hello",
    sampleOutput: "olleh"
  },
  {
    id: 17,
    title: "Palindrome String",
    statement: "Check palindrome string using recursion.",
    explanation: "Compare first and last recursively.",
    logic: "1. Compare ends\n2. Move inward recursively",
    sampleInput: "madam",
    sampleOutput: "Palindrome"
  },
  {
    id: 18,
    title: "Tower of Hanoi",
    statement: "Solve Tower of Hanoi using recursion.",
    explanation: "Move disks recursively between rods.",
    logic: "1. Move n-1\n2. Move disk\n3. Move n-1 again",
    sampleInput: "3",
    sampleOutput: "Disk movements"
  },
  {
    id: 19,
    title: "Array Sum",
    statement: "Find sum of array elements using recursion.",
    explanation: "Add one element recursively.",
    logic: "1. Base index\n2. Add element + recurse",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "15"
  },
  {
    id: 20,
    title: "Linear Search Recursion",
    statement: "Search element using recursion.",
    explanation: "Compare recursively until found.",
    logic: "1. Compare current element\n2. Recurse next index\n3. Stop if found/end",
    sampleInput: "5\n1 2 3 4 5\n4",
    sampleOutput: "Found"
  }
],
"Two Pointer": [
  {
    id: 1,
    title: "Pair Sum",
    statement: "Find two numbers whose sum equals target using two pointers.",
    explanation: "Two pointers start from both ends and move according to sum comparison.",
    logic: "1. Sort array\n2. Left=start Right=end\n3. Compare sum\n4. Move pointers accordingly",
    sampleInput: "5\n1 2 3 4 5\n6",
    sampleOutput: "1 5"
  },
  {
    id: 2,
    title: "Two Sum Sorted Array",
    statement: "Find indices of two numbers in sorted array.",
    explanation: "Use left and right pointers to search efficiently.",
    logic: "1. Start from ends\n2. Compare sum with target\n3. Move pointers",
    sampleInput: "5\n2 7 11 15 20\n22",
    sampleOutput: "2 5"
  },
  {
    id: 3,
    title: "Remove Duplicates",
    statement: "Remove duplicates from sorted array.",
    explanation: "Slow pointer stores unique elements while fast pointer scans array.",
    logic: "1. Slow pointer\n2. Fast pointer\n3. Copy unique elements",
    sampleInput: "6\n1 1 2 2 3 3",
    sampleOutput: "1 2 3"
  },
  {
    id: 4,
    title: "Move Zeroes",
    statement: "Move all zeroes to end of array.",
    explanation: "Two pointers place non-zero elements first.",
    logic: "1. Track non-zero index\n2. Swap with current element",
    sampleInput: "5\n0 1 0 3 12",
    sampleOutput: "1 3 12 0 0"
  },
  {
    id: 5,
    title: "Reverse Array",
    statement: "Reverse array using two pointers.",
    explanation: "Swap elements from both ends moving inward.",
    logic: "1. Left and right pointers\n2. Swap\n3. Move inward",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "5 4 3 2 1"
  },
  {
    id: 6,
    title: "Reverse String",
    statement: "Reverse string using two pointers.",
    explanation: "Swap first and last characters repeatedly.",
    logic: "1. Left and right\n2. Swap chars\n3. Continue till meet",
    sampleInput: "hello",
    sampleOutput: "olleh"
  },
  {
    id: 7,
    title: "Palindrome String",
    statement: "Check palindrome using two pointers.",
    explanation: "Compare characters from both ends.",
    logic: "1. Compare left/right\n2. Move inward\n3. Stop on mismatch",
    sampleInput: "madam",
    sampleOutput: "Palindrome"
  },
  {
    id: 8,
    title: "Container With Most Water",
    statement: "Find maximum water container area.",
    explanation: "Two pointers evaluate container area efficiently.",
    logic: "1. Start both ends\n2. Compute area\n3. Move smaller height",
    sampleInput: "8\n1 8 6 2 5 4 8 3",
    sampleOutput: "49"
  },
  {
    id: 9,
    title: "Squares of Sorted Array",
    statement: "Return squares in sorted order.",
    explanation: "Compare absolute values from both ends.",
    logic: "1. Left/right compare\n2. Place larger square",
    sampleInput: "5\n-4 -1 0 3 10",
    sampleOutput: "0 1 9 16 100"
  },
  {
    id: 10,
    title: "Three Sum Basics",
    statement: "Find triplets with target sum.",
    explanation: "Fix one element and use two pointers.",
    logic: "1. Fix element\n2. Two pointers\n3. Compare sum",
    sampleInput: "6\n-1 0 1 2 -1 -4",
    sampleOutput: "Triplets found"
  },
  {
    id: 11,
    title: "Closest Pair Sum",
    statement: "Find pair whose sum is closest to target.",
    explanation: "Move pointers based on difference.",
    logic: "1. Compare diff\n2. Update answer\n3. Move pointers",
    sampleInput: "5\n1 3 4 7 10\n15",
    sampleOutput: "4 10"
  },
  {
    id: 12,
    title: "Count Pairs",
    statement: "Count pairs with given sum.",
    explanation: "Use sorted array and pointers.",
    logic: "1. Left/right\n2. Compare sum\n3. Count pairs",
    sampleInput: "5\n1 2 3 4 5\n5",
    sampleOutput: "2"
  },
  {
    id: 13,
    title: "Merge Two Sorted Arrays",
    statement: "Merge two sorted arrays using pointers.",
    explanation: "Compare and merge sequentially.",
    logic: "1. Two indices\n2. Compare\n3. Merge smaller",
    sampleInput: "1 3 5\n2 4 6",
    sampleOutput: "1 2 3 4 5 6"
  },
  {
    id: 14,
    title: "Partition Array",
    statement: "Separate positive and negative numbers.",
    explanation: "Two pointers rearrange elements.",
    logic: "1. Left/right\n2. Swap mismatches",
    sampleInput: "5\n-1 2 -3 4 5",
    sampleOutput: "-1 -3 2 4 5"
  },
  {
    id: 15,
    title: "Sort 0s and 1s",
    statement: "Sort binary array using two pointers.",
    explanation: "Place 0s and 1s correctly.",
    logic: "1. Left/right\n2. Swap as needed",
    sampleInput: "5\n1 0 1 0 1",
    sampleOutput: "0 0 1 1 1"
  },
  {
    id: 16,
    title: "Dutch National Flag",
    statement: "Sort 0s,1s,2s using pointers.",
    explanation: "Three-pointer extension of two-pointer idea.",
    logic: "1. Low mid high\n2. Swap accordingly",
    sampleInput: "6\n2 0 1 2 1 0",
    sampleOutput: "0 0 1 1 2 2"
  },
  {
    id: 17,
    title: "Intersection of Arrays",
    statement: "Find common elements of sorted arrays.",
    explanation: "Use two pointers to compare.",
    logic: "1. Compare elements\n2. Move smaller pointer",
    sampleInput: "1 2 3 4\n2 4 6",
    sampleOutput: "2 4"
  },
  {
    id: 18,
    title: "Valid Palindrome",
    statement: "Check palindrome ignoring spaces and symbols.",
    explanation: "Skip invalid chars and compare.",
    logic: "1. Ignore symbols\n2. Compare chars",
    sampleInput: "A man a plan a canal Panama",
    sampleOutput: "Palindrome"
  },
  {
    id: 19,
    title: "Trapping Rain Water",
    statement: "Calculate trapped rainwater.",
    explanation: "Use two pointers and max boundaries.",
    logic: "1. Left/right max\n2. Add trapped water",
    sampleInput: "6\n0 1 0 2 1 0",
    sampleOutput: "1"
  },
  {
    id: 20,
    title: "Subsequence Check",
    statement: "Check whether string is subsequence of another.",
    explanation: "Use two pointers for both strings.",
    logic: "1. Compare chars\n2. Move pointers accordingly",
    sampleInput: "abc ahbgdc",
    sampleOutput: "True"
  },
],
"Sliding Window": [
  {
    id: 1,
    title: "Maximum Sum Subarray",
    statement: "Find maximum sum of subarray of size K.",
    explanation: "Sliding window maintains current window sum and updates efficiently.",
    logic: "1. Find first window sum\n2. Slide window\n3. Add next and remove previous\n4. Track maximum",
    sampleInput: "5\n2 1 5 1 3\n3",
    sampleOutput: "9"
  },
  {
    id: 2,
    title: "Average of Subarrays",
    statement: "Find average of all subarrays of size K.",
    explanation: "Maintain window sum and compute average for each window.",
    logic: "1. Window sum\n2. Slide window\n3. Compute average",
    sampleInput: "5\n1 3 2 6 4\n2",
    sampleOutput: "2 2.5 4 5"
  },
  {
    id: 3,
    title: "Smallest Subarray Sum",
    statement: "Find smallest subarray with sum greater than target.",
    explanation: "Expand and shrink window to satisfy condition.",
    logic: "1. Expand window\n2. Check sum\n3. Shrink if possible\n4. Track minimum length",
    sampleInput: "6\n2 1 5 2 3 2\n7",
    sampleOutput: "2"
  },
  {
    id: 4,
    title: "Longest Substring Without Repeat",
    statement: "Find longest substring without repeating characters.",
    explanation: "Use sliding window and set/map to track characters.",
    logic: "1. Expand window\n2. Remove duplicates\n3. Track max length",
    sampleInput: "abcabcbb",
    sampleOutput: "3"
  },
  {
    id: 5,
    title: "Maximum Ones",
    statement: "Find maximum consecutive 1s using sliding window.",
    explanation: "Maintain valid window of consecutive ones.",
    logic: "1. Expand\n2. Count ones\n3. Track maximum",
    sampleInput: "1 1 0 1 1 1",
    sampleOutput: "3"
  },
  {
    id: 6,
    title: "Anagram Count",
    statement: "Count occurrences of anagrams in string.",
    explanation: "Compare character frequency inside window.",
    logic: "1. Frequency map\n2. Slide window\n3. Compare counts",
    sampleInput: "forxxorfxdofr\nfor",
    sampleOutput: "3"
  },
  {
    id: 7,
    title: "First Negative Number",
    statement: "Find first negative number in every window of size K.",
    explanation: "Track negatives while sliding window.",
    logic: "1. Window\n2. Store negatives\n3. Slide and print",
    sampleInput: "8\n12 -1 -7 8 -15 30 16 28\n3",
    sampleOutput: "-1 -1 -7 -15 -15 0"
  },
  {
    id: 8,
    title: "Distinct Elements",
    statement: "Count distinct elements in every window.",
    explanation: "Use map frequency inside window.",
    logic: "1. Map frequency\n2. Slide window\n3. Count distinct",
    sampleInput: "7\n1 2 1 3 4 2 3\n4",
    sampleOutput: "3 4 4 3"
  },
  {
    id: 9,
    title: "Longest Ones After Flip",
    statement: "Find longest consecutive 1s after flipping at most K zeros.",
    explanation: "Maintain valid window with limited zero flips.",
    logic: "1. Expand\n2. Count zeros\n3. Shrink if limit exceeded",
    sampleInput: "1 1 0 0 1 1 1\n2",
    sampleOutput: "7"
  },
  {
    id: 10,
    title: "Minimum Window Substring",
    statement: "Find minimum window containing all characters.",
    explanation: "Shrink and expand to find minimum valid window.",
    logic: "1. Expand\n2. Match chars\n3. Shrink minimum",
    sampleInput: "ADOBECODEBANC\nABC",
    sampleOutput: "BANC"
  },
  {
    id: 11,
    title: "Longest K Unique Characters",
    statement: "Find longest substring with K unique characters.",
    explanation: "Maintain valid window with K unique chars.",
    logic: "1. Expand\n2. Count unique\n3. Shrink if needed",
    sampleInput: "aabacbebebe\n3",
    sampleOutput: "7"
  },
  {
    id: 12,
    title: "Max Sum Fixed Window",
    statement: "Find maximum sum in fixed size window.",
    explanation: "Sliding window avoids repeated summation.",
    logic: "1. First sum\n2. Slide\n3. Track max",
    sampleInput: "6\n1 4 2 10 2 3\n3",
    sampleOutput: "16"
  },
  {
    id: 13,
    title: "Subarray Product Less Than K",
    statement: "Count subarrays with product less than K.",
    explanation: "Maintain valid product window.",
    logic: "1. Expand\n2. Product update\n3. Shrink if needed",
    sampleInput: "4\n10 5 2 6\n100",
    sampleOutput: "8"
  },
  {
    id: 14,
    title: "Longest Equal Subarray",
    statement: "Find longest subarray of equal elements.",
    explanation: "Track equal values using window.",
    logic: "1. Expand\n2. Check equality\n3. Track length",
    sampleInput: "1 1 1 2 2 2 2",
    sampleOutput: "4"
  },
  {
    id: 15,
    title: "Longest Increasing Window",
    statement: "Find longest increasing contiguous subarray.",
    explanation: "Maintain increasing sequence window.",
    logic: "1. Compare adjacent\n2. Expand if increasing\n3. Reset if not",
    sampleInput: "1 2 3 2 5 6 7",
    sampleOutput: "4"
  },
  {
    id: 16,
    title: "Window Maximum",
    statement: "Find maximum element in every window of size K.",
    explanation: "Use deque for efficient maximum tracking.",
    logic: "1. Maintain deque\n2. Remove old\n3. Track max",
    sampleInput: "8\n1 3 -1 -3 5 3 6 7\n3",
    sampleOutput: "3 3 5 5 6 7"
  },
  {
    id: 17,
    title: "Longest Subarray Sum K",
    statement: "Find longest subarray with sum K.",
    explanation: "Expand and shrink window maintaining sum.",
    logic: "1. Expand\n2. Sum compare\n3. Shrink if needed",
    sampleInput: "5\n1 2 1 0 1\n4",
    sampleOutput: "4"
  },
  {
    id: 18,
    title: "Permutation in String",
    statement: "Check if string contains permutation of another.",
    explanation: "Compare frequency inside window.",
    logic: "1. Frequency map\n2. Slide window\n3. Compare",
    sampleInput: "eidbaooo\nab",
    sampleOutput: "True"
  },
  {
    id: 19,
    title: "Longest Repeating Character Replacement",
    statement: "Find longest repeating character replacement window.",
    explanation: "Maintain valid replacement window.",
    logic: "1. Expand\n2. Count frequency\n3. Shrink if needed",
    sampleInput: "AABABBA\n1",
    sampleOutput: "4"
  },
  {
    id: 20,
    title: "Maximum Vowels",
    statement: "Find maximum vowels in substring of size K.",
    explanation: "Count vowels while sliding window.",
    logic: "1. First window\n2. Slide\n3. Update vowel count",
    sampleInput: "abciiidef\n3",
    sampleOutput: "3"
  }
],
"Divide and Conquer": [
  {
    id: 1,
    title: "Merge Sort",
    statement: "Sort array using Merge Sort.",
    explanation: "Merge sort divides array into smaller halves, sorts them recursively and merges them.",
    logic: "1. Divide array\n2. Sort halves recursively\n3. Merge sorted halves",
    sampleInput: "5\n38 27 43 3 9",
    sampleOutput: "3 9 27 38 43"
  },
  {
    id: 2,
    title: "Quick Sort",
    statement: "Sort array using Quick Sort.",
    explanation: "Quick sort chooses a pivot and partitions array recursively.",
    logic: "1. Choose pivot\n2. Partition array\n3. Sort partitions",
    sampleInput: "5\n10 7 8 9 1",
    sampleOutput: "1 7 8 9 10"
  },
  {
    id: 3,
    title: "Binary Search",
    statement: "Find element using Binary Search.",
    explanation: "Binary search repeatedly divides sorted array into halves.",
    logic: "1. Find middle\n2. Compare target\n3. Search half recursively",
    sampleInput: "5\n10 20 30 40 50\n40",
    sampleOutput: "Found at position 4"
  },
  {
    id: 4,
    title: "Maximum Element",
    statement: "Find maximum element using divide and conquer.",
    explanation: "Split array and recursively find maximum.",
    logic: "1. Divide array\n2. Find max left/right\n3. Compare results",
    sampleInput: "5\n1 9 3 7 5",
    sampleOutput: "9"
  },
  {
    id: 5,
    title: "Minimum Element",
    statement: "Find minimum element using divide and conquer.",
    explanation: "Divide array and compare recursive results.",
    logic: "1. Divide\n2. Recursive min\n3. Compare",
    sampleInput: "5\n4 7 2 9 1",
    sampleOutput: "1"
  },
  {
    id: 6,
    title: "Array Sum",
    statement: "Find sum of array using divide and conquer.",
    explanation: "Split array and add recursively.",
    logic: "1. Divide\n2. Sum left/right\n3. Add",
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "15"
  },
  {
    id: 7,
    title: "Power Calculation",
    statement: "Find power using fast exponentiation.",
    explanation: "Divide exponent by 2 recursively.",
    logic: "1. Divide exponent\n2. Recursive power\n3. Multiply results",
    sampleInput: "2 10",
    sampleOutput: "1024"
  },
  {
    id: 8,
    title: "Count Occurrences",
    statement: "Count occurrences of element using divide and conquer.",
    explanation: "Split array and count recursively.",
    logic: "1. Divide\n2. Count both halves\n3. Add counts",
    sampleInput: "5\n1 2 2 2 3\n2",
    sampleOutput: "3"
  },
  {
    id: 9,
    title: "Peak Element",
    statement: "Find peak element using divide and conquer.",
    explanation: "Peak is greater than neighbours.",
    logic: "1. Find middle\n2. Compare neighbours\n3. Move recursively",
    sampleInput: "5\n1 3 20 4 1",
    sampleOutput: "20"
  },
  {
    id: 10,
    title: "Majority Element",
    statement: "Find majority element using divide and conquer.",
    explanation: "Split array and compare majority candidates.",
    logic: "1. Divide\n2. Majority left/right\n3. Count and decide",
    sampleInput: "5\n2 2 1 2 3",
    sampleOutput: "2"
  },
  {
    id: 11,
    title: "Closest Pair Basics",
    statement: "Find closest pair of numbers.",
    explanation: "Divide points and compare recursively.",
    logic: "1. Divide\n2. Recursive solve\n3. Compare strip",
    sampleInput: "Points",
    sampleOutput: "Closest pair"
  },
  {
    id: 12,
    title: "Count Inversions",
    statement: "Count inversions using merge technique.",
    explanation: "Inversion count measures disorder.",
    logic: "1. Merge sort\n2. Count during merge",
    sampleInput: "5\n2 4 1 3 5",
    sampleOutput: "3"
  },
  {
    id: 13,
    title: "Maximum Subarray",
    statement: "Find maximum subarray sum using divide and conquer.",
    explanation: "Compare left, right and crossing sums.",
    logic: "1. Divide\n2. Left/right max\n3. Crossing max",
    sampleInput: "8\n-2 -3 4 -1 -2 1 5 -3",
    sampleOutput: "7"
  },
  {
    id: 14,
    title: "Median of Sorted Arrays",
    statement: "Find median of two sorted arrays.",
    explanation: "Divide search space efficiently.",
    logic: "1. Partition arrays\n2. Compare medians\n3. Adjust recursively",
    sampleInput: "1 3\n2",
    sampleOutput: "2"
  },
  {
    id: 15,
    title: "Search Rotated Array",
    statement: "Search in rotated sorted array.",
    explanation: "Binary search with rotation handling.",
    logic: "1. Mid compare\n2. Check sorted half\n3. Search recursively",
    sampleInput: "7\n4 5 6 7 0 1 2\n0",
    sampleOutput: "4"
  },
  {
    id: 16,
    title: "Floor Square Root",
    statement: "Find floor square root using divide and conquer.",
    explanation: "Use binary search over answer space.",
    logic: "1. Mid square\n2. Compare\n3. Adjust range",
    sampleInput: "17",
    sampleOutput: "4"
  },
  {
    id: 17,
    title: "Nth Root",
    statement: "Find nth root using divide and conquer.",
    explanation: "Binary search on answer range.",
    logic: "1. Mid guess\n2. Compare power\n3. Narrow range",
    sampleInput: "27 3",
    sampleOutput: "3"
  },
  {
    id: 18,
    title: "Painter Partition",
    statement: "Solve painter partition problem.",
    explanation: "Binary search on minimum time.",
    logic: "1. Mid time\n2. Feasibility check\n3. Adjust answer",
    sampleInput: "Boards",
    sampleOutput: "Minimum time"
  },
  {
    id: 19,
    title: "Book Allocation",
    statement: "Allocate books using divide and conquer.",
    explanation: "Minimize maximum pages using binary search.",
    logic: "1. Mid pages\n2. Check allocation\n3. Update answer",
    sampleInput: "Books",
    sampleOutput: "Minimum pages"
  },
  {
    id: 20,
    title: "Aggressive Cows",
    statement: "Place cows with maximum minimum distance.",
    explanation: "Binary search on distance.",
    logic: "1. Mid distance\n2. Check placement\n3. Adjust range",
    sampleInput: "Stalls",
    sampleOutput: "Largest minimum distance"
  }
],
"Hashing": [
  {
    id: 1,
    title: "Frequency Count",
    statement: "Count frequency of elements using hashing.",
    explanation: "Hash map stores frequency of each element efficiently.",
    logic: "1. Create hash map\n2. Traverse array\n3. Increase count",
    sampleInput: "5\n1 2 2 3 1",
    sampleOutput: "1->2 2->2 3->1"
  },
  {
    id: 2,
    title: "Character Frequency",
    statement: "Count frequency of characters in string.",
    explanation: "Hashing stores occurrence of characters.",
    logic: "1. Create map\n2. Traverse string\n3. Count chars",
    sampleInput: "hello",
    sampleOutput: "h1 e1 l2 o1"
  },
  {
    id: 3,
    title: "First Non Repeating Element",
    statement: "Find first non-repeating element.",
    explanation: "Use frequency map and traverse again.",
    logic: "1. Count frequency\n2. Find freq=1",
    sampleInput: "5\n4 5 1 2 0 4",
    sampleOutput: "5"
  },
  {
    id: 4,
    title: "First Repeating Element",
    statement: "Find first repeating element using hashing.",
    explanation: "Hash set tracks visited elements.",
    logic: "1. Traverse\n2. Check map/set\n3. Return repeat",
    sampleInput: "5\n1 5 3 4 3 5",
    sampleOutput: "5"
  },
  {
    id: 5,
    title: "Two Sum",
    statement: "Find pair whose sum equals target using hashing.",
    explanation: "Store complement in hash map.",
    logic: "1. Traverse\n2. Check target-num\n3. Return pair",
    sampleInput: "5\n2 7 11 15 3\n9",
    sampleOutput: "2 7"
  },
  {
    id: 6,
    title: "Intersection of Arrays",
    statement: "Find common elements using hashing.",
    explanation: "Hash set helps efficient lookup.",
    logic: "1. Store first array\n2. Check second",
    sampleInput: "1 2 3 4\n3 4 5",
    sampleOutput: "3 4"
  },
  {
    id: 7,
    title: "Union of Arrays",
    statement: "Find union using hashing.",
    explanation: "Set automatically removes duplicates.",
    logic: "1. Insert all elements\n2. Print set",
    sampleInput: "1 2 3\n2 3 4",
    sampleOutput: "1 2 3 4"
  },
  {
    id: 8,
    title: "Duplicate Elements",
    statement: "Find duplicates using hashing.",
    explanation: "Frequency greater than one indicates duplicate.",
    logic: "1. Count frequency\n2. Print freq>1",
    sampleInput: "5\n1 2 2 3 3",
    sampleOutput: "2 3"
  },
  {
    id: 9,
    title: "Subarray Sum Equals K",
    statement: "Count subarrays with given sum.",
    explanation: "Prefix sum with hashing speeds search.",
    logic: "1. Prefix sum\n2. Store in map\n3. Count matches",
    sampleInput: "5\n1 1 1 2 1\n2",
    sampleOutput: "3"
  },
  {
    id: 10,
    title: "Longest Consecutive Sequence",
    statement: "Find longest consecutive sequence.",
    explanation: "Hash set gives O(1) lookup.",
    logic: "1. Insert set\n2. Start sequences\n3. Count length",
    sampleInput: "6\n100 4 200 1 3 2",
    sampleOutput: "4"
  },
  {
    id: 11,
    title: "Check Anagram",
    statement: "Check whether two strings are anagrams.",
    explanation: "Character frequencies should match.",
    logic: "1. Count chars\n2. Compare maps",
    sampleInput: "listen\nsilent",
    sampleOutput: "True"
  },
  {
    id: 12,
    title: "Longest Substring Without Repeat",
    statement: "Find longest substring without repeating characters.",
    explanation: "Hash set tracks unique chars.",
    logic: "1. Sliding window\n2. Hash set\n3. Track max",
    sampleInput: "abcabcbb",
    sampleOutput: "3"
  },
  {
    id: 13,
    title: "Majority Element",
    statement: "Find majority element using hashing.",
    explanation: "Frequency > n/2 is majority.",
    logic: "1. Count frequency\n2. Check majority",
    sampleInput: "5\n2 2 1 2 3",
    sampleOutput: "2"
  },
  {
    id: 14,
    title: "Pair Difference",
    statement: "Check pair with given difference.",
    explanation: "Hash set enables quick search.",
    logic: "1. Store set\n2. Check num+diff",
    sampleInput: "5\n1 5 3 4 2\n2",
    sampleOutput: "True"
  },
  {
    id: 15,
    title: "Zero Sum Subarray",
    statement: "Check zero sum subarray using hashing.",
    explanation: "Repeated prefix sum means zero sum subarray.",
    logic: "1. Prefix sum\n2. Hash map\n3. Check repeat",
    sampleInput: "5\n4 2 -3 1 6",
    sampleOutput: "True"
  },
  {
    id: 16,
    title: "Equal Pair Count",
    statement: "Count equal pairs using hashing.",
    explanation: "Use frequencies to count combinations.",
    logic: "1. Frequency map\n2. Calculate pairs",
    sampleInput: "5\n1 1 1 2 2",
    sampleOutput: "4"
  },
  {
    id: 17,
    title: "Most Frequent Element",
    statement: "Find most frequent element.",
    explanation: "Hash map stores counts efficiently.",
    logic: "1. Count frequency\n2. Find max count",
    sampleInput: "5\n1 3 2 3 3",
    sampleOutput: "3"
  },
  {
    id: 18,
    title: "Distinct Count",
    statement: "Count distinct elements using hashing.",
    explanation: "Set stores unique elements only.",
    logic: "1. Insert set\n2. Count size",
    sampleInput: "5\n1 2 2 3 3",
    sampleOutput: "3"
  },
  {
    id: 19,
    title: "Grouping Anagrams",
    statement: "Group anagrams using hashing.",
    explanation: "Sorted string used as hash key.",
    logic: "1. Sort words\n2. Hash map groups",
    sampleInput: "eat tea tan ate nat",
    sampleOutput: "Grouped anagrams"
  },
  {
    id: 20,
    title: "Longest Equal 0 and 1 Subarray",
    statement: "Find longest subarray with equal 0s and 1s.",
    explanation: "Prefix sum and hashing help track balance.",
    logic: "1. Replace 0 with -1\n2. Prefix sum\n3. Store first occurrence",
    sampleInput: "6\n0 1 0 1 1 0",
    sampleOutput: "6"
  }
],
"Tree Algorithms": [
  {
    id: 1,
    title: "Binary Tree Creation",
    statement: "Create and display a binary tree.",
    explanation: "Binary tree contains nodes with left and right children.",
    logic: "1. Create node\n2. Assign left/right child\n3. Traverse tree",
    sampleInput: "1 2 3",
    sampleOutput: "Tree Created"
  },
  {
    id: 2,
    title: "Preorder Traversal",
    statement: "Perform preorder traversal of binary tree.",
    explanation: "Visit Root → Left → Right.",
    logic: "1. Visit root\n2. Traverse left\n3. Traverse right",
    sampleInput: "Binary Tree",
    sampleOutput: "1 2 4 5 3"
  },
  {
    id: 3,
    title: "Inorder Traversal",
    statement: "Perform inorder traversal of binary tree.",
    explanation: "Visit Left → Root → Right.",
    logic: "1. Traverse left\n2. Visit root\n3. Traverse right",
    sampleInput: "Binary Tree",
    sampleOutput: "4 2 5 1 3"
  },
  {
    id: 4,
    title: "Postorder Traversal",
    statement: "Perform postorder traversal of binary tree.",
    explanation: "Visit Left → Right → Root.",
    logic: "1. Traverse left\n2. Traverse right\n3. Visit root",
    sampleInput: "Binary Tree",
    sampleOutput: "4 5 2 3 1"
  },
  {
    id: 5,
    title: "Level Order Traversal",
    statement: "Perform level order traversal.",
    explanation: "Nodes are visited level by level using queue.",
    logic: "1. Queue\n2. Visit node\n3. Push children",
    sampleInput: "Binary Tree",
    sampleOutput: "1 2 3 4 5"
  },
  {
    id: 6,
    title: "Count Nodes",
    statement: "Count total nodes in binary tree.",
    explanation: "Recursively count left and right subtree nodes.",
    logic: "1. Base NULL\n2. Count left/right\n3. Add 1",
    sampleInput: "Binary Tree",
    sampleOutput: "5"
  },
  {
    id: 7,
    title: "Count Leaf Nodes",
    statement: "Count leaf nodes in tree.",
    explanation: "Leaf node has no children.",
    logic: "1. Check leaf\n2. Recursive count",
    sampleInput: "Binary Tree",
    sampleOutput: "3"
  },
  {
    id: 8,
    title: "Tree Height",
    statement: "Find height of binary tree.",
    explanation: "Height is longest path from root to leaf.",
    logic: "1. Height left/right\n2. Return max+1",
    sampleInput: "Binary Tree",
    sampleOutput: "3"
  },
  {
    id: 9,
    title: "Mirror Tree",
    statement: "Convert tree into mirror tree.",
    explanation: "Swap left and right child recursively.",
    logic: "1. Swap children\n2. Recursive calls",
    sampleInput: "Binary Tree",
    sampleOutput: "Mirror Tree"
  },
  {
    id: 10,
    title: "Search in BST",
    statement: "Search value in Binary Search Tree.",
    explanation: "BST allows faster search using ordering.",
    logic: "1. Compare root\n2. Move left/right",
    sampleInput: "BST\n40",
    sampleOutput: "Found"
  },
  {
    id: 11,
    title: "Insert in BST",
    statement: "Insert node into BST.",
    explanation: "Insert according to BST property.",
    logic: "1. Compare value\n2. Insert left/right",
    sampleInput: "BST\n25",
    sampleOutput: "Inserted"
  },
  {
    id: 12,
    title: "Delete in BST",
    statement: "Delete node from BST.",
    explanation: "Handle leaf, one-child and two-child cases.",
    logic: "1. Search node\n2. Delete case handling",
    sampleInput: "BST\n30",
    sampleOutput: "Deleted"
  },
  {
    id: 13,
    title: "Minimum in BST",
    statement: "Find minimum value in BST.",
    explanation: "Leftmost node contains minimum value.",
    logic: "1. Move left until NULL",
    sampleInput: "BST",
    sampleOutput: "10"
  },
  {
    id: 14,
    title: "Maximum in BST",
    statement: "Find maximum value in BST.",
    explanation: "Rightmost node contains maximum value.",
    logic: "1. Move right until NULL",
    sampleInput: "BST",
    sampleOutput: "90"
  },
  {
    id: 15,
    title: "Tree Diameter",
    statement: "Find diameter of binary tree.",
    explanation: "Diameter is longest path between two nodes.",
    logic: "1. Height left/right\n2. Track maximum path",
    sampleInput: "Binary Tree",
    sampleOutput: "4"
  },
  {
    id: 16,
    title: "Check Balanced Tree",
    statement: "Check whether tree is height balanced.",
    explanation: "Difference of subtree heights ≤1.",
    logic: "1. Height diff\n2. Recursive check",
    sampleInput: "Binary Tree",
    sampleOutput: "Balanced"
  },
  {
    id: 17,
    title: "Lowest Common Ancestor",
    statement: "Find LCA of two nodes.",
    explanation: "LCA is lowest node having both nodes as descendants.",
    logic: "1. Search recursively\n2. Return ancestor",
    sampleInput: "Tree\n4 5",
    sampleOutput: "2"
  },
  {
    id: 18,
    title: "Root to Leaf Paths",
    statement: "Print all root to leaf paths.",
    explanation: "Backtracking helps track current path.",
    logic: "1. Store path\n2. Print at leaf",
    sampleInput: "Binary Tree",
    sampleOutput: "1->2->4"
  },
  {
    id: 19,
    title: "Same Tree Check",
    statement: "Check whether two trees are identical.",
    explanation: "Compare nodes recursively.",
    logic: "1. Compare roots\n2. Compare subtrees",
    sampleInput: "Two Trees",
    sampleOutput: "True"
  },
  {
    id: 20,
    title: "Zigzag Traversal",
    statement: "Perform zigzag traversal of tree.",
    explanation: "Alternate left-right and right-left levels.",
    logic: "1. Queue/stack\n2. Alternate directions",
    sampleInput: "Binary Tree",
    sampleOutput: "1 3 2 4 5"
  }
],
"Graph Algorithms": [
  {
    id: 1,
    title: "Graph Representation",
    statement: "Represent graph using adjacency matrix.",
    explanation: "Adjacency matrix stores edge connections in 2D array.",
    logic: "1. Create matrix\n2. Insert edges\n3. Print matrix",
    sampleInput: "4 vertices 3 edges",
    sampleOutput: "Adjacency Matrix"
  },
  {
    id: 2,
    title: "Adjacency List",
    statement: "Represent graph using adjacency list.",
    explanation: "Adjacency list stores neighbours of each vertex.",
    logic: "1. Create list\n2. Add neighbours\n3. Traverse",
    sampleInput: "Graph",
    sampleOutput: "Adjacency List"
  },
  {
    id: 3,
    title: "DFS Traversal",
    statement: "Perform Depth First Search traversal.",
    explanation: "DFS explores as deep as possible before backtracking.",
    logic: "1. Visit node\n2. Recursive DFS\n3. Mark visited",
    sampleInput: "Graph",
    sampleOutput: "0 1 2 3"
  },
  {
    id: 4,
    title: "BFS Traversal",
    statement: "Perform Breadth First Search traversal.",
    explanation: "BFS visits graph level by level using queue.",
    logic: "1. Queue\n2. Visit node\n3. Push neighbours",
    sampleInput: "Graph",
    sampleOutput: "0 1 2 3"
  },
  {
    id: 5,
    title: "Connected Components",
    statement: "Find connected components in graph.",
    explanation: "DFS/BFS helps identify components.",
    logic: "1. Traverse graph\n2. Count components",
    sampleInput: "Graph",
    sampleOutput: "2"
  },
  {
    id: 6,
    title: "Cycle Detection Undirected",
    statement: "Detect cycle in undirected graph.",
    explanation: "Cycle exists if visited node appears again excluding parent.",
    logic: "1. DFS/BFS\n2. Parent tracking\n3. Detect revisit",
    sampleInput: "Graph",
    sampleOutput: "Cycle Found"
  },
  {
    id: 7,
    title: "Cycle Detection Directed",
    statement: "Detect cycle in directed graph.",
    explanation: "Use recursion stack to detect back edge.",
    logic: "1. DFS\n2. Recursion stack\n3. Detect cycle",
    sampleInput: "Graph",
    sampleOutput: "Cycle Found"
  },
  {
    id: 8,
    title: "Topological Sort",
    statement: "Perform topological sorting.",
    explanation: "Topological sort orders DAG nodes.",
    logic: "1. DFS/Kahn\n2. Store order\n3. Reverse output",
    sampleInput: "DAG",
    sampleOutput: "5 4 2 3 1 0"
  },
  {
    id: 9,
    title: "Shortest Path BFS",
    statement: "Find shortest path in unweighted graph.",
    explanation: "BFS guarantees shortest path in unweighted graph.",
    logic: "1. Queue\n2. Distance array\n3. BFS traversal",
    sampleInput: "Graph",
    sampleOutput: "Shortest Distance"
  },
  {
    id: 10,
    title: "Dijkstra Algorithm",
    statement: "Find shortest path using Dijkstra algorithm.",
    explanation: "Dijkstra finds shortest path in weighted graph.",
    logic: "1. Priority queue\n2. Relax edges\n3. Update distance",
    sampleInput: "Weighted Graph",
    sampleOutput: "Shortest Paths"
  },
  {
    id: 11,
    title: "Bellman Ford",
    statement: "Find shortest path using Bellman Ford.",
    explanation: "Bellman Ford works with negative edges.",
    logic: "1. Relax edges V-1 times\n2. Detect negative cycle",
    sampleInput: "Weighted Graph",
    sampleOutput: "Shortest Distance"
  },
  {
    id: 12,
    title: "Floyd Warshall",
    statement: "Find all pair shortest paths.",
    explanation: "Dynamic programming computes shortest paths between all nodes.",
    logic: "1. Intermediate node\n2. Update distances",
    sampleInput: "Weighted Graph",
    sampleOutput: "Distance Matrix"
  },
  {
    id: 13,
    title: "Minimum Spanning Tree Kruskal",
    statement: "Find MST using Kruskal algorithm.",
    explanation: "Kruskal chooses smallest edges avoiding cycles.",
    logic: "1. Sort edges\n2. DSU check\n3. Add edge",
    sampleInput: "Weighted Graph",
    sampleOutput: "MST Weight"
  },
  {
    id: 14,
    title: "Minimum Spanning Tree Prim",
    statement: "Find MST using Prim algorithm.",
    explanation: "Prim grows MST from starting node.",
    logic: "1. Priority queue\n2. Choose minimum edge",
    sampleInput: "Weighted Graph",
    sampleOutput: "MST Weight"
  },
  {
    id: 15,
    title: "Bipartite Graph Check",
    statement: "Check whether graph is bipartite.",
    explanation: "Two-coloring determines bipartite graph.",
    logic: "1. BFS/DFS coloring\n2. Check conflict",
    sampleInput: "Graph",
    sampleOutput: "Bipartite"
  },
  {
    id: 16,
    title: "Strongly Connected Components",
    statement: "Find strongly connected components.",
    explanation: "Kosaraju/Tarjan algorithm identifies SCCs.",
    logic: "1. DFS order\n2. Reverse graph\n3. DFS again",
    sampleInput: "Directed Graph",
    sampleOutput: "SCCs"
  },
  {
    id: 17,
    title: "Bridge in Graph",
    statement: "Find bridges in graph.",
    explanation: "Bridge removal disconnects graph.",
    logic: "1. DFS\n2. Discovery/low time\n3. Detect bridge",
    sampleInput: "Graph",
    sampleOutput: "Bridges"
  },
  {
    id: 18,
    title: "Articulation Point",
    statement: "Find articulation points.",
    explanation: "Removing articulation point disconnects graph.",
    logic: "1. DFS\n2. Low values\n3. Check conditions",
    sampleInput: "Graph",
    sampleOutput: "Articulation Points"
  },
  {
    id: 19,
    title: "Graph Coloring",
    statement: "Color graph using greedy coloring.",
    explanation: "Assign minimum valid colors.",
    logic: "1. Pick vertex\n2. Assign smallest color",
    sampleInput: "Graph",
    sampleOutput: "Color Assignment"
  },
  {
    id: 20,
    title: "Hamiltonian Path Basics",
    statement: "Check Hamiltonian path in graph.",
    explanation: "Hamiltonian path visits every vertex once.",
    logic: "1. Backtracking\n2. Visit nodes\n3. Check path",
    sampleInput: "Graph",
    sampleOutput: "Path Exists"
  }
],
};

export default questions;