/* 
	Hash Tables

	- associative data structure (key - value) using a hash function.
		* This hash function is used to calculate the index where data is stored.
			-> Data is stored in slots o buckets in the table, the number of them is arbitrary
				and it is hash function task determine in which slot a element will be placed.

	- useful for search info in a big amount of data.
		* If we have a uniform allocation of hashes, the cost of obtaining any data
			it will be uniform too, since it will not depend on the number of items saved
			since with the hash function we can easily obtain the index.


	- Its main difference with objects is that a key will be 
		converted into a hash trough a particular hash function.

	- hash table collision: two keys or more could be allocated with the same hash.

*/

