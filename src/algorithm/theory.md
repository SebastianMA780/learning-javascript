# What is an Algorithm ?

An algorithm is a well-defined sequence of steps for solving a specific problem or task. It takes inputs, performs processing with the inputs, and produces an output if necessary.

<details>
  <summary>Structure of An Algorithm.</summary>
  
- Inputs
- Processing
- Output (optional)
</details>

<br />

<details>
  <summary>Choosing an Algorithm.</summary>
  
	Choosing an algorithm is a matter of finding the best algorithm for the problem at hand.
	The best algorithm is the one that is the most efficient in terms of time and space complexity.

- Time Complexity: How much time does it take to run the algorithm?
	- We measure the algorithm in terms of time execution
	- The Timing is not in terms of specific cases, but in terms how time execution increases as the input size increases.

- Space Complexity: How much memory does it take to run the algorithm?
	- Is responsible for the amount of memory used by the algorithm.
	- Auxiliary Space: The space used by the algorithm, not including the space used by the input.
		- Includes the space used by variables and data structures used to store the intermediate values
		- The auxiliary space is an important factor to consider while analyzing the efficiency of an algorithm as it directly affects the memory usage of the algorithm.

	* Are there more complexities to analyze?
		- Yes, there are many of them like:
			* Memory access
			* Parallel process
			* Comparisons
</details>

<br />

<details>
	<summary>Asymptotic analysis.</summary>

	Is a method of analyzing the running time of an algorithm by comparing it to simpler functions.

- It provides upper and lower bounds on the growth rate of the running time of an algorithm.
	- This allows us to estimate efficiency without the need to actually run it with large inputs.
- The most common forms of asymptotic analysis
	- Big-O Notation
	- Big-Ω Notation (Omega)
	- Big-Θ Notation (Theta)


`It is worth to mention that the actual running time of an algorithm can be influenced by many factors, such as hardware and software configurations. Even so, asymptotic analysis provide useful insights`

</details>
