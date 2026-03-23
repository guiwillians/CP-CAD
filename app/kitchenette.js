import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CantinaScreen() {
  const router = useRouter();
  
  // Estado para gerenciar o carrinho (Aula 04)
  const [carrinho, setCarrinho] = useState(0);
  const [mensagem, setMensagem] = useState('Seu carrinho está vazio.');

  // Efeito que reage quando o carrinho muda (Aula 04)
  useEffect(() => {
    if (carrinho > 0) {
      setMensagem('Item adicionado! Evite filas retirando no balcão expresso.');
    } else {
      setMensagem('Seu carrinho está vazio.');
    }
  }, [carrinho]);

  const adicionarItem = () => {
    setCarrinho(carrinho + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>kitchenette</Text>
      <Text style={styles.descricao}>{mensagem}</Text>

      <View style={styles.statusBox}>
        <Text style={styles.statusTexto}>Total de Itens: {carrinho}</Text>
      </View>

      {/* Item 1 - Usando Flexbox row (Aula 03 e 05) */}
      <View style={styles.itemCard}>
        <View>
          <Text style={styles.itemNome}>Salgado Assado</Text>
          <Text style={styles.itemPreco}>R$ 8,00</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={adicionarItem}>
          <Text style={styles.btnTextAdd}>+ ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Item 2 */}
      <View style={styles.itemCard}>
        <View>
          <Text style={styles.itemNome}>Refrigerante Lata</Text>
          <Text style={styles.itemPreco}>R$ 6,00</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={adicionarItem}>
          <Text style={styles.btnTextAdd}>+ ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Item 3 */}
      <View style={styles.itemCard}>
        <View>
          <Text style={styles.itemNome}>Pão de Queijo</Text>
          <Text style={styles.itemPreco}>R$ 5,00</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={adicionarItem}>
          <Text style={styles.btnTextAdd}>+ ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para voltar (Aula 05) */}
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
        <Text style={styles.btnTextVoltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 60 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#E83D84', marginBottom: 10 },
  descricao: { fontSize: 16, color: '#555', marginBottom: 20 },
  statusBox: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 20,
    alignItems: 'center' 
  },
  statusTexto: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  
  // Layout do card com Flexbox
  itemCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row', // Alinha os filhos lado a lado
    justifyContent: 'space-between', // Separa o texto do botão
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemNome: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  itemPreco: { fontSize: 16, color: '#E83D84', marginTop: 4 },
  
  btnAdd: { backgroundColor: '#E83D84', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  btnTextAdd: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  
  btnVoltar: { marginTop: 'auto', padding: 15, alignItems: 'center' },
  btnTextVoltar: { color: '#E83D84', fontSize: 16, fontWeight: 'bold' }
});