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

// Criando uma classe de Grafos
class Grafo {
	// definindo um vetor de vértices e lista adjacente
	constructor(numDeVert){
		this.numDeVert = numDeVert;
		this.ListaAdj = new Map();
		this.ListaPes = new Map();
	}
	
	
	
	// funções para serem implementadas
	
	//adiciona um vértice no grafo
	addVert(v){
		//inicializa a lista adjacente com um vetor nulo
		this.ListaAdj.set(v, []);
		this.ListaPes.set(v, []);
	}
	
	//addAresta(v, w, É dirigido?)
	//adiciona uma aresta no grafo
	addAresta(src, dest, peso, dirc){
	
		//pega a lista do vértice V (source, src) e põe o vértice W (destino, dest)
		//denotando a aresta entre V e W
		this.ListaAdj.get(src).push(dest);
		this.ListaPes.get(src).push(peso);
		
		// Se o grafo for não-dirigido, o inverso também é verdadeiro.
		if (dirc == true){
			this.ListaAdj.get(dest).push(src);
			this.ListaPes.get(dest).push(peso);
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
<<<<<<< HEAD
		//var pushes = 0;
=======
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
		bfsNum.push([verticeInicial, 0])
		
		
		//loop até que a fila esteja vazia
		while (!fila.isEmpty()){
			
			//pega o elemento da fila
			var getElementoFila = fila.dequeue();
			
			//passando o vértice atual para o console
			//console.log(getElementoFila + " | " + num[0]);
			
			//pega a lista adjacente do vértice atual
			var getLista = this.ListaAdj.get(getElementoFila);
			let verticeAnterior = null;
			//loop na lista e adiciona o elemento na fila
			//se não foi processado ainda
			for (var size in getLista) {
				var elem = getLista[size];
				
				if (!visitado[elem]){
					visitado[elem] = true;
<<<<<<< HEAD
					bfsNum.push([elem, bfsNum[j-1][1]+1])
=======
					bfsNum.push([elem, j])
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
					fila.enqueue(elem);
				} 
			}
<<<<<<< HEAD
=======
			
			//após verificar todos os adjacentes, antes de seguir para o próximo vértice
			//aumente o valor do caminho em 1
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
			j++;
		}
		
		return bfsNum;
		
	}
	
	//busca em largura com backtracking
	dfs(verticeInicial){
	 
		var visitado = {};
	 	
	 	var dfsNum = [];
	 	
	 	//size é o "tamanho" do caminho;
	 	var size = 1;
		dfsNum.push([verticeInicial, 0])
	 	
		this.DFSTool(verticeInicial, visitado, dfsNum, size);
		
<<<<<<< HEAD
		//this.DFSFix(dfsNum);
=======
		this.DFSFix(dfsNum);
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
		
		return dfsNum;
	}
	 
	// Função recursiva que processa todos os vértices adjacentes
	DFSTool(vert, visitado, dfsNum, size){
		visitado[vert] = true;
<<<<<<< HEAD
		console.log(vert);
=======
		//console.log(vert);
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
	 	
	 	//pega os vértices adjacentes
		var getVizinhos = this.ListaAdj.get(vert);
	 
		for (var i in getVizinhos) {
			//esse lastSize é para resetar o size
			var lastSize = size;
		    var elemento = getVizinhos[i];
		    if (!visitado[elemento]) {
<<<<<<< HEAD
		    	dfsNum.push([elemento, dfsNum[size-1][1]+1])
=======
		    	dfsNum.push([elemento, size])
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
		    	size++;
		        this.DFSTool(elemento, visitado, dfsNum, size);
		        size = lastSize;
		    } else {
		    	//caso ache um caminho menor no backtracking, volte
		    	for (var i = 0; i < dfsNum.length; i++){
					if (elemento == dfsNum[i][0] && size < dfsNum[i][1]){
<<<<<<< HEAD
						//console.log("OK! | "+elemento+" | "+size+" | "+dfsNum[i]);
						dfsNum[i] = [elemento, dfsNum[size-1][1]+1];
						size++;
						this.DFSTool(elemento, visitado, dfsNum, size);
						size = lastSize;
=======
						//console.log("OK!");
						dfsNum[i] = [elemento, size];
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
					}
				}
		    }
		}
	}
	
<<<<<<< HEAD
	//menor caminho
	menorCaminho(verticeInicial, verticeFinal){
		//receber função com destino e inicio;
		
		//criar um array de numero de caminhos;
		
		//verificar os valores da dfs se por acaso uma estiver maior ou igual ao valor do destino, zerar o numero de caminhos

		//verificar a distância
		//adicionar adjacentes a lista com uma distância menor
		//
=======
	// Função para arrumar o retorno da Busca em Largura com Backtracking
	DFSFix(dfsNum){
		var ultimo = -1;
		for (var i = 0; i < dfsNum.length; i++){
			if (ultimo < dfsNum[i][1])
				ultimo = dfsNum[i][1];
		}
		
		for (var i = 0; i < dfsNum.length; i++){
			dfsNum[i][1] = ultimo - dfsNum[i][1];
			//console.log(dfsNum[i]);
		}
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
	}
	
	//kruskal
	//prim
}

//--- DEBUG ---

// Using the above implemented graph class
var g = new Grafo(6);
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
<<<<<<< HEAD
for (var i = 0; i < bfs.length; i++)
	console.log(bfs[i]);
console.log("\n-- DFS --\n");
dfs = g.dfs('A');
for (var i = 0; i < bfs.length; i++)
	console.log(dfs[i]);
//console.log(dfs[4]);
=======
console.log(bfs[2]);
console.log("\n-- DFS --\n");
dfs = g.dfs('A');
console.log(dfs[4]);
>>>>>>> b862ffa2d533831c0e4504016d192c57bdfb5394
