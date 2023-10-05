import React, { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Image style={styles.imgLogo} source={require('./img/logitech-logo-01.png')} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: 'lightgray' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/g305-02.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Logitech g305</Text>
            <Text style={styles.priceAd}>R$ 299,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 29,99</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#fff' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/headset-logitech.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Headset Gamer G PRO</Text>
            <Text style={styles.priceAd}>R$ 809,91</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 89,99</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#00b8fc' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/bud-1.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Fone de Ouvido ASTRO Gaming A03</Text>
            <Text style={styles.priceAd}>R$ 427,40</Text>
            <Text style={styles.portionAd}>ou 8x de R$ 56,24</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#e9c46a' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/c920-2.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Câmera Full HD Logitech C920</Text>
            <Text style={styles.priceAd}>R$ 404,10</Text>
            <Text style={styles.portionAd}>ou 8x de R$ 56,13</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#fff' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/mk470-6c_1.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Teclado e Mouse sem fio Logitech MK470</Text>
            <Text style={styles.priceAd}>R$ 301,41</Text>
            <Text style={styles.portionAd}>ou 6x de R$ 55,82</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#fff' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/logitech07.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Mouse Pad Desk Mat Logitech Studio Series</Text>
            <Text style={styles.priceAd}>INDISPONÍVEL</Text>
            <Text style={styles.portionAd}></Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
