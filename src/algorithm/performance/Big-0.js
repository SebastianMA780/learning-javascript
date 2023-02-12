//SUM = O(1 + 1 + n + 1 + n + 1 + 1 + n^2) = O(4 + 2n + n^2) = O(n^2);


async function alphaAlgorithm(payloadId, payloadAPI) {
	let respuesta = await fetch(payloadAPI); // O(1)
	let data = await respuesta.json(); // O(1)
	for (let i = 0; i < data.length; i++) { // O(n^2)
			let payloads = data[i].rocket.second_stage['payloads']; // O(1)
			for (let j = 0; j < payloads.length; j++) { // O(n)
					if (payloadId == payloads[j].payload_id) { //0(1)
							return true;
					}
			}
	}
	return false;
}

// SUM = O(1 + 1 + n + 1 + 1 + 1 +  n + n^2 + 1 + 1 + n) = O(7 + 3n + n^2) = O(n^2)

async function betaAlgorithm(payloadId, payloadAPI) {
	let arreglosCoinciden = (arreglo1, arreglo2) => { // O(1)
			if (arreglo1.length != arreglo2.length) { // O(1)
					return false;
			}
			for (let i = 0; i < arreglo1.length; i++) { // O(n)
					if (arreglo1[i] != arreglo2[i]) { // O(1)
							return false;
					}
			}
			return true;
	};
	let respuesta = await fetch(payloadAPI); // O(1)
	let data = await respuesta.json(); // O(1)
	let payloadIdArray = payloadId.split(''); // O(n)
	for (let i = 0; i < data.length; i++) { // O(n^2)
			let payloads = data[i].rocket.second_stage.payloads; // O(1)
			for (let j = 0; j < payloads.length; j++) { // O(n)
					if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(''))) {
							return true;
					}
			}
	}
	return false;
}

// SUM = O(1 + 1 +  1 + 1 +  n + 1 + 1 + n + 1 + 1) = O(8 + 2n) = O(n)
async function algoritmoDelta(payloadId, payloadAPI) {
	let respuesta = await fetch(payloadAPI); // O(1)
	let data = await respuesta.json(); // O(1)
	let listaDePayloads = []; // O(1)
	let longitudData = data.length; // O(1)

	for (let i = 0; i < longitudData; i++) { // O(n)
			let payloads = data[i].rocket; // O(1)
			listaDePayloads.push(...payloads.second_stage['payloads']); // O(1)
	}

	for (let i = 0; i < listaDePayloads.length; i++) { // O(n)
			let localPayloadId = listaDePayloads[i].payload_id; // O(1)
			if (localPayloadId == payloadId) { // O(1)
					return true;
			} else {
					return false;
			}
	}
}