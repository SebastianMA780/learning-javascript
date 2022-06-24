/* 
	Hash Tables

	- associative data structure (key - value) that use a hash function to address the info.
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
	class HashTable {

		constructor(size) {
			this.data = new Array(size);
		}

		hashFunction(key) {
			let hash = 0
			for (let index = 0; index < key.length; index++) {
				hash = (hash + key.charCodeAt(index) * index) % this.data.length;
			}
			return hash;
		}

		set(key, value) {
			const address = this.hashFunction(key);
			console.log(`address: ${address}`);
			if(!this.data[address]) {
				this.data[address] = [];
			}
			this.data[address].push([key, value]);
			return this.data;
		}

		get(key) {
			const address = this.hashFunction(key);
			const currentBucket = this.data[address];
			if(currentBucket) {
				for (let index = 0; index < currentBucket.length; index++) {
					if(currentBucket[index][0] === key) {
						return currentBucket[index][1];
					}
				}
			}
			return undefined;
		}


	}

	const myHashTable = new HashTable(50);
	console.log({
		myHashTable
	});
	myHashTable.set('engineer', 29);
	myHashTable.set('lawyer', 30);
	myHashTable.set('doctor', 31);
	myHashTable.set('engineer', 32); //keys must be unique, this should not been allowed.
	console.log({
		myHashTable,
		getQuantity: [
			myHashTable.get('lawyer'),
			myHashTable.get('engineer'),
			myHashTable.get('doctor'),
		]
	});
