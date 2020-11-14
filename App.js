import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>LOREM IPSUM</Text>
              <Text style={styles.sectionDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida, quam ut dapibus fringilla, odio ex fringilla massa, ac hendrerit velit tortor ut nibh. Vivamus tempor, neque sed tincidunt tristique, felis quam auctor tortor, blandit iaculis ex augue a nibh. Donec quis mauris fringilla, commodo magna ac, tempor ex. Proin eleifend, nisl sit amet egestas pretium, massa ex tempor dolor, ac porttitor eros tellus sit amet felis. Etiam sed pharetra nisi. Sed porttitor aliquet dolor sit amet venenatis. Duis hendrerit a nisl pulvinar lobortis. Duis eget risus dui. Aliquam sodales lobortis velit. Vivamus a velit pharetra, auctor nibh a, luctus libero. Nulla suscipit nibh luctus sapien porttitor, sit amet pulvinar ipsum ultrices. Nunc sed varius metus, et pretium felis. Pellentesque lectus eros, dapibus ut maximus at, scelerisque in metus. Nulla facilisi. Nam fermentum lacinia turpis ut fringilla. 
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>VESTIBULUM CONDIMENTUM</Text>
              <Text style={styles.sectionDescription}>
                Vestibulum condimentum lacinia nisl, laoreet vehicula turpis scelerisque in. Fusce ac elit eleifend, ultricies libero at, consectetur diam. Aenean malesuada ornare ligula. Sed efficitur vel ipsum a consequat. Curabitur sit amet tincidunt neque, et dignissim nisl. Donec nisi magna, iaculis eu mi nec, auctor dignissim metus. Nulla facilisi. Integer iaculis interdum orci id rutrum. Proin gravida ullamcorper lorem, vitae consectetur eros placerat ut. 
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>FUSCE CONVALLIS</Text>
              <Text style={styles.sectionDescription}>
                Fusce convallis ex sed sem lacinia pellentesque. Nullam efficitur neque nibh, id molestie justo convallis eget. Sed porttitor arcu eu viverra tincidunt. Nunc luctus urna vel augue facilisis, sit amet fringilla elit pharetra. Mauris malesuada varius erat nec auctor. Nulla eleifend mauris ullamcorper mi porttitor, nec feugiat ex rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent nibh ipsum, iaculis a metus vitae, commodo faucibus eros. 
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>DUIS IMPERDIET</Text>
              <Text style={styles.sectionDescription}>
              Duis imperdiet mi in nibh lacinia semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque dapibus odio lectus, ac suscipit dui iaculis sed. Mauris eget leo finibus, sollicitudin lorem fermentum, sollicitudin quam. Praesent consequat, eros ut porttitor lobortis, eros justo ullamcorper sapien, vitae ornare tellus dui a urna. Maecenas gravida elit sit amet elit efficitur, vitae faucibus leo suscipit. Nam vel venenatis arcu, ac mollis urna. Cras consectetur ligula magna. Vivamus quis odio in neque bibendum ultrices. In facilisis vitae velit ac tempor. Maecenas mauris velit, porta et lectus pharetra, tempus mollis dolor. 
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>NAM SED TORTOR LEO</Text>
              <Text style={styles.sectionDescription}>
                Nam sed tortor leo. Ut ac efficitur arcu. Fusce tortor erat, ultrices at nisi sed, vulputate ultricies orci. Fusce vehicula dapibus varius. Nullam bibendum nunc eu velit varius, ac sagittis diam dignissim. Proin a libero erat. Duis molestie venenatis lectus ut viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer dolor urna, mattis sed condimentum non, finibus quis neque. 
              </Text>
            </View>


          </View>
          <View style={styles.footer}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'BarlowCondensed-Bold'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
  },
  footer: {
    height: 64,
  }
});
