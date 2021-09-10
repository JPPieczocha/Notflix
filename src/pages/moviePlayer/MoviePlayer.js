import React,{useState, useRef } from 'react';
import { View, StyleSheet, Button, Dimensions, TouchableWithoutFeedback, Text, TouchableOpacity,Animated, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors';

const {width, height} = Dimensions.get('window')

const MoviePlayer = ({navigation, route})=>{

	const {title} = route.params;
	const [fullScreen,setFullScreen] = useState(false);
	const [topLayer,setTopLayer] = useState(true);
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});
	const fadeAnim = useRef(new Animated.Value(1)).current;

	const handleTouchDisplay = ()=>{
		Animated.timing(fadeAnim, {
			toValue: topLayer ? 0 : 1,
			duration: 700,
			useNativeDriver: true
		}).start(({ finished })=>{
			setTopLayer(!topLayer)
		});
	}

	const fullScreenPlayback = ()=>{
		if(Platform.OS === 'ios'){
			video.current.presentFullscreenPlayer()
		}
	}

	const handleDismissFullScreen = ()=>{
		if(Platform.OS === 'ios'){
			if(!fullScreen){
				setFullScreen(!fullScreen)
				return;
			}
			if(status.isLoaded && fullScreen){
				navigation.pop();
			}
		}
	}

	const handlePlatformNativeControls = ()=>{
		if(Platform.OS === 'ios'){
			return false;
		}
		return true;
	}

	const videoLayer = ()=>{
		if(topLayer){
			return(
				<Animated.View style={{
					position:'absolute',
					top:0,
					left:-220, //FEO
					height:width, 
					width:height, 
					backgroundColor:Colors.transparentBlack,
					zIndex:1000,
					justifyContent:'space-between',
					opacity: fadeAnim
					}}
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
						<View style={styles.buttonsFooter}>
							<TouchableOpacity style={styles.backButton} onPress={()=>handleBackwardVideo()}>
								<Ionicons name="ios-play-back-sharp" size={30} color={Colors.inactiveTint} />

							</TouchableOpacity>
							
							<TouchableOpacity style={styles.backButton} onPress={()=>handlePlay()}>
								<Ionicons name={status.isPlaying ? 'pause' : 'play'} size={30} color={Colors.inactiveTint}/>
							</TouchableOpacity>

							{/* <TouchableOpacity style={styles.backButton} onPress={()=>prueba()}> */}
							<TouchableOpacity style={styles.backButton} onPress={()=>handleForwardVideo()}>
								<Ionicons name="ios-play-forward-sharp" size={30} color={Colors.inactiveTint} />
							</TouchableOpacity>
						</View>
						<Text style={styles.headerLayerText}>--{hours} : {minutes} : {seconds}----</Text>
						{/* Lo de arriba es prueba */}
					</View>
				</Animated.View>
			)
		}
	}

	return (
		<View style={styles.container}>
		<TouchableWithoutFeedback onPress={()=>handleTouchDisplay()}>
			<View onPress={()=>console.log('TOQUE')}>
				{/* {videoLayer()} */}
				<Video
					ref={video}
					style={styles.video}
					source={{
					uri: 'https://es.vid.web.acsta.net/nmedia/34/19/06/03/14//19562331_hd_013.mp4'
					,}}
					resizeMode="contain"

					//Y si lo pongo en pantalla chiquita y doy la chance de que hagan fullscreen?? MMm
					onPlaybackStatusUpdate={status => setStatus(() => status)}
					shouldPlay={true}
					autoplay={true}
					useNativeControls={handlePlatformNativeControls()}
					onLoad={()=>fullScreenPlayback()}
					onFullscreenUpdate={()=>handleDismissFullScreen()}
				/>
			</View>
		</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		// transform: [{ rotate: '90deg' }]
	},
	video: {
	alignSelf: 'center',
	// width: height,
	// height: width,
	width: width,
	height: height,
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
		justifyContent:'center'
	},
	buttonsFooter:{
		width: '25%',

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent:'space-around'
	}

});

export default MoviePlayer;