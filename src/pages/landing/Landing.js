import React, {useState, useRef, useContext, useEffect} from 'react'
import { View, Text, ImageBackground, TouchableOpacity,KeyboardAvoidingView, Animated, Dimensions, TextInput,Keyboard, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { LiteCreditCardInput } from "react-native-credit-card-input-view";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import styles from './Styles'
import Colors from '../../constants/colors';
import colors from '../../constants/colors';

import LoadingPage from '../../components/loadingPage/LoadingPage';
import { UserContext } from '../../components/context/authContext';
import Paquete from '../../components/paquete/Paquete';
import { getAllPaquetes, crearSubscription } from '../../controllers/PackagesController';
import { registro } from '../../controllers/UsersController';


const Landing = ({navigation}) => {

    const {height, width} = Dimensions.get('window');
	const [loading, setLoading] = useState(false);

    const [loginStatus, setLogInStatus] = useState(false);
    const [registerStatus, setregisterStatus] = useState(false);
    const [registerPackage, setregisterPackage] = useState(false);
    const [registerCard, setregisterCard] = useState(false);
    const [badLogin, setbadLogin] = useState(0);
    const [emailLOGIN, setemailOGIN] = useState('');
    const [passwordLOGIN, setpasswordLOGIN] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credit, setCredit] = useState();
    const [paquetes, setPaquetes] = useState();

    const [auxUserData, setAuxUserData] = useState({});
    const [selectedPackages, setSelectedPackages] = useState([]);

    const yScrollLogo = useRef(new Animated.Value(0)).current;
    const yScrollButtons = useRef(new Animated.Value((height.valueOf())-(height.valueOf()*0.8))).current;
    const yScrollTest = useRef(new Animated.Value(height.valueOf())).current; //El animation del login
    const yScrollTestRegister = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del registro
    const yScrollTestPackage = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del paquetes
    const yScrollTestCard = useRef(new Animated.Value(height.valueOf()+200)).current; //El animation del tarjeta

    useEffect(() => {
        try{
            const paquetesData = async ()=>{
                let data = await getAllPaquetes();
                if(data != undefined){
                    setPaquetes(data.data);
                }
            }
            paquetesData();
        }catch (e){
            console.log("Error al adquirir paquetes");
        }
    }, [])

    const handleShowLogin = () =>{
        Animated.parallel([
            Animated.timing(yScrollLogo, {
                toValue: loginStatus ? 0 : -50,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollButtons, {
                toValue: loginStatus ? ((height.valueOf())-(height.valueOf()*0.8)) : -1000,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTest, {
                toValue: loginStatus ? height.valueOf() : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setLogInStatus(!loginStatus);
        });
    }

    const handleShowRegister = () =>{
        Animated.parallel([
            Animated.timing(yScrollLogo, {
                toValue: registerStatus ? 0 : -50,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollButtons, {
                toValue: registerStatus ? ((height.valueOf())-(height.valueOf()*0.8)) : -1000,
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestRegister, {
                toValue: registerStatus ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setregisterStatus(!registerStatus);
        });
    }

    const handleShowPackage = async (value) =>{

        // setRegisterLoading(true);
        // const userData = value.authContext.signUp({email,name,surname,password});

        // let AUXREGISTRODATA = {
        //     email: email,
        //     password: password,
        //     name: name,
        //     last_name: surname,
        //     admin: false,
        //     tenant: 'mobile'
        // }

        // const userData = await registro(AUXREGISTRODATA);
        // if(userData != undefined){
        //     console.log('FROM LANDING');
        //     console.log(userData);
        //     setAuxUserData(userData.user);
        //     setRegisterLoading(false);
        //     setemailOGIN(email);
        //     setpasswordLOGIN(password);

        Animated.parallel([
            Animated.timing(yScrollTestRegister, {
                toValue: registerPackage ? height.valueOf()*0.35 : height.valueOf()+200, 
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestPackage, {
                toValue: registerPackage ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setregisterPackage(!registerPackage);
        });
        // }else{
        //     console.log('NO SE PUDO REGISTRAR');
        // }
    }

    const handleShowCard = () =>{

        console.log(selectedPackages);

        Animated.parallel([
            Animated.timing(yScrollTestPackage, {
                toValue: registerCard ? height.valueOf()*0.35 : height.valueOf()+200, 
                duration: 700,
                useNativeDriver: false
            }).start(),
            Animated.timing(yScrollTestCard, {
                toValue: registerCard ? height.valueOf()+200 : height.valueOf()*0.35 , 
                duration: 700,
                useNativeDriver: false
            }).start(),
        ]).start(() => {
            // callback
            setregisterCard(!registerCard);
        });
    }

    const handleLogin =  async(value, flag, emailAux = null, passAux = null)=>{

        //Flag on TRUE comes from login - False from register
        if(flag){
            let emailString = emailLOGIN;
            let passString = passwordLOGIN;
            // const status = await value.authContext.signIn({emailString,passwordLOGIN});
            const status = await value.authContext.signIn({emailString,passString});
            if(status === 401){
                setbadLogin(3);
            }
        }else{
            let emailString = emailAux;
            let passString = passAux;
            // const status = await value.authContext.signIn({emailString,passwordLOGIN});
            const status = await value.authContext.signIn({emailString,passString});
            if(status === 401){
                setbadLogin(3);
            }
        }
        // setLoading(false);
    }

    const handleTextMail = (text)=>{
        setemailOGIN(text)
        if(emailLOGIN.localeCompare('')){
            setbadLogin(0)
        }
    }

    const handleAddPackage = (packageID) => {

        //TODO: HANDLE EL ELIMINAR UN PAQUETE YA SELECCIONADO. HECHO PERO NO SE VE

        if(selectedPackages.includes(packageID)){
            let aux = selectedPackages;
            console.log("Se fué " + packageID);
            setSelectedPackages(aux.filter(auxID => auxID != packageID))
        }else{
            console.log("Entró " + packageID);
            setSelectedPackages([...selectedPackages,packageID]);
        }


    }

    const handleLoginAfterRegister = async (value) => {
        //----Registro------
        
        let AUXREGISTRODATA = {
            email: email,
            password: password,
            name: name,
            last_name: surname,
            admin: false,
            tenant: 'mobile'
        }

        const userData = await registro(AUXREGISTRODATA);

        if(userData != undefined){
            console.log('FROM LANDING');
            console.log(userData);
            setAuxUserData(userData.user);
            setemailOGIN(email);
            setpasswordLOGIN(password);
        
            //Crear subscripción
            
            let auxData = {
                id_usuario: userData.user._id,
                paquetes: selectedPackages,
                firstName: userData.user.name,
                lastName: userData.user.last_name,
                email: userData.user.email,
                telephone: "1111111111"
            }
            
            let response = await crearSubscription(auxData);
            console.log('RESPONSE DEL CREARSUBSCRIPCIOn');
            console.log(response);

            if(response != undefined){

                //---logueo-----
                console.log('LOGUE EMAIL: ' + email);
                console.log('LOGUE PASSWORD: ' + password);
                await handleLogin(value, false,AUXREGISTRODATA.email, AUXREGISTRODATA.password);
            }else{
                console.log('Error al crear Sub');
            }
        }
    }

    //---------Renders------------

    const login = ()=>{
            return(
                <UserContext.Consumer>
                    {value => (
                        <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTest, Index: 100}} onTouchStart={()=>handleKeyboard()}>
                            <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%',justifyContent:'space-around', alignItems:'center'}}>
                                <KeyboardAvoidingView style={styles.inputWrapper} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                    {badLogin === 3 ? <Text style={{color: 'red', fontSize: 20}}>Error, datos incorrectos</Text> : null}
                                    <TextInput autoCapitalize={'none'} placeholder={'Mail'} style={[styles.input, {borderColor:'red', borderWidth: badLogin}]} keyboardType={'email-address'} onChangeText={text => handleTextMail(text)}></TextInput>
                                    <TextInput autoCapitalize={'none'} placeholder={'Contraseña'} style={[styles.input, {borderColor:'red', borderWidth: badLogin}]} keyboardType={'default'} secureTextEntry={true} onChangeText={text => setpasswordLOGIN(text)}></TextInput>
                                </KeyboardAvoidingView>
                                <View style={styles.buttonsWrapper}>
                                    <TouchableOpacity style={styles.button} onPress={()=>{setLoading(true); handleLogin(value, true);}}>
                                        {loading ? <ActivityIndicator size={'large'} color={colors.white}/> : 
                                        <Text style={styles.buttonText}>Iniciar Sesion</Text>}
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowLogin()}>
                                        <Text style={styles.buttonText}>Atrás</Text>
                                    </TouchableOpacity>
                                </View>
                        </BlurView>
                        </Animated.View>
                )}</UserContext.Consumer>
            )
    }

    const register = ()=>{
        return(
            <UserContext.Consumer>
            {value => (
                <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestRegister, Index: 100}}>
                    <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', justifyContent:'space-evenly', alignItems:'center'}}>
                        <KeyboardAvoidingView style={{width:'100%'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <View style={styles.inputWrapper} >
                            <TextInput placeholder={'Nombre'} style={styles.input} keyboardType={'default'} onChangeText={(text)=>setName(text)}></TextInput>
                            <TextInput placeholder={'Apellido'} style={styles.input} keyboardType={'default'} onChangeText={(text)=>setSurname(text)}></TextInput>
                            <TextInput placeholder={'Correo electrónico'} style={styles.input} keyboardType={'email-address'} onChangeText={(text)=>setEmail(text)}></TextInput>
                            <TextInput placeholder={'Contraseña'} style={styles.input}  keyboardType={'default'} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}></TextInput>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={styles.buttonsWrapper}>
                            <TouchableOpacity style={styles.button} onPress={()=>handleShowPackage(value)}>
                                <Text style={styles.buttonText}>Siguiente</Text>
                                {/* {registerLoading ? <ActivityIndicator size={'large'} color={colors.white}/> : 
                                        <Text style={styles.buttonText}>Siguiente</Text>} */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowRegister()}>
                                <Text style={styles.buttonText}>Atrás</Text>
                            </TouchableOpacity>
                        </View>
                </BlurView>
                </Animated.View>
            )}
            </UserContext.Consumer>
        )
    }

    const packageSelector = ()=>{
        return(
            <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestPackage, Index: 100}}>
                <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', alignItems:'center'}}>
                    <Text style={styles.paqueteText}>Selección de Paquetes</Text>
                    <FlatList
                    data={paquetes}
                    style={styles.paquetesWrapper}
                    keyExtractor={item => `${item.id_paquete}`}
                    renderItem={(item) => {
                        let selectedFlag = false;
                        if(selectedPackages.includes(item.item.id_paquete)){
                            selectedFlag = true;
                        };
                        return(
                            <Paquete id={item.item.id_paquete} selected={selectedFlag} nombre={item.item.nombre} precio={item.item.precio} imagen={item.item.imagen} estado={item.item.estado} descripcion={item.item.descripcion} contenidos={item.item.descripcion} handleAddPackage={handleAddPackage}/>
                        )
                    }}

                    />
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity style={styles.button} onPress={()=>handleShowCard()}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowPackage()}>
                            <Text style={styles.buttonText}>Atrás</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </Animated.View>
        )
    }

    const handleKeyboard = ()=>{
        if(Keyboard.addListener('keyboardDidShow')){
            Keyboard.dismiss()
        }
    }

    const cardDeclarer = ()=>{
        return(
            <UserContext.Consumer>
                {value => (
                    <Animated.View style={{width:'100%', height:'65%',  position: 'absolute', top: yScrollTestCard, Index: 100}}>
                        <BlurView  intensity={80} tint="dark" style={{width: '100%', height: '100%', justifyContent:'space-evenly', alignItems:'center'}} onTouchStart={()=>handleKeyboard()}>
                            <Text style={styles.buttonText}>Ingrese su Método de Pago</Text>
                            <View style={[styles.inputWrapper]}>
                                <View style={[styles.input, {justifyContent: 'center', alignItems: 'center'}]}>
                                    <LiteCreditCardInput onChange={data => setCredit(data)}/>
                                </View>
                            </View>
                            <View style={styles.buttonsWrapper}>
                                <TouchableOpacity style={styles.button} onPress={()=>{setLoading(true); handleLoginAfterRegister(value)}}>
                                    {loading ? <ActivityIndicator size={'large'} color={colors.white}/> : 
                                        <Text style={styles.buttonText}>Registrarse</Text>}
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowCard()}>
                                    <Text style={styles.buttonText}>Atrás</Text>
                                </TouchableOpacity>
                            </View>
                        </BlurView>
                    </Animated.View>
            )}</UserContext.Consumer>
        )
    }

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require('../../assets/landing/fondov2.png')}
            style={{width:'100%', height:'100%', backgroundColor: Colors.primaryv3, alignItems:'center'}}
            resizeMode={'cover'}
            onLoadStart={()=><ActivityIndicator size={'large'} color={colors.white}/>}
            >
            <View style={styles.logoWrapper}>
                <Animated.Image
                source={require('../../assets/landing/Logo_final.png')}
                resizeMode={'contain'}
                style={{width:'70%',position: 'relative',height:150,top: yScrollLogo}}>
                </Animated.Image>
            </View>
            {login()}
            {register()}
            {packageSelector()}
            {cardDeclarer()}
            <Animated.View style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                position: 'absolute',
                bottom: yScrollButtons,
                zIndex: 10
            }}>
                <TouchableOpacity style={styles.button} onPress={()=>handleShowLogin()}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignUp} onPress={()=>handleShowRegister()}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </Animated.View> 
            </ImageBackground>   
        </View>
    )
}

export default Landing;