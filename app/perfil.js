import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();

  // Objeto simulando os dados, como ensinado no Exercício Prático
  const usuario = {
     nome: "Guilherme",
     curso: "Ciência da Computação",
     local: "Santo André, SP",
     avatar: "https://ui-avatars.com/api/?name=Guilherme&background=E83D84&color=fff&size=200"
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: usuario.avatar }} 
        style={styles.avatar} 
      />
      <Text style={styles.titulo}>{usuario.nome}</Text>
      <Text style={styles.descricao}>{usuario.curso}</Text>
      <Text style={styles.descricao}>{usuario.local}</Text>

      {/* Flexbox alterado para 'row', conforme ensinado na Aula 04 */}
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 30, marginTop: 10 }}>
         <View style={{ width: 60, height: 60, backgroundColor: '#333', borderRadius: 8 }} />
         <View style={{ width: 60, height: 60, backgroundColor: '#E83D84', borderRadius: 8 }} />
         <View style={{ width: 60, height: 60, backgroundColor: '#333', borderRadius: 8 }} />
      </View>

      {/* Navegação voltando para a tela anterior com router.back() (Aula 05) */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#E83D84', marginBottom: 16 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  descricao: { fontSize: 16, color: '#555', marginBottom: 4 },
  voltar: { fontSize: 16, color: '#E83D84', fontWeight: 'bold', padding: 10 }
});