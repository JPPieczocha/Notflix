import React,{useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

import LoadingPage from '../../components/loadingPage/LoadingPage';

const {width, height} = Dimensions.get('window')

const MoviePlayer = ({navigation, route})=>{

	const {title, fileURL} = route.params;
	const [fullScreen,setFullScreen] = useState(false);
	const [status, setStatus] = React.useState({});
	const [isLoading,setIsLoading] = useState(true);

	const video = React.useRef(null);

	const fullScreenPlayback = ()=>{
		setIsLoading(false)
		if(Platform.OS === 'ios'){
			video.current.presentFullscreenPlayer()
		}else if(Platform.OS === 'android'){
			ScreenOrientation.unlockAsync()
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

	return (
		<View style={styles.container}>
			{isLoading ? <LoadingPage/> : null}
			<View onPress={()=>console.log('TOQUE')}>
				<Video
					ref={video}
					style={styles.video}
					// source={{uri: fileURL,}}
					source={{uri: 'https://vod-progressive.akamaized.net/exp=1633142766~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3396%2F23%2F591980247%2F2790069735.mp4~hmac=d7dc11438cd517a533d611d5824b8fe510bec1fc9a581259582bb828ef9668a2/vimeo-prod-skyfire-std-us/01/3396/23/591980247/2790069735.mp4?filename=Spider-Man%3A+No+Way+Home+-+Teaser+Trailer+%28127042%29.mp4',}}
					onError={()=>console.log('Error')}
					resizeMode="contain"

					onPlaybackStatusUpdate={status => setStatus(() => status)}
					shouldPlay={true}
					autoplay={true}
					useNativeControls={handlePlatformNativeControls()}
					onLoad={()=>fullScreenPlayback()}
					onFullscreenUpdate={()=>handleDismissFullScreen()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	video: {
		alignSelf: 'center',
		width: width,
		height: height,
		backgroundColor:'#000000'
	}
});

export default MoviePlayer;