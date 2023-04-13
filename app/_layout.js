import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashSCreen from 'expo-splash-screen';

SplashSCreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded]= useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded) await SplashSCreen.hideAsync();
  },[fontsLoaded])

  if(!fontsLoaded) return null;
  return <Stack onLayout = {onLayoutRootView}/>;
};

export default Layout;
