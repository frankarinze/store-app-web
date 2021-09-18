import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./api";
import { Item } from "./types";
import { useMediaQuery } from "react-responsive";


export const useProducts = () => {
    const [appState, setAppState] = useState<{
      loading: boolean;
      data: Item[];
    }>({
      loading: false,
      data: []
    })

    useEffect(() => {
        setAppState(prevState => ({
          ...prevState,
          loading: !prevState.loading
        }));
        const apiUrl = `${BASE_URL}/products`;
        axios.get(apiUrl).then((repos) => {
          const res = repos.data;
        console.log(res, 'see')
    
          setAppState({ loading: false, data: res  });
        });
      }, [setAppState]);

    return appState;
}


export const useResponsive = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1680px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return [isTabletOrMobileDevice, isTabletOrMobile, isBigScreen, isDesktopOrLaptop, isPortrait, isRetina];
}


