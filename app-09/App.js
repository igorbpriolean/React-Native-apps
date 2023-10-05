import React, { useState } from 'react';
import {View, FlatList, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { styles } from './styles';

export default function App() {
  const [feed] = useState([
    {
      id: 1,
      vaga: 'Engenheiro de Software Senior',
      empresa: 'Spotify',
      salario: 'R$ 20.000,00',
      descricao: 'Venha trabalhar conosco na equipe do Spotify.',
      contato: 'https://www.lifeatspotify.com/jobs',
      colorBg: '#3f8f00',
    },
    {
      id: 2,
      vaga: 'Designer UX/UI',
      empresa: 'Twitch',
      salario: 'R$ 3.500,00',
      descricao: 'Profissional responsável por projetar a experiência do usuário (UX) e a interface do usuário (UI) de um produto digital.',
      contato: 'https://www.twitch.tv/jobs/pt-br/',
      colorBg: 'purple',
    },
    {
      id: 3,
      vaga: 'Dev. Back-end Júnior',
      empresa: 'Uber',
      salario: 'R$ 2.750,00',
      descricao: 'O desenvolvedor back-end deve ser capaz de gerenciar recursos de APIs que funcionam em vários dispositivos e devem ter a habilidade de implementar algoritmos e resolver problemas relacionados ao sistema.',
      contato: 'https://www.uber.com/pt-BR/blog/careers/',
      colorBg: 'gray',
    },
  ]);

  const Vagas = ({ data }) => {
    const handlePress = () => {
      Linking.openURL(data.contato);
    };
    return (
      <View style={styles.divVaga}>
        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Vaga</Text>
          <Text style={styles.textLabel}>{data.vaga}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Empresa</Text>
          <Text style={styles.textLabel}>{data.empresa}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Salario</Text>
          <Text style={styles.textLabel}>{data.salario}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Descrição</Text>
          <Text style={styles.descLabel}>{data.descricao}</Text>
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: (data.colorBg) }]} onPress={handlePress}>
          <Text style={styles.buttonText}>Tenho Interesse</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.vTitlePage}>
        <Text style={styles.titlePage}>Vagas</Text>
      </View>
      <ScrollView style={styles.sv}>
        <FlatList
          data={feed}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Vagas data={item} />}
        />
      </ScrollView>
    </View>
  );
}
