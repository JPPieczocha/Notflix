import React,{useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Video, AVPlaybackStatus, ScreenOrientation } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

import LoadingPage from '../../components/loadingPage/LoadingPage';
import Colors from '../../constants/colors';

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
		}else{
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
		}else{

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
					source={{uri: fileURL,}}
					onError={()=>console.log('Error')}
					resizeMode="contain"

					//Y si lo pongo en pantalla chiquita y doy la chance de que hagan fullscreen?? MMm
					onPlaybackStatusUpdate={status => setStatus(() => status)}
					shouldPlay={true}
					autoplay={true}
					useNativeControls={handlePlatformNativeControls()}
					onLoad={()=>fullScreenPlayback()}
					onFullscreenUpdate={()=>handleDismissFullScreen()}
					// onReadyForDisplay={params => {params.naturalSize.orientation = "landscape"}}
					// el onReadyForDisplay era  una solución que no funcionó de una web.
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.primaryv3,
	},
	video: {
		alignSelf: 'center',
		width: width,
		height: height,
		backgroundColor:'#000000'
	}
});

export default MoviePlayer;