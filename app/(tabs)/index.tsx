import React, { useState } from 'react';
import { Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMedal ,faVideo,faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [profession, setProfession] = useState('Enter Your Profession');
  const [goal, setGoal] = useState('Enter Your Goal');
  const [city, setCity] = useState('Enter Your City');
  const [getCity, setGcity] = useState(false);
  const [getGoal, setGgoal] = useState(false);
  const [getProfession, setGprofession] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted with:', { name, number, profession, goal, city });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ImageBackground
          source={{ uri: 'https://i.pinimg.com/1200x/ec/c1/51/ecc151c1f38ca8571a43f14bcfcaf3ce.jpg' }}
          style={styles.headerimage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Personal Online Makeup Course</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <FontAwesomeIcon icon={faMedal} style={styles.icon} />
            Certified programme
          </Text>
        </TouchableOpacity>
        <Icon name="star" size={20} color="#FFFFFF" style={styles.star} />
        <Text style={styles.icontext}>Rated 4.85/5</Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <Text style={{color:"#630330"}}><Icon name="check" size={16} color="#630330" />India's No1 Makeup Course</Text>
        <Text style={{color:"#630330"}} ><Icon name="check" size={16} color="#630330" />Learn by Live Do-it Together Class</Text>
        <Text style={{color:"#630330"}} ><Icon name="check" size={16} color="#630330" />Ultimate Practice Session to master skills</Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer2}>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter Your WhatsApp Number"
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.dropdown}>
          <Text  style={styles.dropdownText} onPress={() => { setGprofession(!getProfession); }}>{profession}</Text>
          {getProfession && <ScrollView style={styles.dropitem}>
            {['Student', 'Software Engineer', 'Housewife', 'Police', 'Doctor', 'Teacher'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.drop}
                onPress={() => { setProfession(option); setGprofession(false); }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>}
        </View>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText} onPress={() => { setGgoal(!getGoal); }}>{goal}</Text>
          {getGoal && <ScrollView style={styles.dropitem}>
            {['Learn Makeup for Personal Use', 'Start a Career in Makeup', 'Enhance My Skills'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.drop}
                onPress={() => { setGoal(option); setGgoal(false); }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>}
        </View>
        <View style={styles.dropdown}>
          <Text  style={styles.dropdownText} onPress={() => { setGcity(!getCity); }}>{city}</Text>
          {getCity && <ScrollView style={styles.dropitem}>
            {['Delhi', 'Mumbai', 'Bangalore', 'Chennai'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.drop}
                onPress={() => { setCity(option); setGcity(false); }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView >
        <ImageBackground source={{uri:'https://st.depositphotos.com/1177973/1989/i/450/depositphotos_19896063-stock-photo-hair-brushes-hairdryer-straighteners-and.jpg'}} style={styles.img}></ImageBackground>
        <ThemedView style={{height:'auto', opacity:0.7,width:200 ,padding:10 ,position:'absolute',top:'25%',left:'25%'}}>
          <Text style={{color:'#630330',fontSize:15, textAlign:'center'}}>Why Should You Choose AirBlack ?</Text>
          <ThemedView style={{display:'flex',
           flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center',
           padding:10,
           borderRadius:10,
           flexWrap:'wrap'
          }}>
            <ThemedView>
            
              <Text style={{color:'#630330',fontSize:15, textAlign:'center' ,padding:5}}> <FontAwesomeIcon icon={faVideo}  style={{color:'#630330'}}/>                           Do it Together live on zoom</Text>
            </ThemedView>
            <ThemedView>
            
            <Text style={{color:'#630330',fontSize:15, textAlign:'center',padding:5}}> <Icon name="star" size={15} color="#630330"  />                           4.85/5 Rated Classes</Text>
            </ThemedView>
            <ThemedView>
           
            <Text style={{color:'#630330',fontSize:15, textAlign:'center',padding:5}}> <FontAwesomeIcon icon={faPeopleGroup} style={{color:'#630330'}} /> 35000+Members</Text>
            </ThemedView>
            
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={{padding:10}}>
        <Text style={{fontStyle:'italic' ,color:'#630330', textAlign:'center'}}>Get certified from India's Biggest Beauty Plathform</Text>
        <ImageBackground style={{width:330,height:200}} source={{uri:'https://res.cloudinary.com/dtks0l86r/image/upload/v1716979551/website-static-assets/Project%20Website/01_aakme5.webp'}}/>
      </ThemedView>
      <ThemedView style={{position:'relative'}}>
         <ThemedView>
         <Text style={{fontStyle:'italic' ,color:'#630330', textAlign:'center' }}>Goin Our Community and Grow Together</Text>
         </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: 13,
  },
  img:{
    width: '100%',
    height: 400,
    opacity:0.7,
  },
  stepContainer1: {
    gap: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stepContainer2: {
    gap: 8,
    marginBottom: 8,
    backgroundColor:'#B01E28',
    padding:20,
    borderRadius:15,

  },
  dropdownText:{
    color:'white'

  },
  headerimage: {
    height: 300,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'relative',
  },
  logo: {
    width: 100,
  },
  button: {
    backgroundColor: 'orange',
    padding: 2,
    borderRadius: 5,
    width: 200,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  star: {
    width: 20,
    height: 20,
    color: 'orange',
  },
  icontext: {
    fontSize: 14,
    color: 'orange',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',

  },
  stepContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'white'
  },
  dropdown: {
    marginBottom:15,
  },
  dropitem: {
    maxHeight: 100,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    overflow:'scroll'
  },
  drop: {
    paddingVertical: 5,
    color:'orange',
  },
  submitButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
