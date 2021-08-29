import React,{useState} from 'react';
import { View, StyleSheet, Button, Dimensions, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors';
import { rosybrown } from 'color-name';


const {width, height} = Dimensions.get('window')

const VideoPlayer = ({navigation, route})=>{

	const {title} = route.params;
	const [topLayer,setTopLayer] = useState(true);
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});


	const handleTouchDisplay = ()=>{
		setTopLayer(!topLayer)
	}

	const handlePlay = ()=>{
		status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
	}

	const handleBackButton = ()=>{
		navigation.pop()
	}

	const videoLayer = ()=>{
		if(topLayer){
		return(
			<View style={{
				position:'absolute',
				top:0,
				left:-220, //FEO
				height:width, 
				width:height, 
				backgroundColor:Colors.transparentBlack,
				zIndex:1000,
				justifyContent:'space-between'}}
				>
				<View style={styles.headerLayer}>
					<TouchableOpacity style={styles.backButton} onPress={()=>handleBackButton()}>
						<Ionicons name={'arrow-back'} size={30} color={Colors.inactiveTint}/>
					</TouchableOpacity>
					<Text style={styles.headerLayerText}>{title}</Text>
					<Text>              </Text> 
					{/* Lo de arriba es prueba */}
				</View>

				<View style={styles.footerLayer}>
					<TouchableOpacity style={styles.backButton} onPress={()=>handlePlay()}>
						<Ionicons name={status.isPlaying ? 'pause' : 'play'} size={30} color={Colors.inactiveTint}/>
					</TouchableOpacity>
					<Text style={styles.headerLayerText}>----------Aca va la duracion---------</Text>
					{/* Lo de arriba es prueba */}
				</View>
				

			</View>
		)
		}
	}



	return (
		<View style={styles.container}>


		<TouchableWithoutFeedback onPress={()=>handleTouchDisplay()}>
			<View onPress={()=>console.log('TOQUE')}>
				{videoLayer()}
				<Video
					ref={video}
					style={styles.video}
					source={{
					uri: 'https://vod-progressive.akamaized.net/exp=1630288242~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3289%2F22%2F566446945%2F2678133314.mp4~hmac=0ef84e5ccfdf76d3f9f660eadae66532d6c2703245b319c8b5b423694ae35a49/vimeo-prod-skyfire-std-us/01/3289/22/566446945/2678133314.mp4?filename=The+Suicide+Squad+-+Trailer+%28126992%29.mp4'
					,}}
					resizeMode="contain"
					onPlaybackStatusUpdate={status => setStatus(() => status)}
					shouldPlay={true}
					autoplay={true}
				/>

			</View>

			{/* <View style={styles.buttons}>
				<Button
				title={status.isPlaying ? 'Pause' : 'Play'}
				onPress={() =>
					status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
				}
				/>
			</View> */}
		</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	//   backgroundColor: '#ecf0f1',
		backgroundColor: 'rgba(0,0,0,0)',
	  transform: [{ rotate: '90deg' }]
	},
	video: {
	  alignSelf: 'center',
	  width: height,
	  height: width,
	  backgroundColor:'#000000'
	},
	buttons: {
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	headerLayer:{
		height:80,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	headerLayerText:{
		color:Colors.white,
		fontSize: 30
	},
	backButton:{
        width:50,
        height:50,
        backgroundColor: Colors.transparentWhite,
        justifyContent:'center',
        alignItems:'center',
    },
	footerLayer:{
		marginBottom: 10,

		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-evenly'
	}

  });

export default VideoPlayer;