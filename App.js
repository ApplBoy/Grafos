import  React, {useState, useEffect} from 'react';
import {ScrollView, Alert, View, Text, Image,TouchableOpacity, StyleSheet, ImageBackground, Modal, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import Markdown from './react-native-simple-markdown';
import Grafo  from './grafos.js';

const image = require('./componentes/grafo.jpg');
const g = new Grafo();






function HomeScreen({navigation}) {

 
  function Incrementar (props){
    return (
      <TouchableOpacity onPress={props.set} style={styles.botesIncremento}>
  <Text style={styles.textBotaoGeral}>+</Text>
  </TouchableOpacity>
    ); 
  }
  function Decrementar (props){
    if (props.contador>0){
      
      return(
        <TouchableOpacity  onPress={props.set} style={styles.botesIncremento}>
        <Text style={styles.textBotaoGeral}>-</Text>
        </TouchableOpacity>
      );
    }else{
      return(
        <TouchableOpacity   style={styles.botesIncremento}>
        <Text style={styles.textBotaoGeral}>-</Text>
        </TouchableOpacity>
      );
    }
  }
  useEffect(() => {
    BFS
    },[]);
  const [verticie, setverticie] = useState([]);
  const [BFSD, setBFSD] = useState([]);
  const [BFS, setBFS] = useState([]);
  const [viewmenorCaminho, setviewmenorCaminho] = useState([]);
  const [viewPrim, setviewPrim] = useState([]);
  const [modalPrim,setPrim] = useState(false);
  const [menorCaminho,setmenorCaminho] = useState(false);
  const [modal,setModal] = useState(false);
  const [segundamodal,setModal2] = useState(false);
  const [modalBFS,setModalBFS] = useState(false);
  const [modalBFSD,setModalBFSD] = useState(false);
  const [verticie1, setVerticie1] = useState('');
  const [verticie2, setVerticie2] = useState('');
  const [peso, setpeso] = useState(0);
  const [addverticie, setAddVerticie] = useState('');
  let key = 0;
  let nova;

function AddVerticie(){ 
    
  var exist=false;
  for (var i = 0; i < verticie.length; i++){
 if (verticie[i].nome == addverticie){
  exist = true;
 }
}
if(!exist){
  let key = 0;
  if(verticie.length > 0){
    key = verticie[verticie.length-1].key + 1;
  }

  let verticienovo = {nome:addverticie,key:key};
  setModal(!modal);
  g.addVert(addverticie);
  setverticie([...verticie, verticienovo]);

}else{
  alert('vérticie já exitente')
}
  }
  

  function AddAresta(){
    if(verticie.length>0){
      
      setModal2(!segundamodal);
      g.addAresta(verticie1, verticie2, peso, true);
     
    }else{
      alert('São necessários no minímo dois verticies para que possa inserir uma aresta')
    }
  }
  function apagar(){
    setverticie([]);
    delete g.ListaAdj;
    delete g.ListaPes;
    g.ListaAdj = new Map();
    g.ListaPes = new Map();
    g.numVertices=0;
    
  }

  
  
  const zerar= ()=>{
    setBFS([]);
  }

function FBFS(props){
  var bfs2 = g.bfs(addverticie);
  
  key = 0;
  if(BFS.length > 0){
    key = BFS[BFS.length-1].key + 1;
  }
  nova = {nome:bfs2[props][0] +bfs2[props][1],key:key};

  setBFS([...BFS, nova]);
  
}

function FBFSD(){
    
  if(verticie.length>0){

var dfs = g.dfs(addverticie);
for (var i = 0; i < dfs.length; i++){

  alert(dfs[i]);
  console.log(dfs[i]);
}
}else{
  alert('Adicione vérticies primeiro')
}

  }
  function MenorCaminho(){
    if(verticie.length>1){
var menor = g.menorCaminho(verticie1, verticie2);

for (var i = 0; i < menor.length; i++){
  alert(menor[i]);
  console.log(menor[i]);
}
}else{
  alert('Adicione vérticies primeiro')
}

  }

function Prim(){
  if(verticie.length>1){
    const prim = g.prim(addverticie);
    
    for (var i = 0; i < prim.length; i++){
      alert(prim[i]);
      console.log(prim[i][0]);
    }
    }else{
      alert('Adicione vérticies primeiro')
    }
  
}

  function verticielenght(){
   alert(verticie.length) 
   for (var i = 0; i < verticie.length; i++){
    alert(verticie[i].nome)
    }
    g.printGrafo();
  }
  return (
    
    <View style={styles.container}>
      
       <Modal
  animationType="slide"
  transparent={true}
  visible={modal}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <TextInput onChangeText={text=>setAddVerticie(text)} placeholder="Nome do Verticie" style={styles.textinput}  autoFocus={true}></TextInput>
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setModal(!modal)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => AddVerticie()}
        
        >
        <Text style={styles.textStyle}>Adicionar vérticie</Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>
<Modal
  animationType="slide"
  transparent={true}
  visible={segundamodal}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TextInput onChangeText={text => setVerticie1(text)} placeholder="Aresta de ..." style={styles.textinput}  autoFocus={true}></TextInput>
      <TextInput onChangeText={text => setVerticie2(text)} placeholder="para ..."style={styles.textinput}  autoFocus={true}></TextInput>
      <View style={{flexDirection:'row', bottom:15}}>
 <Text style={styles.textoSimples}>Peso</Text>
  
<Incrementar  set={()=>setpeso(peso + 1) } />
  <Text style={{marginTop:5, fontSize:20, color:'#494c4d'}}>{peso}</Text>

<Decrementar contador={peso} set={()=>setpeso(peso - 1) }/>
    </View>
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setModal2(!segundamodal)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => AddAresta()}
        
        >
        <Text style={styles.textStyle}>Adicionar Aresta</Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>
<Modal
  animationType="slide"
  transparent={true}
  visible={modalBFS}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <TextInput onChangeText={text=>setAddVerticie(text)} placeholder="Nome do verticie inicial" style={styles.textinput}  autoFocus={true}></TextInput>
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setModalBFS(!modalBFS)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => {
         
          var bfs2 = g.bfs(addverticie);
          for (var i = 0; i < bfs2.length; i++){
            FBFS(i);
          }
        
        }}
        
        >
        <Text style={styles.textStyle}>   Pesquisar   </Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>
<Modal
  animationType="slide"
  transparent={true}
  visible={modalBFSD}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <TextInput onChangeText={text=>setAddVerticie(text)} placeholder="Nome do verticie inicial" style={styles.textinput}  autoFocus={true}></TextInput>
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setModalBFSD(!modalBFSD)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => FBFSD()}
        
        >
        <Text style={styles.textStyle}>   Pesquisar   </Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>

<Modal
  animationType="slide"
  transparent={true}
  visible={menorCaminho}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TextInput onChangeText={text => setVerticie1(text)} placeholder="Vérticie inicial" style={styles.textinput}  autoFocus={true}></TextInput>
      <TextInput onChangeText={text => setVerticie2(text)} placeholder="Vérticie final"style={styles.textinput}  autoFocus={true}></TextInput>
      
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setmenorCaminho(!menorCaminho)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => MenorCaminho()}
        
        >
        <Text style={styles.textStyle}>   Encontrar   </Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>

<Modal
  animationType="slide"
  transparent={true}
  visible={modalPrim}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <TextInput onChangeText={text=>setAddVerticie(text)} placeholder="Nome do verticie inicial" style={styles.textinput}  autoFocus={true}></TextInput>
    <View style={{flexDirection:'row', alignContent: 'space-around'}}>

      <TouchableHighlight
       style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
       onPress={() =>setPrim(!modalPrim)}>
<Text style={styles.textStyle}>    Cancelar    </Text>
                              
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.openButton,marginLeft:5,  backgroundColor: "#2196F3" }}
        onPress={() => Prim()}
        
        >
        <Text style={styles.textStyle}>   Encontrar   </Text>
      </TouchableHighlight>
          </View>
    </View>
  </View>
</Modal>
    <StatusBar hidden />
   <ImageBackground source={image} style={{...styles.image, flexDirection:'row'}}>
   <Ionicons style={{marginLeft:5, marginTop:8, marginRight:10, marginRight:20}}  name="logo-javascript" size={40} color={'#494c4d'} />

   <Text style={styles.titleText}>Teoria dos Grafos</Text>
   </ImageBackground>
   <View style={{flexDirection:'row', width:'100%'}}>

<View style={{flex:1, backgroundColor:'#494c4d', width:'50%'}}> 
   <TouchableOpacity style={{...styles.botaoVerticie, marginTop:'15%', 
}} onPress={()=>setModal(!modal)}>
<Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>Adicionar verticie</Text> 
   </TouchableOpacity>
   <TouchableOpacity style={styles.botaoVerticie} onPress={()=>setModal2(!segundamodal)}>
   <Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="git-merge-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>Inserir Aresta</Text> 
</TouchableOpacity>
    <TouchableOpacity style={{...styles.botaoVerticie}} onPress={()=>[setModalBFS(!modalBFS), zerar()]}>
<Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>BFS</Text> 
   </TouchableOpacity>
  </View>
  <View style={{flex:1, backgroundColor:'#494c4d', width:'50%'}}>
  <TouchableOpacity style={{...styles.botaoVerticie, marginTop:'15%'}} onPress={()=>setModalBFSD(!modalBFSD)}>
<Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>BFSD</Text> 
   </TouchableOpacity>
    <TouchableOpacity style={{...styles.botaoVerticie,}} onPress={()=>setmenorCaminho(!menorCaminho)}>
<Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>Menor Caminho</Text> 
   </TouchableOpacity>
   <TouchableOpacity style={{...styles.botaoVerticie, }} onPress={()=>setPrim(!modalPrim)}>
<Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
    <Text style={{...styles.textoBotao, fontSize:15}}>Prim</Text> 
   </TouchableOpacity>
 
  </View>
  </View>

   
   <View style={styles.segundaView}>
    <View style={{...styles.segundaViewHeader}}>

  <TouchableOpacity  style={styles.debug} onPress={()=>verticielenght()}>
  <Ionicons style={{marginLeft:'20%', marginTop:8,  flex:1}}  name="construct-outline" size={20} color={'white'} />
  </TouchableOpacity>
     <Text style={{...styles.titleSegundo,marginTop:20, flex:2,marginLeft:'12%',marginRight:'12%', height:40}}>Grafo Atual</Text>
     <TouchableOpacity onPress={()=> apagar()}  style={{ marginTop:20, flex:1}} ><Ionicons name="trash" size={36} color={'rgb(26, 200, 219)'}/></TouchableOpacity>

    </View>
<View style ={{flex:1}}>

<ScrollView style={{height:20, alignSelf:'center', flex:1}}  horizontal={true} showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection:'row', alignSelf:'center', flex:1}}>

    {
      verticie.map(function(val){
        // apartir daqui temos a parte grafica
        // apartir de 22 nao fica mais visivel o texto
        
        return (
            <View style={{ width:'6%', marginTop:20, marginLeft:20, marginRight:20}} key={val.key}>
      



 <Text style={styles.EstiloGrafo}>{val.nome}</Text>

  
                
               

               
            </View>
          
          );
          
        })
        
        
      }
      </View>
      </ScrollView>





</View>
   </View>
 </View>
  );
}
function SobreScreen({navigation}) {
  const MarkdownContent = () => (
    <Markdown> # Relatório: Implementação de Grafos.{'\n\n'}
    ## Quais foram as dificuldades na criação de grafos em Expo?{'\n\n'}
    ##### Alunos: Eduardo Henrique Ferreira de Paula, Henderson Martins Barroso, Jaires Gomes de Sousa Filho, João Pedro Rocha Rezende, Saulo José de Lucas Silva{'\n\n'}
    ---{'\n\n'}
    
    ## Escolha da Linguagem{'\n\n'}
    
    Nosso grupo acadêmico decidiu escolher primeiramente a linguagem C como foco.{'\n\n'}
    
    Mas após algumas decisões, decidimos utilizar uma linguagem de programação incomum ao aprendizado aos iniciante da Universidade Federal de Jataí.{'\n\n'}
    
    E como boa parte dos nossos intrigantes possuem uma habilidade considerável com o JavaScript e o Expo (React-Native), decidimos utilizar as mesmas.{'\n\n'}
    
    Expo, que a mesma utiliza JavaScript, é uma linguagem de programação/marcação que permite uma maior compatibilidade com os dispositivos, permitindo tanto uso Web no Desktop, quanto com uso no iOS e Android.{'\n\n'}
    
    ## Criação do Grafo{'\n\n'}
    
    Nossas dificuldades começou com a linguagem em si, visto que mesmo tendo prática com a mesma, ainda tivemos que "desenferrujar-se" da falta de prática com a mesma.{'\n\n'}
    
    Enfim, o primeiro obstáculo para a criações de algorítimos em grafos, são os próprios grafos em si.{'\n\n'}
    
    Decidimos criar uma classe grafos e aplicarmos ela em uma variável no aplicativo, e adicionamos alguns métodos e objetos que seriam os vetores de Adjacência e, mais utilizado na frente, de Pesos.{'\n\n'}
    
    Depois, adicionamos os métodos de criação de vértices e arestas conectando dois vértices e a opção de deixar o grafo em dirigido ou não e com pesos.{'\n\n'}
    
    Em seguida, criamos o método de Printar o Grafo no console.log utilizado pelo JS. E ao mesmo tempo...{'\n\n'}
    
    ## Front-End do Aplicativo em Expo{'\n\n'}
    
    Uma parte de nosso grupo estava implementado a parte front-end do aplicativo, utilizando-se da praticidade e compatibilidade que o Expo trás aos usuários (e desenvolvedores).{'\n\n'}
    
    A nossa pergunta nessa parte seria: Como implantamos uma representação visual ao nosso aplicativo de Grafos?{'\n\n'}
    
    Bem, começamos com o de sempre, criamos um mockup do app, e fomos realizando algumas melhorias e adicionando conteúdo aos poucos enquanto programávamos o back-end do programa que o mesmo por enquanto o programa utilizava do terminal e console dos dispositivos.{'\n\n'}
    
    ## Busca em Largura{'\n\n'}
    
    Agora, ao grande prato principal do nosso código, os algoritmos.{'\n\n'}
    
    Começamos com o básico, Busca em Largura, para usar a busca em largura, precisamos de uma lista, então criamos uma classe Queue que servirá como a mesma, ela tem os métodos de adicionar, remover, ver o último da lista, etc...{'\n\n'}
    
    Após realizado a classe, aí que começamos a criar o método da Busca em Largura, nomeada no código como bfs(), esse método recebe o nome de um vértice inicial;{'\n\n'}
    
    Em seguida é criado um objeto de vértices visitados vazio, um vetor que servirá de retorno sobre os resultados, e a fila. Enfim, preparamos manualmente o vértice inicial no código, e utilizamos uma variável misteriosa chamada de j, ela serve como um ponteiro apontando para a posição do vértice na lista.{'\n\n'}
    
    Um dos maiores problemas foi arrumar o valor da distância do vértice inicial, após algumas horas realizando patches, chegamos à uma conclusão de que ao utilizar o ponteiro j, podemos acessar o valor do vértice mãe de um vértice adjacente, então decidimos pegar o valor da sua distância anterior, somar 1 e armazenar ele no nosso vetor de retorno.{'\n\n'}
    
    Uma solução não muito suave para o nosso problema, mas que resolveu o erro de lógica dessa função.{'\n\n'}
    
    ## Conexividade{'\n\n'}
    
    Admito, roubei um pouco nesse objetivo, criei o método ehConexo() que simplesmente recebe o nome de um vértice, realiza o algoritmo da bfs() e pega o tamanho de elementos advinda desse método, em seguida compara ele com a quantidade de vértices, se for diferente, não é conexo.{'\n\n'}
    
    ## Busca em Largura com Backtracking{'\n\n'}
    
    Semelhante ao bfs(), este método recebe um vértice inicial, cria um objeto de elementos visitados nulo, um vetor de retorno dos dados, e agora, ao invés da famosa variável j, substituímos pela outra variável utilizada no método anterior: size;{'\n\n'}
    
    Um fato muito enfático desse método é que se utiliza as temidas recursividades, por mais que sejam danosas, a linguagem realmente permitiu uma tão desejada facilidade de implementação.{'\n\n'}
    
    Alguns erros de lógica e de dados depois, chegamos a conclusão que a função abandonava totalmente a verificação recursiva de alguns vértices, uma análise mais fundo, percebemos que ela não tava repetindo a verificação em vértices com um caminho menor após entrarem em um caminho mais extenso por meio da recursividade, isso ocorria pois a vértice já fora marcada como visitado.{'\n\n'}
    
    Nosso patch para resolver esse pequeno delito foi criar verificação caso encontre um vértice já marcado, caso o seu valor da distância em relação ao início é maior com o do atualmente calculado, os dados são alterados para incluir esse caminho menor e é realizada a recursividade novamente nesse vértice, alterando em seguida os valores dos outros vértices por esse caminho menor.{'\n\n'}
    
    ## Caminho Menor{'\n\n'}
    
    Aqui em diante a curva de dificuldade aumenta exponencialmente, este método ele é diferente aos outros supracitados, pois ele começa recebendo dois vértices que logo serão ambos utilizados.{'\n\n'}
    
    A primeira execução desse caminho é realizar um dfs(), ou seja, uma Busca em Largura com Backtracking no verticeInicial, e aplicar a matriz resultante da dfs() numa variável, isso foi feito com a finalidade de examinar quais vértices estão mais distantes ou que possuem uma mesma distância que o verticeFinal em relação ao verticeInicial.{'\n\n'}
    
    Maior dificuldade desse método começa a aparecer por aqui, elas incluem, mas não se limitam a: Recontando os vértices adjacentes ao verticeInicial mais de uma vez, Não marcando todos os caminhos realizados e Marcando exatamente duas vezes o verticeFinal;{'\n\n'}
    
    Após zerar o valor do caminho desses pontos e remover a marcação deles no caminho, fizemos um sistema parecido com a estrutura da bfs(), mas começando do verticeFinal até o verticeInicial, onde ele realiza uma soma do caminho filtrado até o verticeInicial com o somaCaminho(){'\n\n'}
    
    Após alguns minutos de fixes e patches, o programa estava rodando como o testado e esperado, mas por ser uma implementação ainda recente, bugs podem ocorrer com mais frequência do que os outros métodos.{'\n\n'}
    
    ## Algoritmo de Prim{'\n\n'}
    
    Agora para o método de nossa escolha, com a maior dificuldade de todos os métodos anteriores, esse algoritmo foi reescrito totalmente por nós aproximadamente 4 vezes, até conseguirmos um resultados satisfatórios com o método.{'\n\n'}
    
    Primeiramente, devemos criar algumas dependências rápidas do Prim, criamos a lista dinâmica ''com prioridade'' que está presente na classe PriorityQueue, que a mesma utiliza uma outra classe QElement, a prioridade dessa lista que vai ser utilizada é os pesos das arestas.{'\n\n'}
    
    O nosso método então realiza uma estrutura semelhante ao bsf(), ele marca e salva em uma matriz que servirá de retorno após a finalização, e depois disso insere os vértices adjacentes na lista com prioridade que filtra os menores pesos para serem executados primeiro.{'\n\n'}
    
    Definitivamente o maior desafio de todo o projeto foi implementar esse algoritmo, pois nas 3 tentativas de implementação nenhuma seguia o caminho correto ou a lógica possuía algum pequeno erro de compreensão e interpretação.
    
    Mas após algumas horas e uma noite inteira, conseguimos implementar o algoritmo de forma concreta e com resultados satisfatórios.{'\n\n'}
    
    ---{'\n\n'}
    
    Enfim, foi um bom projeto para se realizar, mesmo que custasse bastante do nosso foco, readquirimos algumas de nossas habilidade com Expo e JavaScript, além de compreendermos melhor as funções dentro do Back-end e Front-end de um aplicativo Web e Android.{'\n\n'}
    
    
     </Markdown>

  );
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
      <ScrollView style={{marginLeft:'5%', marginRight:'5%'}}>
            <MarkdownContent />
        </ScrollView>
    </View>
  );
}
function MenuScreen({navigation}) {
  const imageEdu = require('./componentes/Edu.png');
  const imageSaulo= require('./componentes/Saulo.png');
  const imagejao= require('./componentes/jao.png');
  const imagejaires= require('./componentes/jaires.png');
  const imageHenderson= require('./componentes/henderson.png');
  const imageBack= require('./componentes/banana.jpg');
  return (
    <View >
      <ImageBackground source={imageBack} style={{...styles.image, height:'100%'}}>
   
    <Image source={imageEdu} style={styles.ImageCreditos}></Image>
    <Text style={{...styles.textoBotao, marginTop:0}}>Eduardo</Text>
    <Image source={imageSaulo} style={styles.ImageCreditos}></Image>
    <Text style={{...styles.textoBotao, marginTop:0}}>Saulo</Text>
    <Image source={imagejao} style={styles.ImageCreditos}></Image>
    <Text style={{...styles.textoBotao, marginTop:0}}>João Pedro</Text>
    <Image source={imagejaires} style={styles.ImageCreditos}></Image>
    <Text style={{...styles.textoBotao, marginTop:0}}>Jaires</Text>
    <Image source={imageHenderson} style={styles.ImageCreditos}></Image>
    <Text style={{...styles.textoBotao, marginTop:0}}>Henderson</Text>
   </ImageBackground>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Readme') {
              iconName = focused
                ? 'ios-book'
                : 'ios-book-outline';
            }else if(route.name === 'Creditos'){
              iconName = focused
              ? 'ios-card'
              : 'ios-card-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgb(26, 200, 219)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home"  component={HomeScreen} options={{headerShown:false  }}/>
        <Tab.Screen name="Readme" component={SobreScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Creditos" component={MenuScreen} options={{headerTitleAlign:'center', headerTintColor:'rgb(26, 200, 219)'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  EstiloGrafo:{
    textAlign:'center',width:30, height:30, fontSize:20, borderRadius:100, borderColor:'black', borderWidth:2,
    marginLeft:10
  },
  debug:{
    flexDirection:'row',
    backgroundColor:'rgb(26, 200, 219)',
    paddingBottom:10,
    marginTop:20,
    borderRadius:100,
    width:'10%',
    height:40,
    borderWidth:2,
    borderColor:'white',
    marginLeft:'5%',
    marginRight:'5%'
  },
  textBotaoGeral:{
    marginTop:3,
    textAlign:'center', 
    color:'white',
    fontWeight:'bold', 
    fontSize:15,
   },
  textoSimples:{
    color:'#494c4d',
textAlign:'center',
    fontSize:25,
   },
  textinput:{
    
borderBottomWidth:2,
borderBottomColor:'rgb(26, 200, 219)',
bottom:'20%',
height:50,
fontSize:20
  },
  ImageCreditos:{
    marginTop:10,
    width:100,
    height: 100,
    resizeMode: "cover",
    borderRadius:200,
    borderColor:'white',
    borderWidth:2,
    
  },
  segundaViewHeader:{
  flexDirection:'row',
 
  },
  segundaView:{
    marginTop:'10%',
  flex:2,
  backgroundColor:'white',
  borderTopEndRadius:30,
  borderTopStartRadius:30,
width:'100%'
  },
  titleText: {
    textAlign:'center',
    color:'#494c4d',
    fontSize:40,
    marginTop:5,
    fontWeight: "bold",
  },
  titleSegundo: {
    textAlign:'center',
    color:'#b0aa9d',
    fontSize:30,
    marginTop:5,
    fontWeight: "bold",
  },
  image: {
    justifyContent: 'center' ,
    alignItems:'center',
    width:'100%',
    height: 80,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    backgroundColor: '#494c4d',
   
  },
  botaoVerticie:{
    flexDirection:'row',
backgroundColor:'rgb(26, 200, 219)',
paddingBottom:10,
marginTop:10,
marginLeft:'5%',
marginRight:'5%',
borderRadius:10,
width:'90%',
height:40,
borderWidth:2,
borderColor:'white',

  },
  textoBotao:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
    fontSize:25,
    
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }, botesIncremento:{
    marginTop:5,
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:'rgb(26, 200, 219)',
    marginRight:15,
    marginLeft:15,
   },
});

export default App;