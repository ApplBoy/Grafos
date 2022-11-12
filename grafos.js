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
	}
	
	
	
	// funções para serem implementadas
	
	//adiciona um vértice no grafo
	addVert(v){
		//inicializa a lista adjacente com um vetor nulo
		this.ListaAdj.set(v, []);
	}
	
	//addAresta(v, w, É dirigido?)
	//adiciona uma aresta no grafo
	addAresta(src, dest, dirc){
	
		//pega a lista do vértice V (source, src) e põe o vértice W (destino, dest)
		//denotando a aresta entre V e W
		this.ListaAdj.get(src).push(dest);
		
		// Se o grafo for não-dirigido, o inverso também é verdadeiro.
		if (dirc == true){
			this.ListaAdj.get(dest).push(src);
		}
		
	}
	
	//printa os vétices e a lista adjacente
	printGrafo(){
		//pega todos os vértices
		var get_keys = this.ListaAdj.keys();
		
		//iteração entre os vértices
		for (var i of get_keys){
			var get_valores = this.ListaAdj.get(i);
			var conc = "";
			
			for (var j of get_valores){
				conc += j + " ";
			}
			console.log(i + " -> " + conc);
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
		bfsNum.push([verticeInicial, 0])
		
		
		//loop até que a fila esteja vazia
		while (!fila.isEmpty()){
			//pega o elemento da fila
			var getElementoFila = fila.dequeue();
			
			//passando o vértice atual para o console
			//console.log(getElementoFila + " | " + num[0]);
			
			//pega a lista adjacente do vértice atual
			var getLista = this.ListaAdj.get(getElementoFila);
			
			//loop na lista e adiciona o elemento na fila
			//se não foi processado ainda
			for (var i in getLista) {
				var elem = getLista[i];
				
				if (!visitado[elem]){
					visitado[elem] = true;
					bfsNum.push([elem, j])
					fila.enqueue(elem);
				}
			}
			
			//após verificar todos os adjacentes, antes de seguir para o próximo vértice
			//aumente o valor do caminho em 1
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
		
		this.DFSFix(dfsNum);
		
		return dfsNum;
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
		    	dfsNum.push([elemento, size])
		    	size++;
		        this.DFSTool(elemento, visitado, dfsNum, size);
		        size = lastSize;
		    } else {
		    	//caso ache um caminho menor no backtracking, volte
		    	for (var i = 0; i < dfsNum.length; i++){
					if (elemento == dfsNum[i][0] && size < dfsNum[i][1]){
						//console.log("OK!");
						dfsNum[i] = [elemento, size];
					}
				}
		    }
		}
	}
	
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
	}
	
	//kruskal
	//prim
}

//--- DEBUG ---

// Using the above implemented graph class
var g = new Grafo(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVert(vertices[i]);
}
 
// adding edges
g.addAresta('A', 'B');
g.addAresta('A', 'D');
g.addAresta('A', 'E');
g.addAresta('B', 'C');
g.addAresta('D', 'E');
g.addAresta('E', 'F');
g.addAresta('E', 'C');
g.addAresta('C', 'F');
 
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
console.log(bfs[2]);
console.log("\n-- DFS --\n");
dfs = g.dfs('A');
console.log(dfs[4]);