// uma classe para a Queue, uma lista em javascript

class Queue {
    constructor() {
        this.items = [];
    }
    
    // adiciona o elemento na lista
    enqueue(elemento) {
        return this.items.push(elemento);
    }
    
    // remova o elemento na lista
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // vê o último elemnto
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // verifica se a lista tá vazia
    isEmpty(){
       return this.items.length == 0;
    }
   
    // o tamanho da lista
    size(){
        return this.items.length;
    }
 
    // limpar a lista
    clear(){
        this.items = [];
    }
}


class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    // adiciona o elemento na lista
    enqueue(element, priority)
	{
		// creating object from queue element
		var qElement = new QElement(element, priority);
		var contain = false;
	 
		// iterating through the entire
		// item array to add element at the
		// correct location of the Queue
		for (var i = 0; i < this.items.length; i++) {
		    if (this.items[i].priority > qElement.priority) {
		        // Once the correct location is found it is
		        // enqueued
		        this.items.splice(i, 0, qElement);
		        contain = true;
		        break;
		    }
		}
	 
		// if the element have the highest priority
		// it is added at the end of the queue
		if (!contain) {
		    this.items.push(qElement);
		}
	}
    
    // remova o elemento na lista
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // vê o último elemnto
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // verifica se a lista tá vazia
    isEmpty(){
       return this.items.length == 0;
    }
   
    // o tamanho da lista
    size(){
        return this.items.length;
    }
 
    // limpar a lista
    clear(){
        this.items = [];
    }
}


// Criando uma classe de Grafos
class Grafo {
	// definindo um vetor de vértices e lista adjacente
	constructor(){ //numDeVert
		//this.numDeVert = numDeVert;
		this.ListaAdj = new Map();
		this.ListaPes = new Map();
	}
	
	numVertices = 0;
	
	//adiciona um vértice no grafo
	addVert(v){
		//inicializa a lista adjacente com um vetor nulo
		this.ListaAdj.set(v, []);
		this.ListaPes.set(v, []);
		this.numVertices++;
	}
	
	//addAresta(v, w, É dirigido?)
	//adiciona uma aresta no grafo
	addAresta(src, dest, peso, dirc){
		if (src != dest){
			//pega a lista do vértice V (source, src) e põe o vértice W (destino, dest)
			//denotando a aresta entre V e W
			this.ListaAdj.get(src).push(dest);
			this.ListaPes.get(src).push(peso);
			
			// Se o grafo for não-dirigido, o inverso também é verdadeiro.
			if (dirc == true){
				this.ListaAdj.get(dest).push(src);
				this.ListaPes.get(dest).push(peso);
			} else {
				this.ehDirecionado = true; //servindo como catch de erro pro prim
			}
		} else {
			throw Error('Loop detectado...');
		}
		
	}
	
	//printa os vétices e a lista adjacente
	printGrafo(){
		//pega todos os vértices
		var get_keys = this.ListaAdj.keys();
		
		//iteração entre os vértices
		for (var i of get_keys){
			var get_valores = this.ListaAdj.get(i);
			var get_pesos = this.ListaPes.get(i);
			var conc = "";
			var pes = "";
			
			for (var j of get_valores){
				conc += j + " ";
			}
			for (var j of get_pesos){
				pes += j + " ";
			}
			console.log(i + " -> " + conc);
			console.log(i + " => " + pes)
		}
	}
	
	//busca em largura
	bfs(verticeInicial){
		//criar um objeto de vértices visitados
		//ele iniciará vazio por razões óbvias
		
		var visitado = {};
		
		//isso daqui vai ser como retorno da bfs no grafo
		//ele vai possuir o vértice e o valor dele na bfs
		var bfsNum = [];
		
		//criar um objeto para a fila
		var fila = new Queue();
		
		//adicionar o vértice inicial à lista
		visitado[verticeInicial] = true;
		fila.enqueue(verticeInicial);
		
		//inicializando o valor da bfs e o valor inicial no retorno
		var j = 1;
		//var pushes = 0;
		bfsNum.push([verticeInicial, 0])
		
		
		//loop até que a fila esteja vazia
		while (!fila.isEmpty()){
			
			//pega o elemento da fila
			var getElementoFila = fila.dequeue();
			
			//passando o vértice atual para o console
			//console.log(getElementoFila);
			
			//pega a lista adjacente do vértice atual
			var getLista = this.ListaAdj.get(getElementoFila);
			
			//loop na lista e adiciona o elemento na fila
			//se não foi processado ainda
			for (var size in getLista) {
				var elem = getLista[size];
				
				if (!visitado[elem]){
					visitado[elem] = true;
					bfsNum.push([elem, bfsNum[j-1][1]+1])
					fila.enqueue(elem);
				} 
			}
			j++;
		}
		
		return bfsNum;
		
	}
	
	//conexidade
	ehConexo(verticeInicial){
		var arvore = this.bfs(verticeInicial);
		
		if (arvore.length == this.numVertices){
			return true;
		} else { return false }
	}
	
	//busca em largura com backtracking
	dfs(verticeInicial){
	 
		var visitado = {};
	 	
	 	var dfsNum = [];
	 	
	 	//size é o "tamanho" do caminho;
	 	var size = 1;
		dfsNum.push([verticeInicial, 0])
	 	
		this.DFSTool(verticeInicial, visitado, dfsNum, size);
		
		//this.DFSFix(dfsNum);
		
		return dfsNum; //isso é uma matriz
	}
	 
	// Função recursiva que processa todos os vértices adjacentes
	DFSTool(vert, visitado, dfsNum, size){
		visitado[vert] = true;
		//console.log(vert);
	 	
	 	//pega os vértices adjacentes
		var getVizinhos = this.ListaAdj.get(vert);
	 
		for (var i in getVizinhos) {
			//esse lastSize é para resetar o size
			var lastSize = size;
		    var elemento = getVizinhos[i];
		    if (!visitado[elemento]) {
		    	dfsNum.push([elemento, dfsNum[size-1][1]+1])
		    	size++;
		        this.DFSTool(elemento, visitado, dfsNum, size);
		        size = lastSize;
		    } else {
		    	//caso ache um caminho menor no backtracking, volte
		    	for (var i = 0; i < dfsNum.length; i++){
					if (elemento == dfsNum[i][0] && size < dfsNum[i][1]){
						//console.log("OK! | "+elemento+" | "+size+" | "+dfsNum[i]);
						dfsNum[i] = [elemento, dfsNum[size-1][1]+1];
						size++;
						this.DFSTool(elemento, visitado, dfsNum, size);
						size = lastSize;
					}
				}
		    }
		}
	}
	
	//menor caminho
	menorCaminho(verticeInicial, verticeFinal){ //g.menorCaminho('A', 'F');
		//receber função com destino e inicio;
		
		var distanciaPrimeiro = this.dfs(verticeInicial);
		
		for(var nome = '', i = 0; nome != verticeFinal; i++){
			nome = distanciaPrimeiro[i][0];
			if (nome == verticeFinal){
				var finalPos = i;
			}
		}
		
		var visitado = {};
		
		//verificar os valores da dfs se por acaso uma estiver maior ou igual ao valor do destino, zerar o numero de caminhos
		var distMax = distanciaPrimeiro[finalPos][1];
		for (var  i = 0; i < distanciaPrimeiro.length; i++){
			if (distanciaPrimeiro[i][1] >= distMax && distanciaPrimeiro[i][0] != verticeFinal){
				distanciaPrimeiro[i][1] = 0; //Aqui vai pegar acima distancia maxima
				console.log(distanciaPrimeiro[i]);
				visitado[distanciaPrimeiro[i][0]] = true;
			}
		}
		
		console.log();
		
		
		var fila = new Queue();
		var caminhoU = [[verticeFinal, 1]];
		var j = 1;
		fila.enqueue(verticeFinal);
		visitado[verticeFinal] = true;
		console.log(visitado);
		
		while (!fila.isEmpty()){
			
			//pega o elemento da fila
			var getElementoFila = fila.dequeue();
			
			//passando o vértice atual para o console
			console.log(getElementoFila);
			
			//pega a lista adjacente do vértice atual
			var getLista = this.ListaAdj.get(getElementoFila);
			
			//loop na lista e adiciona o elemento na fila
			//se não foi processado ainda
			for (var size in getLista) {
				var elem = getLista[size];
				
				if (!visitado[elem]){
					visitado[elem] = true;
					caminhoU.push([elem, this.somaCaminho(caminhoU, elem, j)])
					console.log(caminhoU[size]);
					fila.enqueue(elem);
				} 
			}
			j++;
		}
		
		//criar um array de numero de caminhos;
		
		
		
		/*for (var  i = 0; i < distanciaPrimeiro.length; i++){
			if (distanciaPrimeiro[i][1] >= valorMaximo) {
				//zerar o valor dele no array de caminhos
			}
		}*/

		//verificar a distância
		//adicionar adjacentes a lista com uma distância menor
		//
	}
	
	
	somaCaminho(caminhoU, elem, j){
			var soma = 0;
			var getLista = this.ListaAdj.get(elem);
			for (var size in getLista) {
				var elementos = getLista[size];
				for (var i = 0; i < caminhoU.length; i++){
					if (caminhoU[i][0] == elementos){
						soma = soma + caminhoU[i][1];
					}
				}
			}
			return soma;
		}
	
	//prim
	prim(verticeInicial){
		if (this.ehDirecionado) {
			throw new Error('Algoritmo de Prim só funciona em grafos não direcionados...');
		}

		if (!this.ehConexo(verticeInicial)){
	  		 new Error('Algoritmo de Prim só funciona em grafos conexos...');
	  	}
	  	
		const fila = new PriorityQueue();
		const visitado = {};

	 	//visitado[verticeInicial] = true;
		//fila.enqueue(verticeInicial);

	  	var primNum = [];
	  	
	  	primNum = [];
	  	
	  	var i = 0;
	  	fila.enqueue(verticeInicial, 0);
	  	
	  	while (!fila.isEmpty()){
			
			//pega o elemento da fila
			var getProcessoFila = fila.dequeue().element;
			var getElementoFila = getProcessoFila[0];
			var getAnteriorFila = getProcessoFila[1];
			if (!getAnteriorFila) getAnteriorFila = "Inicial";
			if (!visitado[getElementoFila]){
				visitado[getElementoFila] = true;
				
				primNum.push([[getElementoFila, getAnteriorFila], i]);
			
				//pega a lista adjacente do vértice atual
				var getLista = this.ListaAdj.get(getElementoFila);
				var getPeso = this.ListaPes.get(getElementoFila);
				
				//loop na lista e adiciona o elemento na fila
				//se não foi processado ainda
				for (var size in getLista) {
					var elem = getLista[size];
					var pesoElem = getPeso[size];
					
					if (!visitado[elem]){
						fila.enqueue([elem, getElementoFila], pesoElem);
						console.log([elem, getElementoFila], pesoElem);
					} 
				}
				i++;
			}
		}
				
		return primNum;
	}	
}

//--- DEBUG ---

// Using the above implemented graph class
var g = new Grafo();
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVert(vertices[i]);
}
 
// adding edges
g.addAresta('A', 'B', 1, true);
g.addAresta('A', 'D', 2, true);
g.addAresta('A', 'E', 3, true);
g.addAresta('B', 'C', 4, true);
g.addAresta('D', 'E', 5, true);
g.addAresta('E', 'F', 6, true);
g.addAresta('E', 'C', 7, true);
g.addAresta('C', 'F', 8, true);
g.addAresta('F', 'G', 9, true);
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGrafo();
console.log("\n-- BFS --\n");
bfs = g.bfs('A');
for (var i = 0; i < bfs.length; i++)
	console.log(bfs[i]);
console.log("\n-- DFS --\n");
dfs = g.dfs('A');
for (var i = 0; i < bfs.length; i++)
	console.log(dfs[i]);
console.log("\n-- CAMIHOS --\n");
g.menorCaminho('A', 'F');
console.log("\n-- CONEXIDADE --\n\nV: "+g.numVertices+" | É Conexo? "+g.ehConexo('A'));
console.log("\n-- PRIM --\n");
prim = g.prim('A');
for (var i = 0; i < prim.length; i++)
	console.log(prim[i]);